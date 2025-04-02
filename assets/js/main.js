// Initialize navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Add scroll class to header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Initialize footer functionality
function initFooter() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        // Show back to top button after scrolling
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize GSAP if needed
if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize universal components
    initNavigation();
    initFooter();
    
    // Page-specific initializations
    const currentPage = document.body.dataset.page;
    
    if (currentPage === 'about') {
        // Initialize the About page
        initAboutPage();
    }
    
    // Add loaded class to wedding hero if present
    const weddingHeroSection = document.querySelector('.wedding-hero');
    if (weddingHeroSection) {
        weddingHeroSection.classList.add('loaded');
    }
    
    // Smooth scroll handling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});