document.addEventListener('DOMContentLoaded', function() {
    // Create stars
    function createStars() {
        const body = document.body;
        const numberOfStars = 100;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random size
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random animation delay
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
            
            body.appendChild(star);
        }
    }

    createStars();
}); 