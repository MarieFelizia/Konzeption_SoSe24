
function toggleDetails(element) {
    const details = element.nextElementSibling;
    const plus = element.querySelector('.plus');

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        plus.textContent = '-';
        element.querySelector('span:first-child').textContent = 'Details';
        element.classList.add('active');
        details.classList.add('active');
    } else {
        details.style.display = 'none';
        plus.textContent = '+';
        element.classList.remove('active');
        details.classList.remove('active');
    }
}

