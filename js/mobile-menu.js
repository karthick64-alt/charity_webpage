// Mobile menu toggle functionality
let mobileMenuInitialized = false;

function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileMenuToggle || !navMenu) {
        // If elements not found, try again after a short delay (for dynamically loaded headers)
        setTimeout(initMobileMenu, 200);
        return;
    }
    
    // Prevent multiple initializations
    if (mobileMenuInitialized) {
        return;
    }
    mobileMenuInitialized = true;
    
    // Toggle menu on button click
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Close menu when clicking on a menu link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Make it globally available
window.initMobileMenu = initMobileMenu;

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    // DOM already ready
    initMobileMenu();
}

