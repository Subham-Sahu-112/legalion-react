// ===== SMOOTH SCROLLING & NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Loading Animation
    // Enhanced Dribbble-style loading
    const loader = document.getElementById('loader');
    const progressFill = document.querySelector('.progress-fill');
    let loadProgress = 0;
    
    // Simulate realistic loading progress
    const updateProgress = () => {
        loadProgress += Math.random() * 15 + 5;
        if (loadProgress > 100) loadProgress = 100;
        
        if (progressFill) {
            progressFill.style.width = loadProgress + '%';
        }
        
        if (loadProgress < 100) {
            setTimeout(updateProgress, 100 + Math.random() * 200);
        }
    };
    
    // Start progress simulation
    setTimeout(updateProgress, 500);
    
    // Hide loader after page loads with smooth transition
    window.addEventListener('load', () => {
        // Ensure progress completes
        setTimeout(() => {
            if (progressFill) {
                progressFill.style.width = '100%';
            }
            
            // Add exit animation and hide
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.classList.add('loaded');
                
                // Add entrance animation to main content
                // const mainContent = document.querySelector('main') || document.querySelector('.hero');
                // if (mainContent) {
                //     mainContent.style.animation = 'fadeInUp 0.8s ease-out';
                // }
            }, 800);
        }, 300);
    });
    
    // Navigation functionality
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    
    function highlightNavigation() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${id}"]`);
            
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ===== ANIMATIONS & EFFECTS =====
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .team-card, .feature-item, .contact-item, .industry-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation for statistics
    const statsNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const suffix = element.textContent.match(/[+%]/g) ? element.textContent.match(/[+%]/g)[0] : '';
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }
    
    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statsNumbers.forEach(stat => {
                        const targetAttr = stat.getAttribute('data-target');
                        const target = parseInt(targetAttr);
                        if (!isNaN(target)) {
                            animateCounter(stat, target);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        statsObserver.observe(statsSection);
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    // window.addEventListener('scroll', () => {
    //     const scrolled = window.pageYOffset;
    //     const rate = scrolled * -0.5;
        
    //     if (hero && scrolled < hero.offsetHeight) {
    //         heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    //         heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
    //     }
    // });
    
    // ===== FORM HANDLING =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData);
            
            // Basic validation
            const requiredFields = ['name', 'email', 'service', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!formValues[field] || formValues[field].trim() === '') {
                    input.style.borderColor = '#f56565';
                    isValid = false;
                } else {
                    input.style.borderColor = '#e2e8f0';
                }
            });
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailInput = document.getElementById('email');
            if (!emailRegex.test(formValues.email)) {
                emailInput.style.borderColor = '#f56565';
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all required fields correctly.', 'error');
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && this.value.trim() === '') {
                    this.style.borderColor = '#f56565';
                } else if (this.type === 'email' && this.value !== '') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    this.style.borderColor = emailRegex.test(this.value) ? '#48bb78' : '#f56565';
                } else if (this.value.trim() !== '') {
                    this.style.borderColor = '#48bb78';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#667eea';
            });
        });
    }
    
    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">
                    ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
                </span>
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '0.75rem',
            color: 'white',
            fontWeight: '600',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '400px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        });
        
        // Set background color based on type
        const colors = {
            success: '#48bb78',
            error: '#f56565',
            info: '#667eea'
        };
        notification.style.background = colors[type] || colors.info;
        
        // Style notification content
        const content = notification.querySelector('.notification-content');
        Object.assign(content.style, {
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        });
        
        // Style close button
        const closeBtn = notification.querySelector('.notification-close');
        Object.assign(closeBtn.style, {
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            marginLeft: 'auto'
        });
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove
        const autoRemove = setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Manual close
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoRemove);
            removeNotification(notification);
        });
        
        function removeNotification(element) {
            element.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, 300);
        }
    }
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== SERVICE CARDS HOVER EFFECTS =====
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===== TEAM CARDS ANIMATION =====
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ===== VIDEO OVERLAY INTERACTION =====
    const videoOverlays = document.querySelectorAll('.video-overlay');
    
    videoOverlays.forEach(overlay => {
        overlay.addEventListener('click', function() {
            const iframe = this.parentElement.querySelector('iframe');
            if (iframe) {
                // Add autoplay parameter to iframe src
                const src = iframe.src;
                if (src.includes('autoplay=0')) {
                    iframe.src = src.replace('autoplay=0', 'autoplay=1');
                }
                this.style.opacity = '0';
                setTimeout(() => {
                    this.style.display = 'none';
                }, 300);
            }
        });
    });
    
    // ===== FLOATING ELEMENTS ANIMATION =====
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Random floating animation
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 10;
            const randomY = (Math.random() - 0.5) * 10;
            card.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 1000));
    });
    
    // ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
    const scrollAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Apply scroll animations to various elements
    const scrollElements = document.querySelectorAll('.section-title, .section-description, .hero-content, .about-features, .contact-info');
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        scrollAnimationObserver.observe(el);
    });
    
    // ===== DYNAMIC TYPING EFFECT FOR HERO TITLE =====
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        const gradientText = heroTitle.querySelector('.gradient-text');
        const gradientOriginalText = gradientText ? gradientText.textContent : '';
        
        // Only apply typing effect on desktop
        if (window.innerWidth > 768) {
            heroTitle.innerHTML = 'Partnering  success with our<br><span class="gradient-text"></span>';
            const gradientSpan = heroTitle.querySelector('.gradient-text');
            
            let i = 0;
            const typeSpeed = 100;
            const text = 'AI enabled  Legal Tech  Process and Tool';
            
            function typeWriter() {
                if (i < text.length) {
                    gradientSpan.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, typeSpeed);
                }
            }
            
            // Start typing animation after a delay
            setTimeout(typeWriter, 1500);
        }
    }
    
    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                const newImg = new Image();
                newImg.onload = () => {
                    img.style.opacity = '1';
                };
                newImg.src = img.src;
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    window.addEventListener('scroll', debounce(() => {
        // Scroll-dependent animations can go here
    }, 16));
    
    // ===== KEYBOARD NAVIGATION SUPPORT =====
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Navigate sections with arrow keys
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const currentSection = document.querySelector('section:hover') || sections[0];
            const currentIndex = Array.from(sections).indexOf(currentSection);
            
            let nextIndex;
            if (e.key === 'ArrowDown') {
                nextIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else {
                nextIndex = Math.max(currentIndex - 1, 0);
            }
            
            sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // ===== ACCESSIBILITY IMPROVEMENTS =====
    
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid rgba(102, 126, 234, 0.5)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: fixed;
        top: -100px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 1rem;
        text-decoration: none;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-100px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // ===== INITIALIZE ALL FEATURES =====
    console.log('Legalion website initialized successfully! 🚀');
});

