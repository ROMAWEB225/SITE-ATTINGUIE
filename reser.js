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



// Set min date for datepicker (today)
document.getElementById('visitDate').min = new Date().toISOString().split('T')[0];
        
// Update steps
function updateSteps(currentStep) {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        
        if(index < currentStep - 1) {
            step.classList.add('completed');
        } else if(index === currentStep - 1) {
            step.classList.add('active');
        }
    });
}

// Navigation between steps
function nextStep(currentId, nextId) {
    // Validate current step before proceeding
    if(currentId === 'ticketSection') {
        const adultTickets = parseInt(document.getElementById('adultTickets').value);
        const childTickets = parseInt(document.getElementById('childTickets').value);
        
        if(adultTickets === 0 && childTickets === 0) {
            alert('Veuillez sélectionner au moins un billet');
            return;
        }
    } else if(currentId === 'infoSection') {
        // Add validation for required fields if needed
    }
    
    document.getElementById(currentId).classList.remove('active');
    document.getElementById(nextId).classList.add('active');
    
    // Update step indicator
    const stepNumber = parseInt(nextId.replace(/[^0-9]/g, ''));
    updateSteps(stepNumber);
}

function prevStep(currentId, prevId) {
    document.getElementById(currentId).classList.remove('active');
    document.getElementById(prevId).classList.add('active');
    
    // Update step indicator
    const stepNumber = parseInt(prevId.replace(/[^0-9]/g, ''));
    updateSteps(stepNumber);
}

// Handle form submission
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, you would process payment here
    // For demo, we'll just show confirmation
    
    // Hide form and show confirmation
    document.getElementById('paymentSection').classList.remove('active');
    document.getElementById('confirmationSection').style.display = 'block';
    
    // Update confirmation email
    document.getElementById('confEmail').textContent = document.getElementById('email').value;
    
    // Update step indicator
    updateSteps(4);
});

// Toggle payment methods
document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if(this.value === 'card') {
            document.getElementById('cardPayment').style.display = 'block';
        } else {
            document.getElementById('cardPayment').style.display = 'none';
        }
    });
});

// Calculate and update total price
function calculateTotal() {
    const adultPrice = 5000;
    const childPrice = 3500;
    const serviceFee = 500;
    
    const adults = parseInt(document.getElementById('adultTickets').value);
    const children = parseInt(document.getElementById('childTickets').value);
    
    const total = (adults * adultPrice) + (children * childPrice) + serviceFee;
    
    // Update summary (in a real app, you'd update all summary items)
    document.querySelector('.summary-total span:last-child').textContent = 
        total.toLocaleString('fr-FR') + ' FCFA';
}

// Listen for ticket quantity changes
document.getElementById('adultTickets').addEventListener('change', calculateTotal);
document.getElementById('childTickets').addEventListener('change', calculateTotal);