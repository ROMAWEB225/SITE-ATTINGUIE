document.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Trouver la carte parente
      const card = this.closest('.card');
      
      // Trouver le contenu dépliable dans cette carte
      const expandableContent = card.querySelector('.expandable-content');
      
      // Basculer la classe active
      expandableContent.classList.toggle('active');
      
      // Changer le texte du lien
      this.textContent = expandableContent.classList.contains('active') 
        ? 'Voir moins' 
        : 'En savoir plus';
    });
  });