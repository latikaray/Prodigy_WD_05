<script>
        async function getWeather() {
            const apiKey = 'Use your api-key';
            const locationInput = document.getElementById('locationInput').value;

            if (locationInput.trim() === '') {
                alert('Please enter a location.');
                return;
            }

            const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
            const options = {
	        method: 'GET',
	            headers: {
		           'x-rapidapi-key': '1e7407e081msh9b7240205fb7f34p11b663jsnede1fefd87c4',
		           'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	            }
            };

           try {
	          const response = await fetch(url, options);
	          const result = await response.text();
	          console.log(result);
            } catch (error) {
	        console.error(error);
            alert('You might entered wrong location or error in fetching weather data. Please try again.');
           }
        }

        function displayWeather(data) {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '';

            const cityName = document.createElement('h2');
            cityName.textContent = data.name;

            const temperature = document.createElement('p');
            temperature.textContent = `Temperature: ${data.main.temp}°F`;

            const description = document.createElement('p');
            description.textContent = `Weather: ${data.weather[0].description}`;

            const humidity = document.createElement('p');
            humidity.textContent = `Humidity: ${data.main.humidity}%`;

            const windSpeed = document.createElement('p');
            windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

            weatherInfo.appendChild(cityName);
            weatherInfo.appendChild(temperature);
            weatherInfo.appendChild(description);
            weatherInfo.appendChild(humidity);
            weatherInfo.appendChild(windSpeed);
        }
    </script>
