document.addEventListener('DOMContentLoaded', () => {
    // Smooth Table of Contents Scrolling
    const tocLinks = document.querySelectorAll('.toc__list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Table of Contents subtle hover effect
    const tocContainer = document.querySelector('.table-of-contents');
    
    if (tocContainer) {
        tocContainer.addEventListener('mouseenter', () => {
            tocContainer.style.transform = 'translateY(-5px)';
            tocContainer.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 1px rgba(198, 169, 108, 0.5)';
            tocContainer.style.transition = 'all 0.3s ease';
        });

        tocContainer.addEventListener('mouseleave', () => {
            tocContainer.style.transform = 'translateY(0)';
            tocContainer.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2), 0 0 1px rgba(198, 169, 108, 0.3)';
        });
    }
});