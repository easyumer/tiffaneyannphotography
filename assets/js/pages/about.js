// About Page JavaScript with Elastic Scroll for Parallax Section
document.addEventListener('DOMContentLoaded', function() {
  // Video handling
  const heroVideo = document.querySelector('.hero-video');
  
  if (heroVideo) {
    // Try to play the video
    heroVideo.play().catch(function(error) {
      console.log('Auto-play prevented:', error);
      
      // Create play button as fallback
      if (!document.querySelector('.video-play-button')) {
        const playButton = document.createElement('button');
        playButton.className = 'video-play-button';
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        playButton.setAttribute('aria-label', 'Play video');
        
        document.querySelector('.video-container').appendChild(playButton);
        
        playButton.addEventListener('click', function() {
          heroVideo.play();
          playButton.style.display = 'none';
        });
      }
    });
    
    // Simple mobile check and handling
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      heroVideo.setAttribute('playsinline', '');
      heroVideo.muted = true;
      
      // Some mobile browsers need user interaction
      document.addEventListener('touchstart', function() {
        heroVideo.play().catch(function(e) {
          console.log('Mobile play attempt failed:', e);
        });
      }, {once: true});
    }
  }
  
  // Simple animation with basic JS for better compatibility
  function fadeIn(element, delay) {
    setTimeout(function() {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }, delay);
  }
  
  // Apply simple animations to hero elements
  const heroElements = document.querySelectorAll('.intro-text, .subtitle-text, .statement-text, .and-statement, .description');
  
  heroElements.forEach(function(element, index) {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    fadeIn(element, 200 * index);
  });
  
  // Simple way to handle gallery animations on scroll
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  function handleScrollAnimations() {
    const galleryElements = document.querySelectorAll('.left-image, .center-text, .right-image');
    
    galleryElements.forEach(function(element) {
      if (isElementInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for gallery elements
  const galleryElements = document.querySelectorAll('.left-image, .center-text, .right-image');
  galleryElements.forEach(function(element) {
    element.style.opacity = 0;
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 1s ease, transform 1s ease';
  });
  
  // Back to top button functionality
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Handle navigation menu toggle
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Adventure section animations
  function animateAdventureElements() {
    const elements = document.querySelectorAll('.adventure-header, .adventure-card, .adventure-text, .adventure-footer');
    
    elements.forEach(function(element) {
      // Add initial styles for animation
      if (!element.classList.contains('animated') && !element.classList.contains('animate-setup')) {
        element.style.opacity = '0';
        element.style.transform = element.classList.contains('adventure-card') 
          ? 'translateY(40px)' 
          : 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        element.classList.add('animate-setup');
      }
      
      // Check if element is in viewport
      if (isElementInViewport(element) && !element.classList.contains('animated')) {
        // Delay based on position in DOM for staggered effect
        const index = Array.from(elements).indexOf(element);
        const delay = 100 * index;
        
        setTimeout(function() {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.classList.add('animated');
        }, delay);
      }
    });
  }
  
  // Parallax section with elastic scroll
  const parallaxSection = document.getElementById('parallax-section');
  const parallaxBackground = document.querySelector('.parallax-background');
  const parallaxContent = document.querySelector('.parallax-content');
  
  // Variables for elastic scroll
  let currentScroll = 0;
  let targetScroll = 0;
  let ease = 0.075; // Lower value = smoother/slower transition
  
  function initParallax() {
    if (!parallaxSection || !parallaxBackground || !parallaxContent) return;
    
    // Set initial position
    updateParallaxScroll();
    
    // Animate scroll with elastic effect
    function animateParallaxScroll() {
      // Calculate difference between current and target scroll
      const diff = targetScroll - currentScroll;
      
      // Apply easing to create elastic effect
      currentScroll += diff * ease;
      
      // Apply transformations for parallax effect
      parallaxBackground.style.transform = `translateY(-${currentScroll * 0.5}px)`;
      parallaxContent.style.transform = `translateY(${currentScroll * 0.1}px)`;
      
      // Continue animation loop
      requestAnimationFrame(animateParallaxScroll);
    }
    
    // Start animation loop
    requestAnimationFrame(animateParallaxScroll);
    
    // Handle parallax scroll events
    function handleParallaxScroll() {
      const scrollTop = window.pageYOffset;
      const sectionTop = parallaxSection.offsetTop;
      const sectionHeight = parallaxSection.offsetHeight;
      
      // Check if section is in view
      if (scrollTop >= sectionTop - window.innerHeight && 
          scrollTop <= sectionTop + sectionHeight) {
        
        // Calculate relative position within section (0 to 1)
        const relativePos = (scrollTop - (sectionTop - window.innerHeight)) / 
                           (sectionHeight + window.innerHeight);
        
        // Update target scroll based on position
        targetScroll = relativePos * 100;
      }
    }
    
    // Update parallax scroll position
    function updateParallaxScroll() {
      const scrollTop = window.pageYOffset;
      const sectionTop = parallaxSection.offsetTop;
      const sectionHeight = parallaxSection.offsetHeight;
      
      if (scrollTop >= sectionTop - window.innerHeight && 
          scrollTop <= sectionTop + sectionHeight) {
        
        const relativePos = (scrollTop - (sectionTop - window.innerHeight)) / 
                           (sectionHeight + window.innerHeight);
        
        targetScroll = relativePos * 100;
        currentScroll = targetScroll;
      }
    }
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleParallaxScroll);
    
    // Handle resize events
    window.addEventListener('resize', updateParallaxScroll);
  }
  
  // Initialize parallax effect
  initParallax();
  
  // Animate philosophy items when they enter viewport
  function animatePhilosophyItems() {
    const items = document.querySelectorAll('.philosophy-item, .parallax-title, .parallax-quote');
    
    items.forEach(function(item, index) {
      if (!item.classList.contains('animated') && !item.classList.contains('animate-setup')) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        item.classList.add('animate-setup');
      }
      
      if (isElementInViewport(item) && !item.classList.contains('animated')) {
        setTimeout(function() {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
          item.classList.add('animated');
        }, 150 * index);
      }
    });
  }
  
  // Add scroll event listener for all animations
  window.addEventListener('scroll', function() {
    handleScrollAnimations();
    animateAdventureElements();
    animatePhilosophyItems();
  });
  
  // Initial check in case elements are already in viewport
  handleScrollAnimations();
  animateAdventureElements();
  animatePhilosophyItems();
});