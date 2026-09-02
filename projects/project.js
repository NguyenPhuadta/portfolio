const progressFill = document.querySelector('.reading-progress span');
const progressLabel = document.querySelector('.site-bar span');

function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const value = available > 0 ? Math.min(100, Math.max(0, (window.scrollY / available) * 100)) : 100;
  progressFill.style.width = `${value}%`;
  progressFill.parentElement.setAttribute('aria-valuenow', String(Math.round(value)));
  progressLabel.textContent = `${Math.round(value)}% read`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -35px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
