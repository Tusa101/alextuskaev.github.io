/**
 * Theme toggle — runs synchronously in <head> to avoid flash of wrong theme.
 *
 * Priority order (highest → lowest):
 *   1. User's manual choice stored in localStorage
 *   2. OS/browser prefers-color-scheme
 *   3. Hard default: dark
 *
 * When no manual choice is saved, the theme also tracks live OS changes.
 */
(function () {
    var STORAGE_KEY = 'cv-theme';

    function saved() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (_) { return null; }
    }

    function osTheme() {
        return (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
            ? 'light'
            : 'dark';
    }

    function current() {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    function sunSVG() {
        return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    }

    function moonSVG() {
        return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }

    function updateButton(btn, theme) {
        if (!btn) return;
        btn.innerHTML = theme === 'dark' ? sunSVG() : moonSVG();
        btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
        btn.setAttribute('title',      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }

    /* ── Apply immediately (before body paints — no flash) ── */
    applyTheme(saved() || osTheme());

    /* ── Wire button + OS change listener after DOM is ready ── */
    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle');

        if (btn) {
            updateButton(btn, current());

            btn.addEventListener('click', function () {
                var next = current() === 'dark' ? 'light' : 'dark';
                applyTheme(next);
                try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
                updateButton(btn, next);
            });
        }

        /* Follow OS changes only when the user hasn't made a manual choice */
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
                if (!saved()) {
                    var theme = e.matches ? 'light' : 'dark';
                    applyTheme(theme);
                    updateButton(document.getElementById('theme-toggle'), theme);
                }
            });
        }
    });
}());
