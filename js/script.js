// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add interactive effects to tool items
document.querySelectorAll('.tool-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Add typing effect to the main title
const title = document.querySelector('.header-content h1');
const text = title.textContent;
title.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Add click functionality to social links (placeholder)
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.textContent.toLowerCase();
        alert(`This would link to ${platform}. Please update the href attribute with the actual URL.`);
    });
});

// Add smooth reveal animation for sections
const revealSections = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 150;
        
        if (sectionTop < window.innerHeight - sectionVisible) {
            section.classList.add('visible');
        }
    });
};

// Call reveal function on scroll
window.addEventListener('scroll', revealSections);

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.nav-icon[title="Dark Mode"]');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Toggle between moon and sun icons
            darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    }
});

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.nav-icon');
    if (searchIcon && searchIcon.textContent === '🔍') {
        searchIcon.addEventListener('click', () => {
            const searchTerm = prompt('Enter search term:');
            if (searchTerm) {
                // Simple search functionality - you can enhance this
                console.log('Searching for:', searchTerm);
                alert(`Searching for: ${searchTerm}`);
            }
        });
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    revealSections();
});
