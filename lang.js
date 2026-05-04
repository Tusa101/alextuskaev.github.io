/**
 * Language switcher — runs synchronously in <head> to set <html lang> early
 * and to populate window.CV_DATA before cv-loader.js runs.
 *
 * Priority for the active language (highest → lowest):
 *   1. URL query param ?lang=xx (xx ∈ {en, ru})  — also persisted to localStorage
 *   2. User's stored choice in localStorage
 *   3. Hard default: 'en'
 *
 * Public API on window:
 *   window.t(key, vars?)        — translate a UI key, optionally interpolate {placeholders}
 *   window.getLanguage()        — returns 'en' | 'ru'
 *   window.setLanguage(lang)    — switches active language, persists, re-applies DOM
 *   window.applyI18nDom()       — re-walks data-i18n* attributes (idempotent)
 *
 * Listeners:
 *   window.addEventListener('langchange', e => { e.detail.lang })
 */
(function () {
    var STORAGE_KEY  = 'cv-lang';
    var SUPPORTED    = ['en', 'ru'];
    var DEFAULT_LANG = 'en';

    function packFor(lang) {
        return lang === 'ru' ? window.I18N_RU : window.I18N_EN;
    }

    function readUrlLang() {
        try {
            var p = new URLSearchParams(window.location.search).get('lang');
            return p && SUPPORTED.indexOf(p.toLowerCase()) !== -1 ? p.toLowerCase() : null;
        } catch (_) { return null; }
    }

    function readStoredLang() {
        try {
            var v = localStorage.getItem(STORAGE_KEY);
            return v && SUPPORTED.indexOf(v) !== -1 ? v : null;
        } catch (_) { return null; }
    }

    function persist(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* private mode etc. */ }
    }

    function stripLangParam() {
        try {
            var url = new URL(window.location.href);
            if (url.searchParams.has('lang')) {
                url.searchParams.delete('lang');
                var search = url.searchParams.toString();
                var clean = url.pathname + (search ? '?' + search : '') + url.hash;
                window.history.replaceState({}, '', clean);
            }
        } catch (_) { /* legacy browsers — leave URL as is */ }
    }

    /** {placeholder} substitution. Missing vars are replaced with empty string. */
    function interpolate(str, vars) {
        if (!vars) return str;
        return str.replace(/\{(\w+)\}/g, function (_, k) {
            return Object.prototype.hasOwnProperty.call(vars, k) ? vars[k] : '';
        });
    }

    function translate(key, vars) {
        var pack = packFor(window.__lang || DEFAULT_LANG);
        var raw  = pack && pack.ui && pack.ui[key];
        if (raw === undefined) {
            // dev convenience — surface missing keys without crashing
            return '[' + key + ']';
        }
        return interpolate(raw, vars);
    }

    /**
     * Walk every node carrying a data-i18n* attribute and apply the matching value.
     * Supported attributes:
     *   data-i18n               → textContent
     *   data-i18n-html          → innerHTML  (use for strings with embedded markup)
     *   data-i18n-placeholder   → placeholder attribute
     *   data-i18n-title         → title attribute
     *   data-i18n-aria-label    → aria-label attribute
     */
    function applyI18nDom(root) {
        var scope = root || document;

        scope.querySelectorAll('[data-i18n]').forEach(function (node) {
            node.textContent = translate(node.getAttribute('data-i18n'));
        });
        scope.querySelectorAll('[data-i18n-html]').forEach(function (node) {
            node.innerHTML = translate(node.getAttribute('data-i18n-html'));
        });
        scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (node) {
            node.setAttribute('placeholder', translate(node.getAttribute('data-i18n-placeholder')));
        });
        scope.querySelectorAll('[data-i18n-title]').forEach(function (node) {
            node.setAttribute('title', translate(node.getAttribute('data-i18n-title')));
        });
        scope.querySelectorAll('[data-i18n-aria-label]').forEach(function (node) {
            node.setAttribute('aria-label', translate(node.getAttribute('data-i18n-aria-label')));
        });

        // <title> — page-specific key chosen by a meta tag, so we don't ship the
        // wrong title for a few ms while waiting for JS.
        var titleMeta = document.querySelector('meta[name="i18n-title-key"]');
        if (titleMeta) {
            var key = titleMeta.getAttribute('content');
            if (key) document.title = translate(key);
        }
    }

    function pickInitial() {
        var fromUrl = readUrlLang();
        if (fromUrl) {
            persist(fromUrl);          // sticky — first visit with ?lang=ru should keep RU on next visits
            return { lang: fromUrl, fromUrl: true };
        }
        return { lang: readStoredLang() || DEFAULT_LANG, fromUrl: false };
    }

    function setHtmlLang(lang) {
        document.documentElement.setAttribute('lang', lang);
    }

    function setCvData(lang) {
        var pack = packFor(lang);
        if (pack && pack.cv) window.CV_DATA = pack.cv;
    }

    function setLanguage(lang) {
        if (SUPPORTED.indexOf(lang) === -1) return;
        if (window.__lang === lang) return;
        window.__lang = lang;
        persist(lang);
        setHtmlLang(lang);
        setCvData(lang);
        applyI18nDom();
        updateToggleButton();
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    }

    function globeSvg() {
        return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
               ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
               '<circle cx="12" cy="12" r="9"/>' +
               '<path d="M3 12h18"/>' +
               '<path d="M12 3a14 14 0 0 1 0 18"/>' +
               '<path d="M12 3a14 14 0 0 0 0 18"/>' +
               '</svg>';
    }

    function updateToggleButton() {
        var btn = document.getElementById('lang-toggle');
        if (!btn) return;
        var current = window.__lang || DEFAULT_LANG;
        var nextLang = current === 'en' ? 'ru' : 'en';
        var label    = nextLang.toUpperCase();
        var titleKey = nextLang === 'ru' ? 'lang.toRu' : 'lang.toEn';
        var title    = translate(titleKey);

        btn.innerHTML = globeSvg() + '<span class="lang-toggle-label">' + label + '</span>';
        btn.setAttribute('aria-label', title);
        btn.setAttribute('title', title);
        btn.setAttribute('data-target-lang', nextLang);
    }

    function wireToggleButton() {
        var btn = document.getElementById('lang-toggle');
        if (!btn) return;
        updateToggleButton();
        btn.addEventListener('click', function () {
            var target = btn.getAttribute('data-target-lang') || 'en';
            setLanguage(target);
        });
    }

    /* ── Step 1: pick lang and apply non-DOM bits before cv-loader runs ── */
    var pick = pickInitial();
    window.__lang = pick.lang;
    setHtmlLang(pick.lang);
    setCvData(pick.lang);
    if (pick.fromUrl) stripLangParam();

    /* ── Step 2: expose public API ── */
    window.t            = translate;
    window.getLanguage  = function () { return window.__lang; };
    window.setLanguage  = setLanguage;
    window.applyI18nDom = applyI18nDom;

    /* ── Step 3: wire DOM-dependent bits once parsed ── */
    document.addEventListener('DOMContentLoaded', function () {
        applyI18nDom();
        wireToggleButton();
    });
}());
