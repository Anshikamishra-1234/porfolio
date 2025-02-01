// Get all the navigation links
const navLinks = document.querySelectorAll('.navlist .main');

// Add event listener for each link to handle the click
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        const targetId = this.id.replace('-link', ''); // Get the corresponding section ID
        const targetSection = document.getElementById(targetId); // Get the section by ID

        // Smooth scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
