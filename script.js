// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Message sent successfully! We’ll get back to you soon.");
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const revealOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();