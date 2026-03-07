// navbar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Copy number
function copyNumber(number) {
    navigator.clipboard.writeText(number);
    alert(`Number Copied:${number}`);
}

// Card toggle
const cards = document.querySelectorAll('.contact-card');

cards.forEach(card => {
    const header = card.querySelector('.card-header');
    const details = card.querySelector('.card-details');

    header.addEventListener('click', () => {
        details.classList.toggle('active');
    });
});