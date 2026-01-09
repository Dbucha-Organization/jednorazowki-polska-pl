// ================================
// Warning Banner Close Functionality
// ================================

document.addEventListener('DOMContentLoaded', function () {
    const warningBanner = document.getElementById('warningBanner');
    const warningClose = document.getElementById('warningClose');

    if (warningClose && warningBanner) {
        warningClose.addEventListener('click', function () {
            warningBanner.classList.add('hidden');
        });
    }
});


// ================================
// Mobile Hamburger Menu Toggle
// ================================

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle window resize - close menu if resizing to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});


// ================================
// Smooth Scroll for Navigation Links
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for non-empty hash links
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


// ================================
// Carousel Dots Animation (Optional)
// ================================

const dots = document.querySelectorAll('.dot');
let currentDot = 0;

function rotateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentDot].classList.add('active');
    currentDot = (currentDot + 1) % dots.length;
}

// Auto-rotate carousel dots every 3 seconds
if (dots.length > 0) {
    setInterval(rotateDots, 3000);
}


// ================================
// Add Scroll Effect to Header
// ================================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 5, 20, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 5, 20, 0.8)';
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});


// ================================
// Solutions Featured Carousel
// ================================

const solutionsCarousel = document.getElementById('solutionsCarousel');
const prevBtn = document.getElementById('solutionsPrevBtn');
const nextBtn = document.getElementById('solutionsNextBtn');

if (solutionsCarousel && prevBtn && nextBtn) {
    const cards = solutionsCarousel.querySelectorAll('.solution-card');
    let currentIndex = 0;

    // Set initial active card
    function setActiveCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }

    // Update button states
    function updateButtonStates() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === cards.length - 1;
    }

    // Navigate carousel
    function navigate(direction) {
        if (direction === 'next' && currentIndex < cards.length - 1) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        
        setActiveCard(currentIndex);
        updateButtonStates();
    }

    // Event listeners
    prevBtn.addEventListener('click', () => navigate('prev'));
    nextBtn.addEventListener('click', () => navigate('next'));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        else if (e.key === 'ArrowRight') nextBtn.click();
    });

    // Touch/Swipe support with improved mobile handling
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartTime = 0;
    const MIN_SWIPE_DISTANCE = 50; // pixels
    const MAX_SWIPE_TIME = 500; // milliseconds - quick flick detection

    solutionsCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartTime = Date.now();
        // Prevent default scroll blocking on passive listener
    }, { passive: true });

    solutionsCarousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const touchEndTime = Date.now();
        const touchDuration = touchEndTime - touchStartTime;
        const diff = touchStartX - touchEndX;
        
        // Only trigger swipe if distance and time meet thresholds
        if (Math.abs(diff) > MIN_SWIPE_DISTANCE && touchDuration < MAX_SWIPE_TIME) {
            if (diff > 0 && nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            } else if (diff < 0 && prevBtn && !prevBtn.disabled) {
                prevBtn.click();
            }
        }
    }, { passive: true });

    // Initialize
    setActiveCard(0);
    updateButtonStates();
}


// ================================
// Testimonials Image Enhancements
// ================================

// Prevent layout shift by setting explicit image dimensions
document.addEventListener('DOMContentLoaded', function () {
    const reviewImages = document.querySelectorAll('.review-image, .avatar-image');
    
    // Track loaded images to prevent layout thrashing
    reviewImages.forEach((img) => {
        // Add loading state
        img.loading = 'lazy';
        img.setAttribute('decoding', 'async');
        
        // Optional: Add error handling for broken images
        img.addEventListener('error', function () {
            this.parentElement.style.display = 'none';
        });

        // Trigger lazy loading if browser doesn't support native lazy loading
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            observer.observe(img);
        }
    });

    // Optional: Add click-to-expand functionality for review images
    const testimonialImages = document.querySelectorAll('.testimonial-image');
    testimonialImages.forEach((container) => {
        const img = container.querySelector('.review-image');
        if (img) {
            // Add visual indicator that image is expandable
            container.style.cursor = 'pointer';
            
            img.addEventListener('click', function () {
                // Create modal for expanded view
                const modal = document.createElement('div');
                modal.className = 'image-modal';
                modal.innerHTML = `
                    <div class="image-modal-content">
                        <button class="image-modal-close" aria-label="Close"><span class="close-icon">&times;</span></button>
                        <img src="${img.src}" alt="${img.alt}" class="image-modal-image">
                    </div>
                `;
                
                document.body.appendChild(modal);
                
                // Close on button click
                modal.querySelector('.image-modal-close').addEventListener('click', () => {
                    modal.remove();
                });
                
                // Close on background click
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });
                
                // Close on Escape key
                const closeOnEscape = (e) => {
                    if (e.key === 'Escape') {
                        modal.remove();
                        document.removeEventListener('keydown', closeOnEscape);
                    }
                };
                document.addEventListener('keydown', closeOnEscape);
            });
        }
    });
});

const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");

city.addEventListener("toggle", toggleCont);

city.addEventListener("click", () => {
    city.dispatchEvent(new Event("toggle"));
});

function toggleCont() {
    city.classList.toggle("active");
    cont.forEach((el) => {
        el.style.display = el.style.display === "block" ? "none" : "block";
    });
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}
