// ---------------------------------------------------------------------------
// cv-loader.js — reads cv-data.json and populates the page
// ---------------------------------------------------------------------------

const ICONS = {
  csharp: '<svg viewBox="0 0 24 24"><path d="M11.5.06a1.94 1.94 0 0 0-.97.26L2.4 5.01a1.94 1.94 0 0 0-.97 1.68v10.62c0 .69.37 1.33.97 1.68l8.13 4.69a1.94 1.94 0 0 0 1.94 0l8.13-4.69c.6-.35.97-.99.97-1.68V6.69c0-.69-.37-1.33-.97-1.68L12.47.32A1.94 1.94 0 0 0 11.5.06zm.5 5.94a6 6 0 0 1 5.2 3l-2.6 1.5a3 3 0 1 0 0 3l2.6 1.5A6 6 0 1 1 12 6zm5 1v1h-1v1h1v1h-1v1h1v1h1v-1h1v-1h-1v-1h1v-1h-1V7zm2 1h1v1h-1zm-3 2h1v1h-1z"/></svg>',
  aspnet: '<svg viewBox="0 0 24 24"><path d="M.79 12.13c0 .9.1 1.78.27 2.63h7v-1.57H1.32a10.8 10.8 0 0 1-.07-2.06h6.86V9.56H1.45a10.6 10.6 0 0 1 .59-2.06h6V5.94H2.81A11.18 11.18 0 0 1 12 .81a11.19 11.19 0 0 1 11.21 11.32A11.19 11.19 0 0 1 12 23.46a11.18 11.18 0 0 1-9.95-6.16h6.01v-1.56h-7A11.13 11.13 0 0 1 .79 12.13zm10.92-2.78a1.46 1.46 0 1 1 0 2.92 1.46 1.46 0 0 1 0-2.92zm5.39-3.04 1.42-.83 1.42.83v1.66l-1.42.83-1.42-.83zm-3.51 4.16 1.42-.82 1.42.82v1.66l-1.42.83-1.42-.83zm7.02 0 1.42-.82 1.42.82v1.66l-1.42.83-1.42-.83zm-3.51 4.17 1.42-.83 1.42.83v1.66l-1.42.82-1.42-.82z"/></svg>',
  azure:  '<svg viewBox="0 0 24 24"><path d="M5.483 21.3H24l-9.84-17.16-3.103 8.55 5.65 6.74-10.382 1.83zM5.4 6.61L0 15.94l3.473.001L9.7 5.6z"/></svg>',
  docker: '<svg viewBox="0 0 24 24"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.05-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>',
  nuget:  '<svg viewBox="0 0 24 24"><path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm0 2.31l8.395 4.846v9.688L12 21.69l-8.395-4.846V7.156L12 2.31zM7.5 8.25v7.5h2.25V12h.75c1.243 0 2.25-1.007 2.25-2.25S11.743 7.5 10.5 7.5H7.5zm2.25 1.5h.75a.75.75 0 0 1 0 1.5h-.75v-1.5zm5.625 1.5a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25zm0 1.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
  rabbitmq: '<svg viewBox="0 0 24 24"><path d="M23.035 9.601h-7.677a.956.956 0 0 1-.962-.962V.962a.956.956 0 0 0-.962-.956H10.56a.956.956 0 0 0-.962.956v7.677a.956.956 0 0 1-.962.962H5.762a.956.956 0 0 1-.961-.962V.962A.956.956 0 0 0 3.839 0H.962A.956.956 0 0 0 0 .962v22.076c0 .53.431.962.962.962h22.073a.956.956 0 0 0 .965-.962V10.561a.956.956 0 0 0-.965-.96zm-4.797 8.07a1.438 1.438 0 0 1-1.443 1.436h-1.92a1.438 1.438 0 0 1-1.443-1.436v-1.927c0-.792.646-1.436 1.443-1.436h1.92c.797 0 1.443.644 1.443 1.436z"/></svg>',
  postgresql: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.2 2c-1.4 0-2.6.3-3.6.9-.9-.3-2.2-.6-3.5-.4-.9.2-1.7.7-2.1 1.4-.9 1.4-.6 4 .4 6.5.5 1.2 1.1 2.2 1.8 2.9.7.7 1.5 1.1 2.2.6.6-.4.8-1.2.9-1.7.3.1.7.1 1.1 0 .1.6.3 1.2.6 1.6.3.5.7.8 1.2.8.6 0 1-.4 1.2-.9.1-.3.2-.6.3-1 .7.8 1.6 1.2 2.6 1.3 1.5.1 3-.6 3.3-2 .3-1.5-.7-2.8-2.2-3-1.5-.1-3 .6-3.3 2-.2.8 0 1.6.5 2.1-.2.2-.4.3-.7.3-.4 0-.7-.2-1-.5-.2-.3-.4-.7-.5-1.2-.1-.5-.1-1-.1-1.6 0-1.8.2-3.4-.5-4.8-.6-1.2-1.8-2-3.6-2zm0 1.5c1.2 0 2 .5 2.5 1.4.6 1.1.5 2.5.5 4.2 0 .6 0 1.2.1 1.8.1.6.3 1.1.6 1.6-.4-.1-.7-.4-.9-.7-.3-.4-.4-.9-.5-1.4-.2-.9-.3-1.8-.3-2.7h-1c0 .9.1 1.9.3 2.9-.3.1-.7.2-1.1.2-.4 0-.8-.1-1.1-.2.1-.7.2-1.5.2-2.3h-1c0 .8-.1 1.6-.2 2.3-.1.5-.3 1-.6 1.3-.3.2-.7.1-1.2-.4-.6-.6-1.2-1.5-1.6-2.6-.9-2.2-1.1-4.4-.5-5.4.3-.4.7-.7 1.3-.8 1.1-.2 2.3.1 3.1.4l.4.2.4-.2c.9-.5 1.9-.8 3.1-.8z"/></svg>',
  redis:  '<svg viewBox="0 0 24 24"><path d="M10.5 1.515c-.892.012-1.745.143-2.473.395-1.456.503-2.27 1.319-2.27 2.157s.814 1.654 2.27 2.157c1.456.503 3.488.503 4.945 0 1.456-.503 2.27-1.319 2.27-2.157s-.814-1.654-2.27-2.157c-.728-.252-1.581-.383-2.473-.395zm-9.59 5.83a.91.91 0 0 0-.66.36C-.5 9.001.97 10.756 4.218 11.927c3.247 1.171 8.317 1.171 11.564 0 3.248-1.171 4.718-2.926 3.971-4.222a.91.91 0 0 0-.66-.36c-.42-.06-.92.13-1.41.46l-.06.04c-.92.62-2.18 1.13-3.7 1.48-1.52.35-3.21.42-4.83.21l-.13-.02c-1.62-.21-3.04-.7-4.13-1.42l-.06-.04c-.49-.33-.99-.52-1.41-.46zm12.34 5.93c-2.78.96-7.06.96-9.84 0-1.4-.49-2.41-1.13-3.01-1.86-.45.37-.7.78-.7 1.21 0 .84.86 1.66 2.42 2.18 3.12 1.04 8.18 1.04 11.3 0 1.56-.52 2.42-1.34 2.42-2.18 0-.43-.25-.84-.7-1.21-.6.73-1.61 1.37-3.01 1.86zm-.04 4.05c-2.78.96-6.98.96-9.76 0-1.41-.49-2.42-1.14-3.02-1.87-.45.37-.7.78-.7 1.22 0 .84.86 1.66 2.42 2.18 3.12 1.04 8.26 1.04 11.38 0 1.56-.52 2.42-1.34 2.42-2.18 0-.44-.25-.85-.7-1.22-.6.73-1.62 1.38-3.04 1.87Z"/></svg>',
  oracle: '<svg viewBox="0 0 24 24"><path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0 0 15.176h8.82a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z"/></svg>',
  grpc:   '<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4a9.6 9.6 0 0 1 9.6 9.6 9.6 9.6 0 0 1-9.6 9.6A9.6 9.6 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4zm-1.2 3.6v3.6H7.2V12h3.6v3.6h2.4V12h3.6V9.6h-3.6V6h-2.4z"/></svg>'
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Decode a base64-encoded contact string. Keeps PII out of plain-text source. */
function d64(s) { try { return atob(s); } catch (_) { return ''; } }

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function skillTag(tag) {
  const cls = 'skill-tag' + (tag.primary ? ' primary' : '');
  const icon = tag.icon && ICONS[tag.icon]
    ? `<span class="skill-icon" aria-hidden="true">${ICONS[tag.icon]}</span>`
    : '';
  return `<span class="${cls}">${icon}${tag.label}</span>`;
}

// ---------------------------------------------------------------------------
// Section renderers
// ---------------------------------------------------------------------------

function renderHero(d) {
  const p = d.personal;

  document.title = `${p.firstName} ${p.lastName} — ${p.title.split(' · ')[0]}`;

  document.getElementById('hero-tag').textContent =
    `${p.status} · ${p.location}`;

  document.getElementById('hero-name').innerHTML =
    `${p.firstName}<br><em>${p.lastName}</em>`;

  document.getElementById('hero-subtitle').textContent = p.title;
  document.getElementById('hero-desc').textContent = p.bio;
}

function renderTerminal(d) {
  const t = d.terminal;
  const p = d.personal;

  const openToJson = JSON.stringify(t.openTo);

  const primaryTags  = t.stackPrimary.map(s => `<span class="t-tag">${s}</span>`).join('');
  const secondaryTags = t.stackSecondary.map(s => `<span class="t-tag2">${s}</span>`).join('');
  const tertiaryTags  = t.stackTertiary.map(s => `<span class="t-tag">${s}</span>`).join('');

  const highlights = t.highlights.map(h =>
    `<span class="t-key">${h.key}</span>:&nbsp;&nbsp;&nbsp;<span class="t-val">${h.value}</span>`
  ).join('<br>');

  document.getElementById('terminal-body').innerHTML = `
    <div class="t-line">
      <span class="t-prompt">❯</span>
      <span class="t-cmd">alex --profile</span>
    </div>
    <div class="t-out">
      <span class="t-key">name</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-val">${p.firstName} ${p.lastName}</span><br>
      <span class="t-key">role</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-val">${t.role}</span><br>
      <span class="t-key">experience</span>:&nbsp;<span class="t-val">${t.experienceLabel}</span><br>
      <span class="t-key">location</span>:&nbsp;&nbsp;&nbsp;<span class="t-val">${p.location.split(',')[1].trim()} ${p.locationFlag}</span><br>
      <span class="t-key">languages</span>:&nbsp;&nbsp;<span class="t-val">EN · RU · HE</span><br>
      <span class="t-key">open_to</span>:&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-val">${openToJson}</span>
    </div>
    <div class="t-line">
      <span class="t-prompt">❯</span>
      <span class="t-cmd">alex --stack</span>
    </div>
    <div class="t-out">
      ${primaryTags}<br>
      ${secondaryTags}<br>
      ${tertiaryTags}
    </div>
    <div class="t-line">
      <span class="t-prompt">❯</span>
      <span class="t-cmd">alex --highlights</span>
    </div>
    <div class="t-out">${highlights}</div>
    <div class="t-line">
      <span class="t-prompt">❯</span>
      <span class="t-cursor"></span>
    </div>`;
}

function renderMetrics(d) {
  const container = document.getElementById('metrics-row');
  container.innerHTML = d.metrics.map(m => `
    <div class="metric">
      <div class="metric-num">${m.value}${m.suffix ? `<span>${m.suffix}</span>` : ''}</div>
      <div class="metric-label">${m.label}</div>
    </div>`).join('');
}

function renderExperience(d) {
  document.getElementById('experience-summary').innerHTML =
    `<strong>${d.experienceSummary.split(' · ')[0]}</strong> · ${d.experienceSummary.split(' · ').slice(1).join(' · ')}`;

  document.getElementById('experience-list').innerHTML = d.experience.map(e => `
    <div class="exp-item">
      <div class="exp-meta">
        <span class="exp-company">${e.company}</span>
        <span class="exp-period">${e.period}</span>
      </div>
      <div class="exp-role">${e.role}</div>
      <div class="exp-industry">${e.industry}</div>
      <ul class="exp-points">
        ${e.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="exp-link">
        Visit company <span class="arrow">↗</span>
      </a>
    </div>`).join('');
}

function renderEducation(d) {
  document.getElementById('education-list').innerHTML = d.education.map(e => `
    <div class="edu-item">
      <span class="edu-period">${e.period}</span>
      <div class="edu-main">
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-school">${e.school}</div>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="exp-link">
          Visit university <span class="arrow">↗</span>
        </a>
      </div>
      <span class="edu-gpa">GPA · ${e.gpa}</span>
    </div>`).join('');
}

function renderSkills(d) {
  document.getElementById('skills-grid').innerHTML = d.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-title">${group.group}</div>
      <div class="skill-tags">
        ${group.tags.map(skillTag).join('')}
      </div>
    </div>`).join('');
}

function renderArchitecture(d) {
  const a = d.architecture;
  const paragraphs = a.paragraphs.map(p => `<p>${p}</p>`).join('');
  const tags = a.tags.map(skillTag).join('');

  document.getElementById('arch-text').innerHTML = `
    <h3>${a.heading}</h3>
    ${paragraphs}
    <div class="arch-tags">${tags}</div>`;
}

function renderContact(d) {
  const p = d.personal;
  const s = d.social;
  const email = d64(p._e);
  const phone = d64(p._p);
  const phoneHref = phone.replace(/\s/g, '');

  document.getElementById('contact-heading').innerHTML = d.contact.heading;
  document.getElementById('contact-blurb').textContent = d.contact.blurb;

  const waHref = 'https://wa.me/' + phoneHref.replace('+', '');
  document.getElementById('contact-links').innerHTML = `
    <a href="mailto:${email}" class="contact-link">
      <span class="contact-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
      </span>
      ${email}
    </a>
    <a href="${waHref}" target="_blank" rel="noopener noreferrer" class="contact-link">
      <span class="contact-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.79L2 22l5.46-1.43c1.36.74 2.91 1.15 4.58 1.15 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 14.18c-.23.64-1.33 1.22-1.84 1.3-.5.08-1.13.11-1.82-.11-.42-.13-.96-.3-1.65-.59-2.9-1.25-4.79-4.17-4.94-4.36-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.3.59-.38.79-.38.2 0 .4.01.57.02.18.01.43-.07.67.51.25.59.84 2.04.91 2.19.08.15.13.33.03.53-.1.2-.15.32-.3.5-.14.18-.3.4-.43.53-.14.14-.28.3-.12.58.16.28.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.22 1.37.28.13.44.11.6-.07.16-.18.69-.8.87-1.08.18-.28.36-.23.61-.14.25.09 1.59.75 1.87.89.28.13.46.2.53.31.07.11.07.64-.16 1.28z"/></svg>
      </span>
      ${phone}
    </a>
    <a href="${s.linkedin.url}" target="_blank" rel="noopener noreferrer" class="contact-link">
      <span class="contact-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </span>
      ${s.linkedin.label}
    </a>
    <a href="${s.github.url}" target="_blank" rel="noopener noreferrer" class="contact-link">
      <span class="contact-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      </span>
      ${s.github.label}
    </a>`;
}

function renderFooter(d) {
  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} ${d.footer.name}.`;
}

// ---------------------------------------------------------------------------
// Contact form — wired up after data loads so RECIPIENT comes from JSON
// ---------------------------------------------------------------------------

function showToast(message) {
  const existing = document.getElementById('mail-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'mail-toast';
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  toast.offsetHeight; // force reflow
  toast.classList.add('toast--visible');

  setTimeout(() => {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3500);
}

function initContactForm(email) {
  const form    = document.getElementById('contact-form');
  const nameEl  = document.getElementById('cf-name');
  const emailEl = document.getElementById('cf-email');
  const msgEl   = document.getElementById('cf-message');
  const hint    = document.getElementById('cf-hint');

  const setHint = (text, type) => {
    hint.textContent = text;
    hint.classList.remove('error', 'success');
    if (type) hint.classList.add(type);
  };

  const markInvalid = (elem, bad) => elem.classList.toggle('invalid', !!bad);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name    = nameEl.value.trim();
    const sender  = emailEl.value.trim();
    const message = msgEl.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender);

    markInvalid(nameEl,  !name);
    markInvalid(emailEl, !emailOk);
    markInvalid(msgEl,   !message);

    if (!name || !emailOk || !message) {
      setHint('Please fill in your name, a valid email, and a message.', 'error');
      return;
    }

    const subject = `Opportunity / Inquiry from ${name}`;
    const body = [
      'Hi Alexander,', '', message, '', '—', `From: ${name}`, `Email: ${sender}`
    ].join('\n');

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    showToast('Redirected to your email client');

    setTimeout(() => {
      nameEl.value = '';
      emailEl.value = '';
      msgEl.value = '';
      markInvalid(nameEl, false);
      markInvalid(emailEl, false);
      markInvalid(msgEl, false);
      setHint('This will open your email client with the message pre-filled.');
    }, 1200);
  });

  [nameEl, emailEl, msgEl].forEach(elem =>
    elem.addEventListener('input', () => markInvalid(elem, false))
  );
}

