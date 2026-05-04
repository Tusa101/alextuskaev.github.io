(function () {
  const form = document.getElementById('notify-form');
  if (!form) return;
  const emailEl = document.getElementById('notify-email');
  const hint = document.getElementById('notify-hint');
  const RECIPIENT = atob('YW10dXNrYUBnbWFpbC5jb20=');

  function tr(key, vars) {
    return typeof window.t === 'function' ? window.t(key, vars) : '[' + key + ']';
  }

  const setHint = (text, type) => {
    hint.textContent = text;
    hint.classList.remove('error', 'success');
    if (type) hint.classList.add(type);
  };

  function showToast(message) {
    const existing = document.getElementById('mail-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'mail-toast';
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    toast.offsetHeight;
    toast.classList.add('toast--visible');

    setTimeout(() => {
      toast.classList.remove('toast--visible');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 3500);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailEl.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setHint(tr('blog.notify.errInvalid'), 'error');
      return;
    }

    const subject = tr('blog.notify.subject');
    const body = [
      tr('blog.notify.bodyGreeting'),
      '',
      tr('blog.notify.bodyAsk'),
      '',
      '—',
      tr('blog.notify.bodyEmail', { email })
    ].join('\n');

    window.location.href =
      'mailto:' + RECIPIENT +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    showToast(tr('blog.notify.toast'));

    setTimeout(() => {
      emailEl.value = '';
      setHint(tr('blog.notify.hint'));
    }, 1200);
  });

  emailEl.addEventListener('input', () => {
    if (hint.classList.contains('error')) {
      setHint(tr('blog.notify.hint'));
    }
  });
})();
