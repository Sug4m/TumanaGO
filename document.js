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

// Card Toggle
const headers = document.querySelectorAll('.document_header');

headers.forEach(header => {
  header.addEventListener('click', () => {

    const requirements = header.nextElementSibling;
    const arrow = header.querySelector('.btn');

    requirements.classList.toggle('active');
    arrow.classList.toggle('rotate');

  });
});