function initFormTabs() {
  const tabs     = document.querySelectorAll('.form-tab');
  const emailForm = document.getElementById('contact-form');
  const waForm   = document.getElementById('whatsapp-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('form-tab--active'));
      tab.classList.add('form-tab--active');

      const isWa = tab.dataset.tab === 'whatsapp';
      emailForm.style.display = isWa ? 'none' : '';
      waForm.style.display    = isWa ? '' : 'none';
    });
  });
}

function initWhatsAppForm(phone) {
  const companyEl  = document.getElementById('wa-company');
  const roleEl     = document.getElementById('wa-role');
  const locationEl = document.getElementById('wa-location');
  const contactEl  = document.getElementById('wa-contact');
  const sendBtn    = document.getElementById('wa-send');

  const phoneNum = phone.replace(/\D/g, '');

  function buildUrl() {
    const lines = [
      'Hi Alexander, I found your website and would like to discuss a job opportunity.'
    ];

    const company  = companyEl.value.trim();
    const role     = roleEl.value.trim();
    const location = locationEl.value;
    const contact  = contactEl.value.trim();

    if (company)  lines.push(`Company: ${company}`);
    if (role)     lines.push(`Role: ${role}`);
    if (location) lines.push(`Location: ${location}`);
    if (contact)  lines.push(`Contact details: ${contact}`);

    lines.push('', 'Best regards,');
    lines.push('[Your signature]');

    return `https://wa.me/${phoneNum}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  function update() { sendBtn.href = buildUrl(); }

  update();
  [companyEl, roleEl, locationEl, contactEl].forEach(el =>
    el.addEventListener('input', update)
  );
}

// ---------------------------------------------------------------------------
// Bootstrap — cv-data.js must be loaded before this script (sets window.CV_DATA)
// ---------------------------------------------------------------------------

(function () {
  const data = window.CV_DATA;
  if (!data) {
    console.error('cv-loader: window.CV_DATA not found — make sure cv-data.js is loaded before cv-loader.js');
    return;
  }

  renderHero(data);
  renderTerminal(data);
  renderMetrics(data);
  renderExperience(data);
  renderEducation(data);
  renderSkills(data);
  renderArchitecture(data);
  renderContact(data);
  renderFooter(data);
  initContactForm(d64(data.personal._e));
  initWhatsAppForm(d64(data.personal._p));
  initFormTabs();
})();
