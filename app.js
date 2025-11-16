// FinTastic Vacations Application
console.log('Welcome to FinTastic Vacations!');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application loaded successfully');
    
    // Add click handlers to destination cards
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const destination = card.querySelector('h3').textContent;
            alert(`You selected: ${destination}`);
        });
    });
});
