// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    } else {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    }
}

// Mobile Dropdown Toggle
function toggleMobileDropdown(event) {
    event.stopPropagation();
    const toggle = event.currentTarget;
    const menu = toggle.nextElementSibling;
    
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.querySelector('.mobile-menu-btn i');
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    }
}

// Hero Carousel
let currentSlide = 0;
const totalSlides = 4;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-advance hero carousel
setInterval(() => {
    changeSlide(1);
}, 5000);

// Awards Carousel
const awardsData = [
    [
        { icon: 'fa-award', title: 'Quality', description: 'These recognition/award is just one example of many awards our company has received since 2005.' },
        { icon: 'fa-check-circle', title: 'Reliability', description: 'We have been a pioneer in our industry, recognized as a company that sets the benchmark in quality, service, and compliance.' },
        { icon: 'fa-truck', title: 'Delivery', description: 'These awards come from our clients throughout a wide array of industries.' }
    ],
    [
        { icon: 'fa-award', title: 'Best Supplier 2015', description: 'Selection for the awards considers numerous factors, such as superior performance in competitive operating environments.' },
        { icon: 'fa-award', title: 'Best Supplier 2014', description: 'Commitment to exemplary customer service and compliance with contractual requirements.' },
        { icon: 'fa-award', title: 'Excellence Award', description: 'Recognition for outstanding quality and dedication to customer satisfaction.' }
    ]
];

let currentAwardsSlide = 0;

function changeAwardsSlide(direction) {
    currentAwardsSlide = (currentAwardsSlide + direction + awardsData.length) % awardsData.length;
    updateAwardsCarousel();
}

function goToAwardsSlide(index) {
    currentAwardsSlide = index;
    updateAwardsCarousel();
}

function updateAwardsCarousel() {
    const grid = document.getElementById('awardsGrid');
    const dots = document.querySelectorAll('#awards .carousel-dots .dot');
    
    grid.innerHTML = '';
    awardsData[currentAwardsSlide].forEach(award => {
        const card = document.createElement('div');
        card.className = 'card card-hover text-center';
        card.innerHTML = `
            <div class="icon-box-large mx-auto mb-medium">
                <i class="fas ${award.icon}"></i>
            </div>
            <h3 class="card-title">${award.title}</h3>
            <p class="card-description">${award.description}</p>
        `;
        grid.appendChild(card);
    });
    
    dots.forEach((dot, index) => {
        if (index === currentAwardsSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-advance awards carousel
setInterval(() => {
    changeAwardsSlide(1);
}, 5000);

// Testimonials
const testimonials = [
    {
        text: "SS PRECISION is an outstanding supplier and has issued the 100 PPM certificate for their excellent performance demonstrated to achieve 100 PPM.",
        author: "MH Shin",
        position: "Managing Director, Woosu"
    },
    {
        text: "SS is a wonderful company to work with. They have kept their quality assurance 100% at all times and have provided a greater service.",
        author: "Ramesh",
        position: "Operations Director, Vishay Engineering"
    },
    {
        text: "SS has always kept their commitment and delivered the parts on time even at the time of crisis. They have maintained the quality at all times.",
        author: "Meganathan",
        position: "Head - Purchasing & SQ, Allison Transmission"
    },
    {
        text: "SS PRECISION is technically sound and well-experienced engineers with high skill level workforce that is enhancing their ability to prove it in the market.",
        author: "Ramajayam",
        position: "Head - Technical, FSH Group"
    }
];

let currentTestimonial = 0;

function changeTestimonial(direction) {
    currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial();
}

function updateTestimonial() {
    const content = document.getElementById('testimonialContent');
    const dots = document.querySelectorAll('.testimonial-card .carousel-dots .dot');
    
    const testimonial = testimonials[currentTestimonial];
    content.innerHTML = `
        <p class="testimonial-text">"${testimonial.text}"</p>
        <p class="testimonial-author">${testimonial.author}</p>
        <p class="testimonial-position">${testimonial.position}</p>
    `;
    
    dots.forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// OEMs Carousel
const oemsData = [
    Array.from({ length: 5 }, (_, i) => ({ id: i + 1, name: `OEM ${i + 1}` })),
    Array.from({ length: 5 }, (_, i) => ({ id: i + 6, name: `OEM ${i + 6}` }))
];

let currentOemsSlide = 0;

function changeOemsSlide(direction) {
    currentOemsSlide = (currentOemsSlide + direction + oemsData.length) % oemsData.length;
    updateOemsCarousel();
}

function goToOemsSlide(index) {
    currentOemsSlide = index;
    updateOemsCarousel();
}

function updateOemsCarousel() {
    const grid = document.getElementById('oemsGrid');
    const dots = document.querySelectorAll('#oemsGrid + .carousel-controls .carousel-dots .dot');
    
    grid.innerHTML = '';
    oemsData[currentOemsSlide].forEach(oem => {
        const card = document.createElement('div');
        card.className = 'card card-hover text-center';
        card.innerHTML = `<p class="text-muted">${oem.name}</p>`;
        grid.appendChild(card);
    });
    
    dots.forEach((dot, index) => {
        if (index === currentOemsSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-advance OEMs carousel
setInterval(() => {
    changeOemsSlide(1);
}, 4000);

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize carousels on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCarousel();
    updateAwardsCarousel();
    updateTestimonial();
    updateOemsCarousel();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add entrance animations to hero section
    addHeroAnimations();
    
    // Observe elements for scroll animations
    observeElements();
});

// Scroll Animation System
function initScrollAnimations() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Listen for scroll events with throttling
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            animateOnScroll();
        });
    });
    
    // Initial check for elements in view
    animateOnScroll();
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animated');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = 100; // pixels from bottom of viewport
    
    return (
        rect.top <= windowHeight - threshold &&
        rect.bottom >= 0
    );
}

// Intersection Observer for better performance
function observeElements() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements with animation classes
        const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
        elementsToObserve.forEach(el => observer.observe(el));
    }
}

// Add entrance animations to hero section
function addHeroAnimations() {
    // Check if hero section exists
    const heroSection = document.querySelector('.hero-carousel');
    if (!heroSection) return;
    
    // Animate hero content on page load
    const heroSlides = document.querySelectorAll('.carousel-slide');
    if (heroSlides.length > 0) {
        const activeSlide = heroSlides[0];
        const heroContent = activeSlide.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }
    }
}

// Enhanced smooth scroll for navigation
function smoothScrollTo(element, duration = 800) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Stagger animations for grid items
function addStaggerAnimation(container, itemSelector, animationClass, delay = 100) {
    const items = container.querySelectorAll(itemSelector);
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * delay}ms`;
        item.classList.add(animationClass);
    });
}

// Add parallax effect to sections (optional, lightweight)
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    lastScrollY = scrollY;
}, { passive: true });

