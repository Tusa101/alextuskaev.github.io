(function () {
  const form = document.getElementById('notify-form');
  if (!form) return;
  const emailEl = document.getElementById('notify-email');
  const hint = document.getElementById('notify-hint');
  const RECIPIENT = atob('YW10dXNrYUBnbWFpbC5jb20=');
  const DEFAULT_HINT = "I'll email you once · no spam, ever.";

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
      setHint('Please enter a valid email address.', 'error');
      return;
    }

    const subject = 'Blog launch — please notify me';
    const body = [
      'Hi Alexander,',
      '',
      "Please add me to the list — I'd like to be notified when your blog goes live.",
      '',
      '—',
      'Email: ' + email
    ].join('\n');

    window.location.href =
      'mailto:' + RECIPIENT +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    showToast('Redirected to your email client');

    setTimeout(() => {
      emailEl.value = '';
      setHint(DEFAULT_HINT);
    }, 1200);
  });

  emailEl.addEventListener('input', () => {
    if (hint.classList.contains('error')) {
      setHint(DEFAULT_HINT);
    }
  });
})();
