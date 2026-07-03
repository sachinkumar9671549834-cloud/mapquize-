// GeoMaster Website

console.log("GeoMaster Loaded");

const playBtn = document.querySelector(".start-btn");

if (playBtn) {
  playBtn.addEventListener("click", function(e) {
    e.preventDefault();
    alert("🚀 World Map Quiz is coming soon!");
  });
}

// Smooth scroll for future use
document.querySelectorAll("a[href='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
  });
});
