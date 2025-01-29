// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to hero for image scale animation
    const heroSection = document.querySelector('.boudoir-hero');
    setTimeout(() => {
        heroSection.classList.add('loaded');
    }, 100);

    // Hero Animations Timeline
    const heroTl = gsap.timeline({ delay: 0.5 });

    // Animate title lines
    heroTl.to('.title-line', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Animate subtitle
    heroTl.to('.hero__subtitle', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');

    // Animate CTA button
    heroTl.to('.hero__cta', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');

    // Animate scroll indicator
    heroTl.to('.scroll-indicator', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5');
});
// Why Boudoir Section Animations - Simpler and more reliable
gsap.from('.why-boudoir__content', {
    scrollTrigger: {
        trigger: '.why-boudoir',
        start: 'top 80%',
        end: 'bottom 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
});

// Simple fade in for cards with minimal vertical movement
gsap.from('.reason-card', {
    scrollTrigger: {
        trigger: '.reason-grid',
        start: 'top 90%',
        end: 'bottom 80%',
        toggleActions: 'play none none reverse'
    },
    y: 20, // Reduced vertical movement
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});
// Experience Section Animations
gsap.from('.timeline-step', {
    scrollTrigger: {
        trigger: '.experience__timeline',
        start: 'top 95%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 10,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
});
// Portfolio Section Animations
gsap.from('.portfolio-item', {
    scrollTrigger: {
        trigger: '.portfolio__grid',
        start: 'top 95%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 10,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
});
// Investment Section Animation
gsap.from('.package', {
    scrollTrigger: {
        trigger: '.packages',
        start: 'top 95%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 10,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
});
// FAQ Section Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't already open
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// FAQ Animation
gsap.from('.faq-item', {
    scrollTrigger: {
        trigger: '.faq__grid',
        start: 'top 95%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 10,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
});
// Contact Form Animation
gsap.from('.contact__info', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 95%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    x: -20,
    duration: 0.6,
    ease: 'power2.out'
});

gsap.from('.contact__form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 95%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    x: 20,
    duration: 0.6,
    ease: 'power2.out'
});

// Form Validation and Submission
document.querySelector('.contact__form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});