// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to hero for image scale animation
    const heroSection = document.querySelector('.wedding-hero');
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

    // Wedding Experience Section Animations
    const experienceTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.wedding-experience',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    experienceTl
        .from('.section-subtitle', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        })
        .from('.section-title', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.experience__text', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6');

    // Animate features with stagger
    gsap.from('.feature', {
        scrollTrigger: {
            trigger: '.experience__features',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Animate gallery images
    gsap.from('.gallery__image-wrap', {
        scrollTrigger: {
            trigger: '.experience__gallery',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out'
    });

    // Parallax effect for gallery images
    const galleryImages = document.querySelectorAll('.gallery__image-wrap');
    galleryImages.forEach(image => {
        gsap.to(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
            },
            y: 50,
            ease: 'none'
        });
    });

    // Performance Optimizations
    ScrollTrigger.config({ limitCallbacks: true });
    gsap.config({ nullTargetWarn: false });

    // Cleanup function for smooth page transitions
    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
});

// Smooth scroll handling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power2.inOut'
            });
        }
    });
});

// Wedding Collections Section Animations
    const collectionsHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '.collections__header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    collectionsHeader
        .from('.collections__header .section-subtitle', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        })
        .from('.collections__header .section-title', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.collections__header .section-description', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6');

    // Animate collection cards with stagger
    gsap.from('.collection', {
        scrollTrigger: {
            trigger: '.collections__grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: {
            amount: 0.6,
            from: "center"
        },
        ease: 'power3.out'
    });

    // Special animation for featured collection
    gsap.from('.collection.featured', {
        scrollTrigger: {
            trigger: '.collections__grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.95,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Animate features with stagger
    gsap.from('.collection__feature', {
        scrollTrigger: {
            trigger: '.collections__grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: {
            each: 0.1,
            from: "top"
        },
        ease: 'power2.out'
    });

// Optimize animations for reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.defaults({
        duration: 0.1,
        ease: 'none'
    });
}