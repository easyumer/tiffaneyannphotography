// Header scroll effect
const header = document.querySelector('.header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// GSAP Animations
gsap.from('.header__logo', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.nav__link', {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out'
});

// Hero Slider
const slides = document.querySelectorAll('.hero__slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// GSAP Hero Animations
gsap.timeline()
    .from('.hero__title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    })
    .from('.hero__subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.hero__cta', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.scroll-indicator', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5');


// About Section Animations
ScrollTrigger.batch(".about__content", {
    onEnter: (elements) => {
        gsap.from(elements, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    },
    start: "top 80%"
});

gsap.from(".about__image-wrapper", {
    scrollTrigger: {
        trigger: ".about__image-wrapper",
        start: "top 80%"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});
// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.testimonials__dot');
const prevBtn = document.querySelector('.testimonials__arrow--prev');
const nextBtn = document.querySelector('.testimonials__arrow--next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Event Listeners
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto advance every 5 seconds
setInterval(nextTestimonial, 5000);

// GSAP Animation
gsap.from('.testimonials__header', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});
// Contact Section Animations
gsap.from('.contact__info', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%'
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});
// Pricing Section Animations
gsap.from('.package__name', {
    scrollTrigger: {
        trigger: '.pricing__grid',
        start: 'top 60%',
        end: 'bottom top',
        scrub: true
    },
    opacity: 0,
    color: '#C6A96C', // Gold color
    boxShadow: '0 0 15px rgba(198, 169, 108, 0.8)', // Golden glow
    duration: 1.2,
    ease: 'power3.out',
    stagger: 0.3
});



gsap.from('.contact__form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%'
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Form validation and submission handling
const contactForm = document.querySelector('.contact__form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You might want to use fetch API to submit to your backend
    console.log('Form submitted');
});
// Experience Section Animations
gsap.from('.experience__header', {
    scrollTrigger: {
        trigger: '.experience',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.journey__step', {
    scrollTrigger: {
        trigger: '.journey',
        start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

// Journey step hover effect
const journeySteps = document.querySelectorAll('.journey__step');
journeySteps.forEach(step => {
    step.addEventListener('mouseenter', () => {
        gsap.to(step.querySelector('.journey__number'), {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    step.addEventListener('mouseleave', () => {
        gsap.to(step.querySelector('.journey__number'), {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Behind the Lens Animations
gsap.from('.lens__gallery', {
    scrollTrigger: {
        trigger: '.behind-lens',
        start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.lens__content', {
    scrollTrigger: {
        trigger: '.behind-lens',
        start: 'top 80%'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});


// Stats Counter Animation
const stats = document.querySelectorAll('.lens__number');
stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    let count = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps

    function updateCount() {
        if(count < target) {
            count += increment;
            stat.textContent = Math.min(Math.round(count), target) + '+';
            requestAnimationFrame(updateCount);
        }
    }

    ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: () => updateCount()
    });
});

// Publications Animations
gsap.from('.publications__header', {
    scrollTrigger: {
        trigger: '.publications',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.featured__item', {
    scrollTrigger: {
        trigger: '.featured__grid',
        start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

// Infinite Marquee Animation
const marqueeContent = document.querySelector('.marquee__content');
const marqueeItems = document.querySelectorAll('.marquee__item');

// Clone items for smooth infinite scroll
marqueeItems.forEach(item => {
    const clone = item.cloneNode(true);
    marqueeContent.appendChild(clone);
});
// Boudoir Section Animations
gsap.from('.boudoir__content', {
    scrollTrigger: {
        trigger: '.service-boudoir',
        start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.gallery__item', {
    scrollTrigger: {
        trigger: '.boudoir__gallery',
        start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.cta__box', {
    scrollTrigger: {
        trigger: '.boudoir__cta',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});
// Wedding Section Animations
gsap.from('.wedding__content', {
    scrollTrigger: {
        trigger: '.service-wedding',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.showcase__item', {
    scrollTrigger: {
        trigger: '.wedding__showcase',
        start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.feature', {
    scrollTrigger: {
        trigger: '.wedding__features',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});
// Portrait Section Animations
gsap.from('.portrait__header', {
    scrollTrigger: {
        trigger: '.service-portrait',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.category', {
    scrollTrigger: {
        trigger: '.portrait__categories',
        start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});
// Page Loader
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const loaderLogo = document.querySelector('.loader__logo');
    const loaderBar = document.querySelector('.loader__bar');
    const mainContent = document.querySelector('main');
    
    // Hide main content initially
    if (mainContent) {
        mainContent.classList.add('content-hidden');
    }

    // Animate logo
    gsap.to(loaderLogo, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });

    // Create loading sequence
    let progress = 0;
    const fakeProgress = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) {
            progress = 100;
            clearInterval(fakeProgress);
            
            // Animate loader out
            gsap.timeline()
                .to(loaderBar, {
                    width: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
                .to(loaderLogo, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.in'
                })
                .to(loader, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.in',
                    onComplete: () => {
                        loader.style.display = 'none';
                        if (mainContent) {
                            mainContent.classList.remove('content-hidden');
                            mainContent.classList.add('content-visible');
                        }
                    }
                });
        }
        loaderBar.style.width = `${progress}%`;
    }, 100);

    // Preload images
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            // All images loaded
            clearInterval(fakeProgress);
            progress = 100;
            loaderBar.style.width = '100%';
        }
    }

    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
        }
    });
});
gsap.from('.step', {
    scrollTrigger: {
        trigger: '.portrait__process',
        start: 'top 80%'
    },
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});
// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
let isMouseMoving = false;
let timeout;

document.addEventListener('mousemove', (e) => {
    isMouseMoving = true;
    
    // Move the cursors
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    cursorDot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    
    // Make cursor visible on movement
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';

    // Hide cursor after 3 seconds of no movement
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        if (!isMouseMoving) {
            cursor.style.opacity = '0';
            cursorDot.style.opacity = '0';
        }
        isMouseMoving = false;
    }, 3000);
});

// Hover effect for clickable elements
const clickables = document.querySelectorAll('a, button, .clickable');
clickables.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
});

// Show cursor when entering window
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
});

// Back to Top functionality
const backToTop = document.querySelector('.back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1000) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Smooth scroll to top
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create smooth scrolling animation
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: 0,
            autoKill: false
        },
        ease: 'power2.inOut'
    });
});

// Add to cursor hover elements
backToTop.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
});

backToTop.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
});