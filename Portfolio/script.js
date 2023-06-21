// JavaScript example to toggle the visibility of the about section, scroll to it, and disable scrolling
var homeSection = document.getElementById('home');
var aboutSection = document.getElementById('about');

function showAboutSection() {
    aboutSection.classList.add('show');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    document.body.style.overflow = 'auto'; // Enable scrolling
    homeSection.style.opacity = 0; // Fade out the home section
}

// Event listener for mouse click
document.addEventListener('click', showAboutSection);

// Automatically show after 5 seconds
setTimeout(showAboutSection, 5000);
