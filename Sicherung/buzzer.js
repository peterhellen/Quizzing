document.addEventListener('DOMContentLoaded', function() {
    const buzzerButton = document.getElementById('buzzerButton');

    buzzerButton.addEventListener('click', function() {
        buzzerButton.classList.add('clicked');
        buzzerButton.textContent = 'Buzzed!';
    });
});
