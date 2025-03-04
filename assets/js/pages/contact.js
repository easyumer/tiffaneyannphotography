// Contact Page Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation for hero section
    const heroTl = gsap.timeline({ delay: 0.5 });
    
    // Add loaded class to hero for image scale animation
    const heroSection = document.querySelector('.contact-hero');
    heroSection.classList.add('loaded');
    
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
    
    // Animate scroll indicator
    heroTl.to('.scroll-indicator', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5');
    
    // Connection methods animations
    gsap.from('.connection-card', {
        scrollTrigger: {
            trigger: '.connection-methods',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Form animations
    gsap.from('.form-container', {
        scrollTrigger: {
            trigger: '.form-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Multi-step form functionality
    const formStages = document.querySelectorAll('.form-stage');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const progressStatus = document.querySelector('.progress-status');
    const progressFill = document.querySelector('.progress-fill');
    
    let currentStage = 1;
    
    function updateStage() {
        // Hide all stages
        formStages.forEach(stage => {
            stage.classList.remove('active');
        });
        
        // Show current stage
        document.querySelector(`.form-stage[data-stage="${currentStage}"]`).classList.add('active');
        
        // Update progress bar
        progressFill.style.width = `${(currentStage / formStages.length) * 100}%`;
        
        // Update status text
        progressStatus.textContent = `Step ${currentStage} of ${formStages.length}`;
    }
    
    // Attach event listeners to next buttons
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStage < formStages.length) {
                currentStage++;
                updateStage();
            }
        });
    });
    
    // Attach event listeners to previous buttons
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStage > 1) {
                currentStage--;
                updateStage();
            }
        });
    });
    
    // Service selection changes the imagery
    const serviceRadios = document.querySelectorAll('.service-radio');
    const imagerySlides = document.querySelectorAll('.imagery-slide');
    const progressSteps = document.querySelectorAll('.progress-step');
    
    serviceRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const service = radio.value;
            
            // Hide all slides
            imagerySlides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Deactivate all progress steps
            progressSteps.forEach(step => {
                step.classList.remove('active');
            });
            
            // Show the corresponding slide and activate step
            if (service === 'boudoir') {
                imagerySlides[0].classList.add('active');
                progressSteps[0].classList.add('active');
            } else if (service === 'wedding') {
                imagerySlides[1].classList.add('active');
                progressSteps[1].classList.add('active');
            } else if (service === 'portrait') {
                imagerySlides[2].classList.add('active');
                progressSteps[2].classList.add('active');
            }
        });
    });
    
    // Progress tracker clicks change the imagery
    progressSteps.forEach((step, index) => {
        step.addEventListener('click', () => {
            // Hide all slides
            imagerySlides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Deactivate all progress steps
            progressSteps.forEach(step => {
                step.classList.remove('active');
            });
            
            // Show the corresponding slide and activate step
            imagerySlides[index].classList.add('active');
            step.classList.add('active');
            
            // Update the corresponding radio button
            const service = step.getAttribute('data-service');
            document.querySelector(`#service-${service}`).checked = true;
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    const formSuccess = document.querySelector('.form__success');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real implementation, you would send the form data to a server here
        
        // Show success message
        formSuccess.classList.add('active');
        
        // Reset form after submission (uncomment in production)
        // setTimeout(() => {
        //     contactForm.reset();
        //     currentStage = 1;
        //     updateStage();
        //     formSuccess.classList.remove('active');
        // }, 5000);
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
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
    
// Newsletter submission
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterSuccess = document.querySelector('.newsletter-success');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real implementation, you would send the form data to a server here
        
        // Show success message
        newsletterSuccess.classList.add('active');
        
        // Reset form after submission (uncomment in production)
        // setTimeout(() => {
        //     newsletterForm.reset();
        //     newsletterSuccess.classList.remove('active');
        // }, 5000);
    });
}

// Animation for location section
gsap.from('.location-map', {
    scrollTrigger: {
        trigger: '.location-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.location-info', {
    scrollTrigger: {
        trigger: '.location-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

// Animation for FAQ section
gsap.from('.faq-item', {
    scrollTrigger: {
        trigger: '.faq-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
});

// Animation for newsletter section
gsap.from('.newsletter-container', {
    scrollTrigger: {
        trigger: '.newsletter-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

// Animation for social section
gsap.from('.social-item', {
    scrollTrigger: {
        trigger: '.social-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power3.out'
});

// Custom cursor handling (matching main site)
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
const clickables = document.querySelectorAll('a, button, .clickable, .faq-question, .service-label, .progress-step');
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

// Auto-rotate imagery
let currentSlide = 0;
function rotateImagerySlides() {
    currentSlide = (currentSlide + 1) % imagerySlides.length;
    
    // Hide all slides
    imagerySlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Deactivate all progress steps
    progressSteps.forEach(step => {
        step.classList.remove('active');
    });
    
    // Show the next slide and activate step
    imagerySlides[currentSlide].classList.add('active');
    progressSteps[currentSlide].classList.add('active');
}

// Start auto-rotation if not interacting with form
let slideshowInterval;

function startSlideshow() {
    slideshowInterval = setInterval(rotateImagerySlides, 5000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Only start slideshow if user hasn't interacted with service selection yet
if (serviceRadios[0].checked === false && 
    serviceRadios[1].checked === false && 
    serviceRadios[2].checked === false && 
    serviceRadios[3].checked === false) {
    startSlideshow();
}

// Stop slideshow when user interacts with service selection
serviceRadios.forEach(radio => {
    radio.addEventListener('change', stopSlideshow);
});

progressSteps.forEach(step => {
    step.addEventListener('click', stopSlideshow);
});
});

// Social items animation
document.addEventListener('DOMContentLoaded', function() {
    const socialItems = document.querySelectorAll('.social-item');
    
    // Apply animations immediately without ScrollTrigger
    setTimeout(() => {
        socialItems.forEach(item => {
            item.classList.add('animate');
        });
    }, 500);
});