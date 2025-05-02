document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.getElementById('returnHome');
    
    returnButton.addEventListener('click', function() {
        // You can modify this URL to point to your home page
        window.location.href = 'registration.html';
    });
}); 