
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ffcc00'; // Change color to yellow
            button.style.transform = 'scale(1.05)'; // Scale up slightly
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#333'; // Change back to original color
            button.style.transform = 'scale(1)'; // Reset scale
        });
    });

    // Animation for slideshow buttons
    const slideshowButtons = document.querySelectorAll('.featured-artworks button');
    slideshowButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ffcc00'; // Change color to yellow
            button.style.transform = 'translateY(-5px)'; // Move up slightly
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#333'; // Change back to original color
            button.style.transform = 'translateY(0)'; // Reset position
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the slideshow container and images
    const slideshowContainer = document.querySelector('.featured-artworks .slideshow');
    const slides = slideshowContainer.querySelectorAll('img');

    // Initialize index to track current slide
    let currentIndex = 0;

    // Function to show slide by index
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');
        // Show the slide at the given index
        slides[index].style.display = 'block';
    }

    // Function to show next slide
    function nextSlide() {
        // Increment index
        currentIndex = (currentIndex + 1) % slides.length;
        // Show next slide
        showSlide(currentIndex);
    }

    // Function to show previous slide
    function prevSlide() {
        // Decrement index
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        // Show previous slide
        showSlide(currentIndex);
    }

    // Automatically switch to the next slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Event listener for previous button
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Event listener for next button
    document.getElementById('nextBtn').addEventListener('click', nextSlide);

    // Initial display of first slide
    showSlide(currentIndex);
});
