document.addEventListener('DOMContentLoaded', function() {
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
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
});
