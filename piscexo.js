 // Gallery Modal
 function openModal(element) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = 'flex';
    modalImg.src = element.style.backgroundImage.slice(5, -2);
}

function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Current water temperature (simulated)
function updateWaterTemp() {
    const tempElement = document.querySelector('.pool-hero p');
    const currentTemp = 26 + (Math.random() * 0.4 - 0.2); // Small random variation
    tempElement.innerHTML = `50m de longueur • 8 couloirs • Température actuelle : ${currentTemp.toFixed(1)}°C`;
}

// Update temperature on load and every hour
updateWaterTemp();
setInterval(updateWaterTemp, 3600000);