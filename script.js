const counters = document.querySelectorAll('.counter');
const speed = 200; // Lower the number, faster the counter

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20); // Repeat the function every 20ms
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});