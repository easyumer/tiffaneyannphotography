// Enhanced Meet Tiffaney Section animations
function initMeetTiffaneyAnimations() {
    // Split text for animation
    const titleElement = document.querySelector('.meet-tiffaney__title');
    const subtitleElement = document.querySelector('.meet-tiffaney__subtitle');
    
    if (titleElement) {
        // Create animated title reveal
        const titleSplitText = new SplitText(titleElement, {type: "words,chars"});
        const titleChars = titleSplitText.chars;
        
        gsap.from(titleChars, {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.02,
            ease: "power3.out",
            delay: 0.3
        });
    }
    
    if (subtitleElement) {
        gsap.from(subtitleElement, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.8
        });
    }
    
    // Animate bio paragraphs
    gsap.from('.meet-tiffaney__bio p', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1
    });
    
    // Badges animation
    gsap.from('.badge', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.5
    });
    
    // Signature animation
   // Signature animation
gsap.from('.signature', {
    opacity: 0,
    y: 30,
    rotateZ: '-10deg',
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    delay: 1.8
});

// Add a subtle animation for the signature
gsap.to('.signature', {
    backgroundPosition: '200px 0',
    duration: 3,
    repeat: -1,
    ease: "sine.inOut"
});
    
    // Image frame animation
    gsap.from('.image-frame', {
        opacity: 0,
        rotate: -8,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
    });
    
    // Corner elements subtle light effect
    const corners = document.querySelectorAll('.image-frame__corner');
    corners.forEach(corner => {
        gsap.to(corner, {
            borderColor: 'rgba(255,255,255,0.5)',
            duration: Math.random() * 2 + 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
    
    // Subtle rainbow spectrum animation
    gsap.to('.subtle-spectrum', {
        opacity: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}
// Enhanced My Story Timeline animations
function initMyStoryAnimations() {
    // Parallax effect for timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true
            },
            y: i % 2 === 0 ? 50 : -50,
            opacity: 0.8,
            duration: 1
        });
    });
    
    // Timeline line drawing animation
    gsap.from('.timeline::before', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
        },
        height: 0,
        duration: 1
    });
    
    // Markers pop animation
    gsap.from('.timeline-marker', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'back.out(1.7)'
    });
    
    // Content animation
    gsap.utils.toArray('.timeline-content').forEach((content, i) => {
        const direction = i % 2 === 0 ? -30 : 30;
        
        gsap.from(content, {
            scrollTrigger: {
                trigger: content,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            x: direction,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Pull quote highlight
    gsap.from('.pull-quote', {
        scrollTrigger: {
            trigger: '.pull-quote',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Add grayscale to color hover effect handlers
    const imageContainers = document.querySelectorAll('.timeline-image-container');
    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            gsap.to(container, {
                filter: 'grayscale(0)',
                duration: 0.5
            });
            
            gsap.to(container.querySelector('.timeline-image'), {
                scale: 1.05,
                duration: 0.5
            });
        });
        
        container.addEventListener('mouseleave', () => {
            gsap.to(container, {
                filter: 'grayscale(1)',
                duration: 0.5
            });
            
            gsap.to(container.querySelector('.timeline-image'), {
                scale: 1,
                duration: 0.5
            });
        });
    });
}
// Enhanced Philosophy Section animations
function initPhilosophyAnimations() {
    // Parallax effect for the main image
    gsap.to('.philosophy__image', {
        scrollTrigger: {
            trigger: '.philosophy__image-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -50,
        ease: 'none'
    });
    
    // Subtle border animation
    gsap.to('.philosophy__image-container::before', {
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Value cards 3D tilt effect
    const cells = document.querySelectorAll('.honeycomb-cell');
    
    cells.forEach(cell => {
        cell.addEventListener('mousemove', e => {
            const rect = cell.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 20;
            const angleX = (centerY - y) / 20;
            
            gsap.to(cell.querySelector('.honeycomb-content'), {
                rotateX: angleX + 'deg',
                rotateY: angleY + 'deg',
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        cell.addEventListener('mouseleave', () => {
            gsap.to(cell.querySelector('.honeycomb-content'), {
                rotateX: '0deg',
                rotateY: '0deg',
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        // Expand card on click
        const expandBtn = cell.querySelector('.value-card__expand');
        if (expandBtn) {
            expandBtn.addEventListener('click', e => {
                e.stopPropagation();
                const details = cell.querySelector('.value-card__details');
                const isVisible = details.style.opacity === '1';
                
                gsap.to(details, {
                    opacity: isVisible ? 0 : 1,
                    duration: 0.3
                });
                
                gsap.to(expandBtn.querySelector('.expand-icon'), {
                    rotation: isVisible ? 0 : 45,
                    duration: 0.3
                });
            });
        }
    });
    
    // Staggered animation for honeycomb cells
    gsap.from('.honeycomb-cell', {
        scrollTrigger: {
            trigger: '.honeycomb-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Manifesto animation
    gsap.from('.philosophy__manifesto', {
        scrollTrigger: {
            trigger: '.philosophy__manifesto',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Subtle border glow animation for the manifesto
    gsap.to('.philosophy__manifesto::before', {
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Special effect for the "inclusive representation" card
    const inclusiveCard = document.querySelector('.honeycomb-cell:nth-child(4)');
    if (inclusiveCard) {
        gsap.to(inclusiveCard.querySelector('.value-card__icon::after'), {
            opacity: 0.4,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}
// Artistic Approach Section Animations
function initArtisticApproachAnimations() {
    // Parallax effect for the background panels
    gsap.to('.parallax-panel--back', {
        scrollTrigger: {
            trigger: '.artistic-approach',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -80,
        ease: 'none'
    });
    
    gsap.to('.parallax-panel--middle', {
        scrollTrigger: {
            trigger: '.artistic-approach',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -40,
        ease: 'none'
    });
    
    gsap.to('.parallax-panel--front', {
        scrollTrigger: {
            trigger: '.artistic-approach',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -20,
        ease: 'none'
    });
    
    // Create a timeline for the content animation
    const approachTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.artistic-approach',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    approachTl
        .from('.approach__title-wrapper', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.approach__statement', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.highlight::after', {
            width: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.approach__thumbnails', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');
    
    // Subtle animation for the statement's decorative elements
    gsap.to('.approach__statement::before', {
        width: '80px',
        opacity: 0.7,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out'
    });
    
    gsap.to('.approach__statement::after', {
        width: '80px',
        opacity: 0.5,
        duration: 1.5,
        delay: 0.8,
        ease: 'power2.out'
    });
    
    // Thumbnails interactive functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const imageUrl = thumb.getAttribute('data-image');
            
            // Update front panel image with crossfade
            const frontPanel = document.querySelector('.parallax-panel--front');
            const oldImage = frontPanel.querySelector('.parallax-image');
            
            const newImage = document.createElement('img');
            newImage.src = imageUrl;
            newImage.className = 'parallax-image new-image';
            newImage.style.opacity = 0;
            
            frontPanel.insertBefore(newImage, oldImage.nextSibling);
            
            gsap.to(oldImage, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
            
            gsap.to(newImage, {
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                onComplete: () => {
                    oldImage.src = imageUrl;
                    oldImage.style.opacity = 1;
                    frontPanel.removeChild(newImage);
                }
            });
            
            // Animate the selected thumbnail
            gsap.to(thumbnails, {
                opacity: 0.7,
                scale: 1,
                border: '2px solid var(--color-gold)',
                duration: 0.3
            });
            
            gsap.to(thumb, {
                opacity: 1,
                scale: 1.1,
                border: '2px solid var(--color-white)',
                duration: 0.3
            });
        });
    });
}
// Safe Space Commitment Section animations
function initSafeSpaceAnimations() {
    // Center circle animation
    gsap.from('.center-circle', {
        scrollTrigger: {
            trigger: '.commitment-wheel',
            start: 'top 60%',
            toggleActions: 'play none none none'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
    });
    
    // Subtle pulse for center circle
    gsap.to('.center-circle', {
        boxShadow: '0 0 40px rgba(198, 169, 108, 0.2)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Staggered reveal of commitment items
    const commitmentItems = document.querySelectorAll('.commitment-item');
    
    // Different animation based on position
    commitmentItems.forEach(item => {
        const position = item.getAttribute('data-position');
        let x = 0;
        let y = 0;
        
        switch(position) {
            case 'top':
                y = -50;
                break;
            case 'right':
                x = 50;
                break;
            case 'bottom':
                y = 50;
                break;
            case 'left':
                x = -50;
                break;
        }
        
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.commitment-wheel',
                start: 'top 60%',
                toggleActions: 'play none none none'
            },
            x: x,
            y: y,
            opacity: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power3.out'
        });
    });
    
    // Animated numbers
    gsap.from('.commitment-item__number', {
        scrollTrigger: {
            trigger: '.commitment-wheel',
            start: 'top 60%',
            toggleActions: 'play none none none'
        },
        textShadow: '0px 0px 10px rgba(198, 169, 108, 0.8)',
        opacity: 0.3,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // Interactive elements for commitment items
    commitmentItems.forEach(item => {
        const number = item.querySelector('.commitment-item__number');
        
        item.addEventListener('mouseenter', () => {
            gsap.to(number, {
                scale: 1.1,
                opacity: 1,
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(number, {
                scale: 1,
                opacity: 0.7,
                duration: 0.3
            });
        });
    });
    
    // Testimonial section animation
    const testimonialTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.safe-space__testimonial',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    testimonialTl
        .from('.safe-space__testimonial', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.testimonial-icon', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.testimonial-quote', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.testimonial-author', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.testimonial-image-container', {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');
    
    // Subtle animation for the rainbow border on the testimonial
    gsap.to('.safe-space__testimonial::before', {
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}
// Testimonials Section Animations
function initTestimonialsAnimations() {
    // Staggered animation for testimonial cards
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials-masonry',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Interactive slider functionality
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const prevButton = document.querySelector('.slider-arrow--prev');
    const nextButton = document.querySelector('.slider-arrow--next');
    
    let currentIndex = 0;
    const itemCount = sliderItems.length;
    
    function updateSlider() {
        // Update slider position
        const translateValue = -currentIndex * 100 + '%';
        sliderTrack.style.transform = `translateX(${translateValue})`;
        
        // Update dots
        sliderDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Initialize slider controls
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            updateSlider();
        });
        
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % itemCount;
            updateSlider();
        });
    }
    
    // Dot navigation
    if (sliderDots) {
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
    }
    
    // Auto advance
    const autoAdvance = setInterval(() => {
        if (sliderItems.length > 0) {
            currentIndex = (currentIndex + 1) % itemCount;
            updateSlider();
        }
    }, 5000);
    
    // Clean up interval when leaving page
    const testimonialsSection = document.querySelector('.testimonials-section');
    if (testimonialsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting && autoAdvance) {
                    clearInterval(autoAdvance);
                }
            });
        }, { threshold: 0 });
        
        observer.observe(testimonialsSection);
    }
    
    // Add hover animations for testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.testimonial-card__bubble'), {
                y: -5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(198, 169, 108, 0.3)',
                duration: 0.3
            });
            
            const quoteIcon = card.querySelector('.testimonial-card__quote p::before');
            if (quoteIcon) {
                gsap.to(quoteIcon, {
                    opacity: 0.6,
                    duration: 0.3
                });
            }
            
            const image = card.querySelector('.testimonial-card__image');
            if (image) {
                gsap.to(image, {
                    scale: 1.05,
                    duration: 0.5
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.testimonial-card__bubble'), {
                y: 0,
                boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
                borderColor: 'rgba(198, 169, 108, 0.1)',
                duration: 0.3
            });
            
            const quoteIcon = card.querySelector('.testimonial-card__quote p::before');
            if (quoteIcon) {
                gsap.to(quoteIcon, {
                    opacity: 0.3,
                    duration: 0.3
                });
            }
            
            const image = card.querySelector('.testimonial-card__image');
            if (image) {
                gsap.to(image, {
                    scale: 1,
                    duration: 0.5
                });
            }
        });
    });
}
// Contact CTA Section Animations
function initContactCTAAnimations() {
    // Background map reveal
    gsap.from('.contact-cta__background', {
        scrollTrigger: {
            trigger: '.contact-cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
    });
    
    // Content fade in
    gsap.from('.contact-cta__content', {
        scrollTrigger: {
            trigger: '.contact-cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Form fade in
    gsap.from('.contact-cta__form-container', {
        scrollTrigger: {
            trigger: '.contact-cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Initialize floating labels
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        // Make sure there's no text in the placeholder
        input.placeholder = '';
        
        // Check initial state
        if (input.value) {
            const label = input.nextElementSibling;
            if (label && label.classList.contains('floating-label')) {
                label.classList.add('active');
            }
        }
    });
    
    // Form validation and progress tracking
    const contactForm = document.querySelector('.contact-form');
    const progressBar = document.querySelector('.progress-bar');
    
    if (contactForm) {
        // Track form completion progress
        function updateProgress() {
            const inputs = contactForm.querySelectorAll('input, textarea, select');
            let filledCount = 0;
            
            inputs.forEach(input => {
                if (input.value.trim() !== '') {
                    filledCount++;
                }
            });
            
            const progress = (filledCount / inputs.length) * 100;
            if (progressBar) {
                gsap.to(progressBar, {
                    width: `${progress}%`,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        }
        
        // Add input event listeners for all form elements
        const formElements = contactForm.querySelectorAll('input, textarea, select');
        formElements.forEach(element => {
            element.addEventListener('input', updateProgress);
            element.addEventListener('change', updateProgress);
        });
        
        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add form submission logic here
            // For now, just simulate success with animation
            
            // Create success message
            const formGroups = document.querySelectorAll('.form-group');
            const submitButton = document.querySelector('.form-submit');
            
            gsap.to(formGroups, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out'
            });
            
            gsap.to(submitButton, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                delay: 0.3,
                ease: 'power3.out',
                onComplete: () => {
                    // Replace form with success message
                    const formContainer = document.querySelector('.contact-cta__form-container');
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                        <h3 class="success-title">Message Sent!</h3>
                        <p class="success-text">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    `;
                    
                    // Clear form and append success
                    contactForm.innerHTML = '';
                    formContainer.appendChild(successMessage);
                    
                    // Animate success message
                    gsap.from('.success-message', {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        ease: 'power3.out'
                    });
                    
                    // Update progress bar to 100%
                    gsap.to(progressBar, {
                        width: '100%',
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }
    
    // Animate social links
    gsap.from('.social-link', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // Add hover effects for social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -3,
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-black)',
                duration: 0.3
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                backgroundColor: 'transparent',
                color: 'var(--color-gold)',
                duration: 0.3
            });
        });
    });
}