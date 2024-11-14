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


// Данные задач для среднего уровня
const mediumTasks = [
    { type: 'equation', content: '\\( 3x + y = 18, \\quad x + y = 6 \\)' },
    { type: 'equation', content: '\\( 2x + 3y = 18, \\quad x - y = 2 \\)' },
    { type: 'task', content: 'Найдите такие числа \\( m \\) и \\( n \\), для которых \\( m + 2n = 10 \\) и \\( m - n = 4 \\).' },
    { type: 'equation', content: '\\( 3x + 2y = 22, \\quad x - y = 2 \\)' },
    { type: 'equation', content: '\\( x + 2y = 14, \\quad x \\times y = 36 \\)' }
];

// Функция для генерации задачи
function generateMediumTask(task) {
    if (task.type === 'equation') {
        return `<div class="equation">${task.content}</div>`;
    } else if (task.type === 'task') {
        return `<div class="task">${task.content}</div>`;
    }
}

// Заполнение контейнера задач среднего уровня
const mediumTasksContainer = document.getElementById('medium-tasks-container');
mediumTasks.forEach(task => {
    mediumTasksContainer.innerHTML += generateMediumTask(task);
});