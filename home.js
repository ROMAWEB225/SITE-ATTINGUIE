// let currentSlide = 0;
// const slides = document.querySelector('.slides');
// const totalSlides = document.querySelectorAll('.slide').length;

// Fonction pour passer à la diapositive suivante
// function nextSlide() {
//     if (currentSlide < totalSlides - 1) {
//         currentSlide++;
//     } else {
//         currentSlide = 0; // Revenir à la première diapositive
//     }
//     updateSlide();
// }

// Fonction pour mettre à jour la position des diapositives
// function updateSlide() {
//     const offset = -currentSlide * 100; // Calcul du décalage en pourcentage
//     slides.style.transform = `translateX(${offset}%)`; // Appliquer la transformation
// }

// Défilement automatique toutes les 3 secondes
// setInterval(nextSlide, 3000);
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    // Masquer la diapositive actuelle
    slides[currentSlide].classList.remove('active');

    // Passer à la diapositive suivante
    currentSlide = (currentSlide + 1) % totalSlides;

    // Afficher la nouvelle diapositive
    slides[currentSlide].classList.add('active');
}

// Défilement automatique toutes les 3 secondes
setInterval(nextSlide, 3000);

// Initialisation : afficher la première diapositive
slides[currentSlide].classList.add('active');