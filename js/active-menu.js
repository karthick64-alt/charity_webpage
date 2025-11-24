// Highlight active menu item based on current page
function highlightActiveMenu() {
    try {
        // Get current page filename
        const path = window.location.pathname;
        let currentPage = path.split('/').pop() || 'index.html';
        
        // Handle root or empty path
        if (currentPage === '' || currentPage === '/' || path.endsWith('/')) {
            currentPage = 'index.html';
        }
        
        // Find all navigation links
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        if (navLinks.length === 0) {
            // If links not found, try again after a short delay
            setTimeout(highlightActiveMenu, 200);
            return;
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const linkHref = link.getAttribute('href');
            if (!linkHref) return;
            
            const linkPage = linkHref.split('/').pop() || linkHref;
            
            // Check if current page matches the link (exact match)
            if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    } catch (e) {
        console.error('Error highlighting active menu:', e);
    }
}

// Make it globally available
window.highlightActiveMenu = highlightActiveMenu;

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightActiveMenu);
} else {
    // DOM already ready
    highlightActiveMenu();
}




