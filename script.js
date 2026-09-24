// ============================================
// Menu mobile
// ============================================
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// Copiar telefone / e-mail
// ============================================
document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    const originalLabel = button.textContent;

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'Copiado!';
    } catch (err) {
      button.textContent = 'Copie manualmente';
    }

    setTimeout(() => {
      button.textContent = originalLabel;
    }, 1800);
  });
});

// ============================================
// Carrossel de depoimentos
// ============================================
const tagTrack = document.getElementById('tag-track');
const tagPrev = document.getElementById('tag-prev');
const tagNext = document.getElementById('tag-next');

function scrollTags(direction) {
  if (!tagTrack) return;
  const card = tagTrack.querySelector('.tag-card');
  const step = card ? card.getBoundingClientRect().width + 20 : 300;
  tagTrack.scrollBy({ left: direction * step, behavior: 'smooth' });
}

if (tagPrev && tagNext) {
  tagPrev.addEventListener('click', () => scrollTags(-1));
  tagNext.addEventListener('click', () => scrollTags(1));
}
