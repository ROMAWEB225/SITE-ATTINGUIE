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

 
 // Gestion des onglets du menu
 function openMenu(menuName) {
    // Cacher tous les contenus de menu
    const menuContents = document.getElementsByClassName("menu-content");
    for (let i = 0; i < menuContents.length; i++) {
        menuContents[i].classList.remove("active");
    }
    
    // Désactiver tous les boutons
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    
    // Afficher le menu sélectionné et activer le bouton
    document.getElementById(menuName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Gestion de la gallerie modale
function openModal(element) {
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImg");
    
    modal.style.display = "flex";
    modalImg.src = element.style.backgroundImage.slice(5, -2); // Extrait l'URL de l'image
}

function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
}

// Fermer la modale en cliquant à l'extérieur
window.onclick = function(event) {
    const modal = document.getElementById("galleryModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Gestion du formulaire de réservation
document.querySelector('.reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    
    // Ici vous pourriez ajouter une requête AJAX pour envoyer les données
    alert(`Merci ${name}, votre réservation pour ${guests} personnes le ${date} a bien été enregistrée. Un email de confirmation a été envoyé à ${email}`);
    
    // Réinitialisation du formulaire
    this.reset();
});