document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Удаляем все ранее загруженные скрипты (если есть)
    const existingScripts = document.querySelectorAll('script[data-dynamic]');
    existingScripts.forEach(script => script.remove());

    // Загружаем нужный скрипт
    const script = document.createElement('script');
    script.src = isMobile ? 'scripts/mobile-animation.js' : 'scripts/desktop-animation.js';
    script.setAttribute('data-dynamic', 'true'); // Помечаем скрипт как динамический
    document.body.appendChild(script);
});