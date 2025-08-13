// Premium JavaScript enhancements

document.addEventListener('DOMContentLoaded', function() {
    initPremiumFeatures();
    initParallaxEffects();
    initCounterAnimations();
    initAdvancedAnimations();
});

// Premium features initialization
function initPremiumFeatures() {
    // Add premium classes to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index % 3 === 0) {
            card.classList.add('premium-card');
        }
    });
    
    // Enhanced loading states
    const containers = document.querySelectorAll('[id$="-container"]');
    containers.forEach(container => {
        if (container.innerHTML.trim() === '') {
            container.innerHTML = '<div class="skeleton" style="height: 200px; border-radius: 16px; margin-bottom: 1rem;"></div>'.repeat(3);
        }
    });
}

// Parallax scrolling effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    if (parallaxElements.length === 0) return;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Throttled scroll event
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Counter animations for statistics
function initCounterAnimations() {
    const counters = document.querySelectorAll('.hero-stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 20);
    };
    
    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Advanced animations and interactions
function initAdvancedAnimations() {
    // Staggered animations for grid items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const gridItems = entry.target.querySelectorAll('.card, .icon-feature');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                        item.style.animationDelay = `${index * 0.1}s`;
                    }, index * 100);
                });
                staggerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => staggerObserver.observe(grid));
    
    // Enhanced hover effects
    const premiumCards = document.querySelectorAll('.premium-card');
    premiumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Magnetic effect for buttons
    const premiumButtons = document.querySelectorAll('.btn-premium, .cta-button');
    premiumButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Premium modal with enhanced animations
function openPremiumModal(title, content, image = null) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add premium styling
    modalContent.classList.add('glass-effect');
    modalContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    openModal(title, content, image);
}

// Add modal animation keyframes
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    .modal-content.glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
`;
document.head.appendChild(modalStyles);

// Premium loading with skeleton screens
function showPremiumLoading(element) {
    if (element) {
        const skeletonHTML = `
            <div class="skeleton" style="height: 20px; margin-bottom: 1rem; border-radius: 4px;"></div>
            <div class="skeleton" style="height: 150px; margin-bottom: 1rem; border-radius: 8px;"></div>
            <div class="skeleton" style="height: 20px; width: 60%; border-radius: 4px;"></div>
        `;
        element.innerHTML = skeletonHTML.repeat(3);
    }
}

// Smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in:not(.visible)');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Premium search functionality
function initPremiumSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.className = 'premium-search';
    searchInput.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 15px;
        border: none;
        border-radius: 25px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        z-index: 1000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    
    // Show search on Ctrl+K
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            document.body.appendChild(searchInput);
            searchInput.style.opacity = '1';
            searchInput.style.transform = 'translateY(0)';
            searchInput.focus();
        }
        
        if (e.key === 'Escape' && document.contains(searchInput)) {
            searchInput.style.opacity = '0';
            searchInput.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (document.contains(searchInput)) {
                    document.body.removeChild(searchInput);
                }
            }, 300);
        }
    });
}

// Initialize premium search
initPremiumSearch();