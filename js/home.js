// ─────────────────────────────────────────────
// MAHAREF — Home Page
// Cycles the hero logo through 20 variants.
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  const heroLogoImg = document.getElementById('hero-logo');
  if (!heroLogoImg) return;

  const total = 20;
  let idx = 0;

  // Preload all logos
  const preloaded = [];
  for (let i = 1; i <= total; i++) {
    const im = new Image();
    im.src = `assets/images/logos/Maharf-${String(i).padStart(2, '0')}.png`;
    preloaded.push(im);
  }

  setInterval(() => {
    idx = (idx + 1) % total;
    heroLogoImg.style.opacity = '0';
    setTimeout(() => {
      heroLogoImg.src = preloaded[idx].src;
      heroLogoImg.style.opacity = '1';
    }, 100);
  }, 700);

});
