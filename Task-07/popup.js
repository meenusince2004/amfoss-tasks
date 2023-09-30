document.addEventListener('DOMContentLoaded', function () {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');
    const apiKey = 'a1205bd95ff3e87a7836c406964e5d1b';
  
    getWeatherBtn.addEventListener('click', function () {
      const cityName = cityInput.value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const celsius = temperature - 273.15;
          weatherInfo.innerHTML = `Temperature: ${celsius.toFixed(2)}°C<br>Description: ${description}`;
        })
        .catch((error) => {
          console.error(error);
          weatherInfo.innerHTML = 'Error fetching weather data.';
        });
    });
  });
  
  