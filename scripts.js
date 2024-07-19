document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready');
});
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');
    const speed = 500; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        const startCounter = () => {
            const rect = counter.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                updateCount();
                window.removeEventListener('scroll', startCounter);
            }
        };

        window.addEventListener('scroll', startCounter);
        startCounter();
    });
});