// ===== UTILITY FUNCTIONS =====

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(element, offset = 100) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
}

// Preload images for better performance
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== NEWSLETTER FORM =====
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = document.querySelector('.newsletter-input');
const newsletterBtn = document.querySelector('.newsletter-btn');

if (newsletterForm && newsletterInput && newsletterBtn) {
    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        
        if (!email) {
            showNotification('Please enter your email address', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate newsletter subscription
        newsletterBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        newsletterBtn.disabled = true;
        
        setTimeout(() => {
            newsletterBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            newsletterInput.value = '';
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            
            setTimeout(() => {
                newsletterBtn.innerHTML = '<span>Subscribe</span><i class="fas fa-arrow-right"></i>';
                newsletterBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
    
    newsletterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            newsletterBtn.click();
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 350px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-success {
                background: linear-gradient(135deg, #4CAF50, #45a049);
            }
            .notification-error {
                background: linear-gradient(135deg, #f44336, #da190b);
            }
            .notification-info {
                background: linear-gradient(135deg, #2196F3, #1976D2);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===== MAP FUNCTIONALITY =====
function initMap() {
    // Map is now handled by iframe, but we can add some interactive features
    const mapWrapper = document.querySelector('.map-wrapper');
    const mapOverlay = document.querySelector('.map-overlay');
    
    if (mapWrapper && mapOverlay) {
        // Add hover effects to overlay
        mapOverlay.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        mapOverlay.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Animate overlay on load
        setTimeout(() => {
            if (mapOverlay) {
                mapOverlay.style.animation = 'slideInLeft 1s ease-out';
            }
        }, 500);
    }
}

function getDirections() {
    const destination = "Plot+10/10,+Anantam+Residency,+Sabar+sahi,+Rasulgarh,+Bhubaneswar-751010";
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const origin = `${position.coords.latitude},${position.coords.longitude}`;
                const url = `https://www.google.com/maps/dir/${origin}/${destination}`;
                window.open(url, '_blank');
            },
            () => {
                // Fallback if location access is denied
                const url = `https://www.google.com/maps/dir//${destination}`;
                window.open(url, '_blank');
                if (typeof showNotification === 'function') {
                    showNotification('Please allow location access for better directions', 'info');
                }
            }
        );
    } else {
        // Fallback for browsers that don't support geolocation
        const url = `https://www.google.com/maps/dir//${destination}`;
        window.open(url, '_blank');
    }
}

// ===== WHATSAPP FUNCTIONALITY =====
function openWhatsApp() {
    // Replace with your actual WhatsApp number (including country code, without + or spaces)
    const phoneNumber = "919945293599"; // Your phone number from the website
    const message = "Hello! I'm interested in your services. Can you help me?";
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Add click animation
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.style.animation = 'none';
    whatsappButton.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        whatsappButton.style.transform = 'scale(1)';
        whatsappButton.style.animation = 'float 3s ease-in-out infinite';
    }, 150);
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Analytics tracking (optional)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            event_category: 'engagement',
            event_label: 'floating_button'
        });
    }
}

// Show WhatsApp button with delay and animation
function initWhatsAppButton() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) {
        // Add entrance animation after page load
        setTimeout(() => {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.visibility = 'visible';
        }, 2000);
        
        // Add periodic attention animation
        setInterval(() => {
            const button = whatsappFloat.querySelector('.whatsapp-button');
            button.style.animation = 'none';
            setTimeout(() => {
                button.style.animation = 'float 3s ease-in-out infinite, attention 0.8s ease-in-out';
            }, 10);
        }, 15000); // Every 15 seconds
    }
}

// Add attention-grabbing animation
const attentionKeyframes = `
    @keyframes attention {
        0%, 100% { transform: translateY(0px) scale(1); }
        25% { transform: translateY(-5px) scale(1.05); }
        50% { transform: translateY(-8px) scale(1.1); }
        75% { transform: translateY(-5px) scale(1.05); }
    }
`;

// Add the attention animation to the page
const attentionStyle = document.createElement('style');
attentionStyle.textContent = attentionKeyframes;
document.head.appendChild(attentionStyle);

// ===== FLOATING PARTICLES EFFECT =====
function createFloatingParticles() {
    const industriesSection = document.querySelector('.industries-section');
    if (!industriesSection) return;

    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'floating-particles';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 1;
    `;
    
    industriesSection.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: linear-gradient(45deg, rgba(102, 126, 234, 0.6), rgba(159, 122, 234, 0.6));
            border-radius: 50%;
            animation: float-particle ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particleContainer.appendChild(particle);
    }

    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0%, 100% {
                transform: translate(0, 0) scale(0.8);
                opacity: 0.3;
            }
            25% {
                transform: translate(20px, -30px) scale(1);
                opacity: 0.8;
            }
            50% {
                transform: translate(-15px, -60px) scale(1.2);
                opacity: 0.5;
            }
            75% {
                transform: translate(30px, -90px) scale(0.9);
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special handling for industries section
                if (entry.target.classList.contains('industries-section')) {
                    const title = entry.target.querySelector('.industries-title');
                    const items = entry.target.querySelectorAll('.industry-item');
                    
                    // Animate title first
                    setTimeout(() => {
                        title.classList.add('animate');
                    }, 100);
                    
                    // Stagger animate items
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, 200 + (index * 100)); // 100ms delay between each item
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements that need animation
    const animatedElements = document.querySelectorAll('.industries-section, .industry-item, .service-card, .team-card, .about-content');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    createFloatingParticles();
    initWhatsAppButton();
    // Wait a bit for the page to fully load before initializing map
    setTimeout(initMap, 1000);
});

// ===== SERVICE MODAL FUNCTIONALITY =====
const serviceData = {
    legal: {
        title: "Legal Services",
        subtitle: "Professional legal solutions with integrity and expertise",
        content: `
            <div class="service-detail">
                <img src="Legalion-Website/Images/Lawist.jpg" alt="Legal Services" class="service-modal-img">
                <h3>Professional Legal Services You Can Trust</h3>
                <p>At Legalion, we provide comprehensive legal services tailored to meet the unique needs of individuals, families, and businesses. Our experienced attorneys are committed to delivering practical solutions with integrity, discretion, and unmatched professionalism.</p>
                
                <h4>Our Legal Expertise Includes:</h4>
                <div class="service-categories">
                    <div class="category-item">
                        <h5><i class="fas fa-gavel"></i> NCLT - Stress Assets - IBC Related</h5>
                        <p>Our IBC Advisory Services cover the full spectrum of support required under the Insolvency and Bankruptcy Code. We specialize in formulating legal strategies and defending applications under IBC to protect client interests.</p>
                        <ul>
                            <li>Formulation of Legal Strategies</li>
                            <li>Defending Applications under IBC</li>
                            <li>Legal Due Diligence</li>
                            <li>Resolution Plans Advisory</li>
                            <li>Liquidation Proceedings</li>
                            <li>Forensic Investigations</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-handshake"></i> Corporate Legal Services</h5>
                        <p>Comprehensive corporate legal support to ensure your business operations are legally sound and compliant.</p>
                        <ul>
                            <li>Contract Drafting & Review</li>
                            <li>Corporate Governance</li>
                            <li>Regulatory Compliance</li>
                            <li>Merger & Acquisitions</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-clipboard-check"></i> Dispute Resolution</h5>
                        <p>Expert representation in all forms of dispute resolution, from negotiation to litigation.</p>
                        <ul>
                            <li>Civil & Commercial Litigation</li>
                            <li>Alternative Dispute Resolution</li>
                            <li>Arbitration & Mediation</li>
                            <li>White Collar Criminal Defense</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    it: {
        title: "Information Technology Services",
        subtitle: "Smart, secure, and scalable IT solutions for modern businesses",
        content: `
            <div class="service-detail">
                <img src="Legalion-Website/Images/Information-Technology.jpg" alt="IT Services" class="service-modal-img">
                <h3>Empower Your Business with Smart IT Solutions</h3>
                <p>We deliver smart, secure, and scalable IT solutions to help businesses operate efficiently and stay ahead in the digital age. From support to strategy, we've got your tech covered.</p>
                
                <h4>Our IT Services Include:</h4>
                <div class="service-categories">
                    <div class="category-item">
                        <h5><i class="fas fa-headset"></i> Managed IT Support</h5>
                        <p>Proactive monitoring, maintenance, and technical support to keep your systems running smoothly 24/7.</p>
                        <ul>
                            <li>24/7 System Monitoring</li>
                            <li>Help Desk Support</li>
                            <li>Software Updates & Patches</li>
                            <li>Performance Optimization</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-network-wired"></i> Network Solutions</h5>
                        <p>Design, setup, and management of fast, secure, and scalable networks for your business.</p>
                        <ul>
                            <li>Network Design & Implementation</li>
                            <li>Security Configuration</li>
                            <li>VPN Setup</li>
                            <li>Network Monitoring</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-cloud"></i> Cloud Services</h5>
                        <p>Migration, optimization, and management of cloud infrastructure for flexibility and cost-efficiency.</p>
                        <ul>
                            <li>Cloud Migration</li>
                            <li>Cloud Optimization</li>
                            <li>Backup Solutions</li>
                            <li>Disaster Recovery</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-shield-alt"></i> Data Backup & Recovery</h5>
                        <p>Reliable solutions to safeguard your data and ensure business continuity.</p>
                        <ul>
                            <li>Automated Backups</li>
                            <li>Disaster Recovery Planning</li>
                            <li>Data Security</li>
                            <li>Business Continuity</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    branding: {
        title: "Business Branding & Digital Marketing",
        subtitle: "Build powerful, memorable brands that connect with your audience",
        content: `
            <div class="service-detail">
                <img src="Legalion-Website/Images/digital.jpg" alt="Business Branding" class="service-modal-img">
                <h3>Build Powerful, Memorable Brands</h3>
                <p>We help businesses build powerful, memorable brands that connect with their audience. From logo design to brand strategy, we bring your vision to life and drive digital growth.</p>
                
                <h4>Our Branding Services Include:</h4>
                <div class="service-categories">
                    <div class="category-item">
                        <h5><i class="fas fa-palette"></i> Brand Identity Design</h5>
                        <p>Create a distinctive visual identity that represents your business values and resonates with your target audience.</p>
                        <ul>
                            <li>Logo Design & Branding</li>
                            <li>Brand Guidelines</li>
                            <li>Visual Identity Systems</li>
                            <li>Brand Positioning</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-bullhorn"></i> Digital Marketing Strategy</h5>
                        <p>Comprehensive digital marketing strategies to boost your online presence and drive business growth.</p>
                        <ul>
                            <li>SEO & Content Marketing</li>
                            <li>Social Media Marketing</li>
                            <li>Google Ads & PPC</li>
                            <li>Email Marketing</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-globe"></i> Website Development</h5>
                        <p>Modern, responsive websites that convert visitors into customers and represent your brand effectively.</p>
                        <ul>
                            <li>Responsive Web Design</li>
                            <li>E-commerce Development</li>
                            <li>CMS Solutions</li>
                            <li>Website Optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    consulting: {
        title: "Business Consulting Services",
        subtitle: "Strategic advice tailored to achieve your business goals",
        content: `
            <div class="service-detail">
                <img src="Legalion-Website/Images/business-consulting.jpg" alt="Business Consulting" class="service-modal-img">
                <h3>Strategic Advice Tailored to Your Goals</h3>
                <p>We provide expert consulting services to help businesses solve problems, improve performance, and achieve sustainable growth. Our strategic advice is tailored to your specific business goals and challenges.</p>
                
                <h4>Our Consulting Expertise:</h4>
                <div class="service-categories">
                    <div class="category-item">
                        <h5><i class="fas fa-chart-line"></i> Business Strategy & Planning</h5>
                        <p>Develop comprehensive business strategies that drive growth and competitive advantage.</p>
                        <ul>
                            <li>Strategic Planning</li>
                            <li>Market Analysis</li>
                            <li>Competitive Intelligence</li>
                            <li>Growth Strategies</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-cogs"></i> Digital Transformation</h5>
                        <p>Guide your business through digital transformation to improve efficiency and competitiveness.</p>
                        <ul>
                            <li>Digital Strategy Development</li>
                            <li>Technology Implementation</li>
                            <li>Process Automation</li>
                            <li>Change Management</li>
                        </ul>
                    </div>
                    
                    <div class="category-item">
                        <h5><i class="fas fa-users"></i> Performance Improvement</h5>
                        <p>Optimize your business operations and enhance overall performance through proven methodologies.</p>
                        <ul>
                            <li>Process Optimization</li>
                            <li>Performance Metrics</li>
                            <li>Operational Excellence</li>
                            <li>Quality Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
};

function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalBody = document.getElementById('modalBody');
    
    if (serviceData[serviceType]) {
        // Update content
        modalTitle.textContent = serviceData[serviceType].title;
        modalSubtitle.textContent = serviceData[serviceType].subtitle || 'Comprehensive solutions for your needs';
        modalBody.innerHTML = serviceData[serviceType].content;
        
        // Update icon
        const iconMap = {
            'legal': 'fas fa-balance-scale',
            'it': 'fas fa-laptop-code',
            'branding': 'fas fa-palette',
            'consulting': 'fas fa-lightbulb'
        };
        
        modalIcon.innerHTML = `<i class="${iconMap[serviceType] || 'fas fa-cog'}"></i>`;
        
        // Show modal with animation
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation to content
        setTimeout(() => {
            modalBody.style.animation = 'fadeInUp 0.6s ease-out';
        }, 200);
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add exit animation
    modalContent.style.animation = 'slideOutModal 0.3s ease-in';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalContent.style.animation = '';
    }, 300);
}

// Scroll to contact function for modal button
function scrollToContact() {
    closeServiceModal();
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 400);
}

// Enhanced modal click handling
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    
    if (event.target === modal || event.target === modalBackdrop) {
        closeServiceModal();
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===== SERVICE WORKER FOR OFFLINE CAPABILITY (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}