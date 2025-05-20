 // Gestion du formulaire
 document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Ici vous pourriez ajouter une requête AJAX pour envoyer les données
    alert(`Merci ${name}, votre message a bien été envoyé. Nous vous répondrons à l'adresse ${email} dans les plus brefs délais.`);
    
    // Réinitialisation du formulaire
    this.reset();
});

// Gestion de la FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Fermer toutes les réponses
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.classList.remove('show');
        });
        
        document.querySelectorAll('.faq-question').forEach(item => {
            item.classList.remove('active');
        });
        
        // Ouvrir la réponse cliquée si elle était fermée
        if(!isActive) {
            question.classList.add('active');
            answer.classList.add('show');
        }
    });
});

// Ouvrir la première question par défaut
document.querySelector('.faq-question').click();