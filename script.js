// Add JavaScript for interactive elements here 
// Example: Adding a smooth scroll effect
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default jump behavior

        // Get the target section's ID
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smoothly scroll to the target section (add easing options if desired)
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
