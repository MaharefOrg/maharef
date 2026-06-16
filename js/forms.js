// ─────────────────────────────────────────────
// MAHAREF — Form Submissions
// Static site: opens a pre-filled mailto: link
// then shows a thank-you message in place of
// the form. No backend required.
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  /* ── Contact form ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = contactForm.querySelector('[name="name"]').value.trim();
      const email   = contactForm.querySelector('[name="email"]').value.trim();
      const subject = contactForm.querySelector('[name="subject"]')?.value.trim() || 'رسالة من موقع محارف';
      const message = contactForm.querySelector('[name="message"]').value.trim();

      const body = `الاسم: ${name}\nالبريد: ${email}\n\n${message}`;
      window.location.href =
        `mailto:info@maharef.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      showSuccess(contactForm, 'شكراً لك. سنتواصل معك قريباً.');
    });
  }

  /* ── Membership application ── */
  const memberForm = document.getElementById('membership-form');
  if (memberForm) {
    memberForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name       = memberForm.querySelector('[name="name"]').value.trim();
      const email      = memberForm.querySelector('[name="email"]').value.trim();
      const phone      = memberForm.querySelector('[name="phone"]')?.value.trim() || '';
      const profession = memberForm.querySelector('[name="profession"]')?.value.trim() || '';
      const motivation = memberForm.querySelector('[name="motivation"]')?.value.trim() || '';

      const body = `طلب عضوية\n\nالاسم: ${name}\nالبريد: ${email}\nالهاتف: ${phone}\nالتخصص: ${profession}\n\nالدافع:\n${motivation}`;
      window.location.href =
        `mailto:info@maharef.org?subject=${encodeURIComponent('طلب عضوية — محارف')}&body=${encodeURIComponent(body)}`;

      showSuccess(memberForm, 'تم استلام طلبك. سنتواصل معك قريباً.');
    });
  }

  /* ── Programme application ── */
  const applyForm = document.getElementById('application-form');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name      = applyForm.querySelector('[name="name"]').value.trim();
      const email     = applyForm.querySelector('[name="email"]').value.trim();
      const phone     = applyForm.querySelector('[name="phone"]')?.value.trim() || '';
      const programme = applyForm.querySelector('[name="programme"]')?.value.trim() || '';
      const note      = applyForm.querySelector('[name="note"]')?.value.trim() || '';

      const body = `طلب تسجيل\n\nالاسم: ${name}\nالبريد: ${email}\nالهاتف: ${phone}\nالبرنامج: ${programme}\n\nملاحظات:\n${note}`;
      window.location.href =
        `mailto:info@maharef.org?subject=${encodeURIComponent('طلب تسجيل — محارف')}&body=${encodeURIComponent(body)}`;

      showSuccess(applyForm, 'تم استلام طلبك. سنتواصل معك قريباً.');
    });
  }

});

/* ── Helpers ── */
function showSuccess(form, message) {
  form.innerHTML = `
    <div class="form-success">
      <p style="font-family:var(--font-display); font-size:var(--text-3xl); font-weight:800; color:var(--text-primary); margin-bottom:1rem;">شكراً.</p>
      <p style="color:var(--text-secondary);">${message}</p>
    </div>`;
}
