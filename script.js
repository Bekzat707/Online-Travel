// script.js

document.addEventListener("DOMContentLoaded", function() {
    initMap();
});

function initMap() {
    // Initialize Leaflet map
    var mymap = L.map('mapid').setView([51.505, -0.09], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(mymap);

    // Example marker
    var marker = L.marker([51.5, -0.09]).addTo(mymap)
        .bindPopup('Example Location')
        .openPopup();
}
