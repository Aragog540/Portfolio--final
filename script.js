function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const certificateCards = document.querySelectorAll('.certificate-card');

certificateCards.forEach(card => {
  card.addEventListener('click', () => {
    const pdfUrl = card.dataset.pdfUrl;
    window.open(pdfUrl, '_blank'); // Open PDF in a new tab
  });
});