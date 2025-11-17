// ===========================
// Vanta.js NET Effect Initialization (Gray Theme)
// ===========================

let vantaEffect = VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x666666,
    backgroundColor: 0x0F0F0F,
    points: 10.00,
    maxDistance: 20.00,
    spacing: 15.00
});

// ===========================
// Hide Vanta Background on Scroll
// ===========================

const vantaBg = document.getElementById('vanta-bg');
const heroSection = document.getElementById('hero');

window.addEventListener('scroll', () => {
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    // Hide background when scrolling past hero section
    if (scrollPosition > heroHeight * 0.8) {
        vantaBg.classList.add('hidden');
    } else {
        vantaBg.classList.remove('hidden');
    }
});

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Scroll-Triggered Animations with IntersectionObserver
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden-anim');
            entry.target.classList.add('show-anim');
        }
    });
}, observerOptions);

// Observe all elements with hidden-anim class
document.querySelectorAll('.hidden-anim').forEach(element => {
    observer.observe(element);
});
