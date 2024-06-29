// Function to fetch weather data for a given country
function fetchWeather(country) {
    const weatherApiKey = '33e43d2258b1f9e55019e74ad55d5cbb'; 
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${weatherApiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            displayError('Failed to load weather data');
            console.error('Error fetching weather data:', error);
        });
}

// Function to display weather data on the webpage
function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
}

// Function to display error message on the webpage
function displayError(message) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = message;
}

// Event listener for form submission
document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const country = document.getElementById('countryInput').value.trim();
    if (country) {
        fetchWeather(country);
    } else {
        displayError('Please enter a valid country name');
    }
});
