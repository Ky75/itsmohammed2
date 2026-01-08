const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2// Trigger when 10% of element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // If you want the animation to run only once, uncomment the next line:
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    observer.observe(el);
});