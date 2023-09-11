const DataOfWeather = document.querySelector('.weather-data');

async function weatherFunction() {
    try {
        const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=899f97a54022fc363028b5bd581b797d`);//calling the api key link of own apiKey
        if (link.ok) {
            const data = await link.json();
            const temp = data.main.temp;
            const dataTaken = data.name;
            const jsonData = data.weather[0].description;
            
            const dispalyHTML_data = `
                <h2>${dataTaken}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Weather: ${jsonData}</p>
            `;
            DataOfWeather.innerHTML = dispalyHTML_data;
        } 
        else {
            DataOfWeather.innerHTML = 'Failed to fetch the data.';
        }
    } 

    catch (error) {
        DataOfWeather.innerHTML = "Weather data can't fetch right now.";
    }
}

window.addEventListener('load', weatherFunction);