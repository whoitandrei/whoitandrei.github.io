document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'NO_API'; // Замените на ваш API ключ
    const city = 'Novosibirsk';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;

            document.getElementById('weather-description').textContent = weatherDescription;
            document.getElementById('weather-temp').textContent = `${temperature}°C`;
        })
        .catch(error => {
            console.error('Ошибка при получении данных о погоде:', error);
            document.getElementById('weather-description').textContent = 'Не удалось загрузить данные о погоде';
        });
});