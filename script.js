// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Typing animation for the hero section
    const text = "The Answer to Digital Innovation";
    let index = 0;
    const typingText = document.querySelector('.typing-text');
    
    function typeWriter() {
        if (index < text.length) {
            typingText.textContent = text.slice(0, index + 1);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing animation
    typeWriter();

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // You would typically send this to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thanks for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add animation class to timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
        item.classList.add('animate-timeline');
    });
});

// Particle background effect (optional but cool)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add resize handler for responsive layouts
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recalculate any position-dependent elements
        const heroHeight = window.innerHeight;
        document.querySelector('.hero').style.minHeight = heroHeight + 'px';
    }, 250);
}); 