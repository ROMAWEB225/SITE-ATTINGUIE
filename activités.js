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
