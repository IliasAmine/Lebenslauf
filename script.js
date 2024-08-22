document.addEventListener('DOMContentLoaded', function() {
    // Scroll-Animation für die Timeline-Items
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s ease';
                observer.unobserve(entry.target);
            }
        });
    });

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });

    // Smooth Scrolling for navigation
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.7
    };

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.main-nav a[href="#${id}"]`);

            if (entry.isIntersecting) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
