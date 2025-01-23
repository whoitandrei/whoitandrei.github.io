// Анимация градиента
document.body.style.background = 'linear-gradient(270deg, #a8edea, #fed6e3, #a8edea)';
document.body.style.backgroundSize = '400% 400%';
document.body.style.animation = 'gradientAnimation 300s ease infinite'; // Замедлили анимацию

// Создаем стили для анимации градиента
const style = document.createElement('style');
style.textContent = `
    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(style);

// Создаем элемент для эффекта курсора
const cursorEffect = document.createElement('div');
cursorEffect.id = 'cursor-effect';
cursorEffect.style.position = 'absolute';
cursorEffect.style.width = '30px'; // Увеличиваем размер круга
cursorEffect.style.height = '30px';
cursorEffect.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))'; // Градиентный круг
cursorEffect.style.borderRadius = '50%';
cursorEffect.style.pointerEvents = 'none';
cursorEffect.style.transform = 'translate(-50%, -50%)';
cursorEffect.style.opacity = '0';
cursorEffect.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
document.body.appendChild(cursorEffect);

// Обработчик движения курсора
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Позиционируем круг под курсором
    cursorEffect.style.left = `${x}px`;
    cursorEffect.style.top = `${y}px`;

    // Показываем круг
    cursorEffect.style.opacity = '1';
});

// Обработчик выхода курсора за пределы окна
document.addEventListener('mouseout', () => {
    // Скрываем круг, если курсор покидает окно
    cursorEffect.style.opacity = '0';
});