// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation Timeline
    const heroTl = gsap.timeline({ delay: 0.3 });

    heroTl
        .from('.hero__image', {
            scale: 1.1,
            duration: 2.5,
            ease: 'power2.out'
        })
        .from('.title-line', {
            opacity: 0,
            y: 30,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=2')
        .from('.hero__subtitle', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.hero__cta', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.scroll-indicator', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5');

    // Experience Section Animation
    const experienceTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.wedding-experience',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none none'
        }
    });

    experienceTl
        .from('.section-subtitle', {
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.section-title', {
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.section-description', {
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.experience__features', {
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.feature', {
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.experience__cta', {
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 100
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // Simple hover effect for features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            gsap.to(feature.querySelector('.feature__icon'), {
                scale: 1.1,
                color: '#D4BC89', // Lighter gold
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        feature.addEventListener('mouseleave', () => {
            gsap.to(feature.querySelector('.feature__icon'), {
                scale: 1,
                color: '#C6A96C', // Original gold
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});
// Portfolio Section Animations
gsap.from('.portfolio-item', {
    scrollTrigger: {
        trigger: '.portfolio__grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});