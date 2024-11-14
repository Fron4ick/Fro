function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.nav-button');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            navButtons.forEach(button => button.classList.remove('active'));
            navButtons[index].classList.add('active');
        }
    });
});


// Функция для переключения видимости подсказки
function toggleHint(button) {
    const hint = button.nextElementSibling;
    hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
    button.textContent = hint.style.display === 'none' ? 'Подсказка' : 'Скрыть';
}