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


// I-set ang view sa coordinates ng Tumana, Marikina
// [Latitude, Longitude]
var map = L.map('map').setView([14.6552, 121.1030], 16);

// Kunin ang mapa mula sa OpenStreetMap (Libre ito!)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Maglagay ng Marker sa Barangay Hall ng Tumana
var marker = L.marker([14.6552, 121.1030]).addTo(map);
marker.bindPopup("<b>Barangay Tumana Hall</b><br>Dito po ang opisina.").openPopup();

function updateMap(url) {
    const mapFrame = document.getElementById('map-frame');
    
    // Dagdagan ng fade effect bago magpalit (Optional)
    mapFrame.style.opacity = '0.5';
    
    setTimeout(() => {
        mapFrame.src = url;
        mapFrame.style.opacity = '1';
    }, 200);
}