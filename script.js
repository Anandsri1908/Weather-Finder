function getWeather() {
    const city = document.getElementById('inputBox').value;
    const apiKey = "1b02130aa9cb2371161c7966134eaa9c";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Please enter a valid city name.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const weatherInfo = `
            <p><strong>${data.name}</strong></p>
            <p class="cloud"><img src="cloud.jpg" alt="weather icon"><strong>${data.main.temp}°C</strong></p>
            <p><strong>${data.weather[0].description}</strong></p>
            <div class="humidity-wind">
                <p><img src="humidity.png" alt="humidity icon"><strong>${data.main.humidity}%</strong><br>humidity</p>
                <p><img src="wind-speed.png" alt="wind icon"><strong>${data.wind.speed} m/s</strong><br>wind speed</p>
            </div>`;
        
        document.getElementById('weatherResult').innerHTML = weatherInfo;
    })
    .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        console.error('Error fetching weather data', error);
    });
}