 // Animation pour la navbar au scroll
 window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Simulation de données météo (dans un vrai site, utiliser une API)
function updateWeather() {
    const weatherData = {
        temp: 28,
        waterTemp: 26,
        condition: "Ensoleillé",
        humidity: "65%",
        icon: "sun"
    };
    
    document.querySelector('.weather-temp').textContent = weatherData.temp + '°C';
    document.querySelector('.weather-icon i').className = 'fas fa-' + weatherData.icon;
    document.querySelector('.weather-widget p:last-child').innerHTML = 
        `<strong>${weatherData.condition}</strong><br>Humidité ${weatherData.humidity}`;
}

// Appeler la fonction au chargement
updateWeather();

// Simuler un changement de météo toutes les 3 heures (démonstration)
setInterval(updateWeather, 10800000);

// Animation des cartes d'attractions au survol
const attractionCards = document.querySelectorAll('.attraction-card');
attractionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});