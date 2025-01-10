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

    // Service Cards Animation
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});
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
