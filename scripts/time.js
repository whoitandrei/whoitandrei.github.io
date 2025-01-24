document.addEventListener("DOMContentLoaded", function () {
    // Функция для форматирования времени
    function formatTime(date, timezoneOffset) {
        const localTime = new Date(date.getTime() + timezoneOffset * 1000);
        const hours = localTime.getUTCHours().toString().padStart(2, '0');
        const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');
        //const seconds = localTime.getUTCSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    // Функция для обновления времени
    function updateTime() {
        const now = new Date();

        // Время в Москве (UTC+3)
        const moscowTime = formatTime(now, 3 * 3600);
        document.getElementById('moscow-time').textContent = `Москва: ${moscowTime}`;

        // Время в Новосибирске (UTC+7)
        const novosibirskTime = formatTime(now, 7 * 3600);
        document.getElementById('novosibirsk-time').textContent = `Новосибирск: ${novosibirskTime}`;
    }

    // Обновляем время каждую секунду
    setInterval(updateTime, 2000);
    updateTime(); // Инициализация сразу
});