// Typed.js Animation Configuration
var typed = new Typed(".typedtxt", {
    strings: ["Front-End Developer", "Web Developer", "Problem Solver"],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});

// Mobile Hamburger Navigation Toggler
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a navigation link is clicked
    const links = document.querySelectorAll('.links ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Scrollspy Link Highlighting
const sections = document.querySelectorAll('section');
const navLinksList = document.querySelectorAll('.links ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Offset by 120px to highlight ahead of time
        if (scrollPosition >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
