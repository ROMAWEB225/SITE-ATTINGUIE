document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navContent = document.querySelector('.nav-content');
    const navLiens = document.querySelector('.nav-liens');
    const body = document.body;

    burger.addEventListener('click', function() {
        // Basculer les classes active sur les deux éléments
        this.classList.toggle('active');
        this.classList.toggle('toggle'); // Si vous utilisez cette classe pour des animations
        navContent.classList.toggle('active');
        navLiens.classList.toggle('active');
        
        // Empêcher le défilement de la page quand le menu est ouvert
        if(navContent.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('.nav-liens a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            burger.classList.remove('toggle');
            navContent.classList.remove('active');
            navLiens.classList.remove('active');
            body.style.overflow = '';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.arrow-left');
    const nextBtn = document.querySelector('.arrow-right');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Initialisation
    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Mise à jour des indicateurs
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Flèche suivante
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    });
    
    // Flèche précédente
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    });
    
    // Navigation par indicateurs
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.getAttribute('data-index'));
            updateCarousel();
        });
    });
    
    // Redimensionnement
    window.addEventListener('resize', () => {
        updateCarousel();
    });
    
    // Pause au survol
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }, 5000);
    });
});

