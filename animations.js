// For views.html animation
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.main1').style.opacity = '1'; // Set opacity to 1 to ensure cards are visible after animation
});

// For project.html animation
document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.column');
    const infoContent = document.getElementById('info-content');
    const sections = document.querySelectorAll('.main2, .main3, .main4, .main5');
    const images = document.querySelectorAll('.main22 img');
    let index = 0;

    columns.forEach(column => {
        column.addEventListener('click', function() {
            columns.forEach(col => col.classList.remove('active'));
            column.classList.add('active');
            const info = column.getAttribute('data-info');
            infoContent.style.opacity = '0';
            setTimeout(() => {
                infoContent.textContent = info;
                infoContent.style.opacity = '1';
            }, 300);
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    function changeImage() {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 3000);
});
