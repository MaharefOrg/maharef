// ─────────────────────────────────────────────
// MAHAREF — Navigation + Footer
// Injects shared nav and footer, sets active
// state, wires hamburger toggle.
// ─────────────────────────────────────────────

(function () {

  /* ── Active page detection ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === 'index.html' && (path === '' || path === 'index.html')) return true;
    return href !== 'index.html' && path === href;
  }

  function navLink(href, label) {
    const cls = isActive(href) ? 'nav-link active' : 'nav-link';
    return `<a href="${href}" class="${cls}">${label}</a>`;
  }

  function mobileLink(href, label) {
    const cls = isActive(href) ? 'mobile-nav-link active' : 'mobile-nav-link';
    return `<a href="${href}" class="${cls}">${label}</a>`;
  }

  /* ── Inject nav ── */
  const navHTML = `
<nav id="site-nav">
  <div class="nav-inner">
    <div class="nav-pill">
      <a href="index.html" class="nav-logo-btn">
        <img src="assets/images/logo.png" alt="محارف">
      </a>
      <div class="nav-links">
        ${navLink('index.html',      'الرئيسية')}
        ${navLink('about.html',      'عن محارف')}
        ${navLink('programs.html',   'البرامج')}
        ${navLink('archive.html',    'الأرشيف')}
        ${navLink('magazine.html',   'المجلة')}
        ${navLink('membership.html', 'العضوية')}
        ${navLink('contact.html',    'تواصل')}
      </div>
      <div class="nav-actions">
        <a href="support.html" class="nav-cta">ادعم محارف</a>
        <button class="nav-hamburger" id="hamburger-btn" aria-label="القائمة">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</nav>

<div id="mobile-menu">
  ${mobileLink('index.html',      'الرئيسية')}
  ${mobileLink('about.html',      'عن محارف')}
  ${mobileLink('programs.html',   'البرامج')}
  ${mobileLink('archive.html',    'الأرشيف')}
  ${mobileLink('magazine.html',   'المجلة')}
  ${mobileLink('membership.html', 'العضوية')}
  ${mobileLink('supporters.html', 'الداعمون')}
  ${mobileLink('support.html',    'ادعم محارف')}
  ${mobileLink('contact.html',    'تواصل معنا')}
  <a href="support.html" class="mobile-menu-cta">ادعم محارف</a>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* ── Hamburger toggle ── */
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger && hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  /* Close mobile menu on link click */
  mobileMenu && mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ── Inject footer ── */
  const footerHTML = `
<footer id="site-footer">
  <div class="container-full">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:3rem; margin-bottom:4rem; padding-bottom:4rem; border-bottom:1px solid rgba(216,204,187,0.12);">
      <div style="max-width:26rem;">
        <img src="assets/images/logo.png" alt="محارف" style="height:2.75rem; width:auto; filter:invert(1); mix-blend-mode:screen; margin-bottom:1.25rem;">
        <p style="color:rgba(248,245,239,0.45); line-height:var(--leading-relaxed); text-wrap:pretty;">
          الحرف العربي ليس شكلًا واحدًا، بل منظومة من الاحتمالات.
        </p>
      </div>
      <div class="footer-cols" style="flex:1; min-width:260px;">
        <div style="display:flex; flex-direction:column; gap:0.875rem;">
          <a href="index.html"      class="footer-link">الرئيسية</a>
          <a href="about.html"      class="footer-link">عن محارف</a>
          <a href="programs.html"   class="footer-link">البرامج</a>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.875rem;">
          <a href="archive.html"    class="footer-link">الأرشيف</a>
          <a href="magazine.html"   class="footer-link">المجلة</a>
          <a href="membership.html" class="footer-link">العضوية</a>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.875rem;">
          <a href="supporters.html" class="footer-link">الداعمون</a>
          <a href="support.html"    class="footer-link">ادعم محارف</a>
          <a href="contact.html"    class="footer-link">تواصل معنا</a>
        </div>
      </div>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <p style="font-size:var(--text-sm); color:rgba(248,245,239,0.25);">© محارف</p>
      <a href="mailto:info@maharef.org" style="font-size:var(--text-sm); color:rgba(248,245,239,0.25); text-decoration:none; transition:color 300ms;" onmouseover="this.style.color='#F8F5EF'" onmouseout="this.style.color='rgba(248,245,239,0.25)'">info@maharef.org</a>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

})();
