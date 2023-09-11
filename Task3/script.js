const countryInformation = document.querySelector('.country-info');
const button = document.getElementById('new-btn');
async function getCountryDetails() {
  const dataLink = await fetch('https://restcountries.com/v3.1/all');
    if (dataLink.ok) {
      const data = await dataLink.json();
      const randomValue = Math.floor(Math.random() * data.length);
      const country = data[randomValue];

      
      const Name = country.name.common;
      const population = country.population.toLocaleString();
      const area = country.area.toLocaleString();
      const region = country.region;
      const capital = country.capital[0];
      
      const htmlTemplate = `
        <h2>${Name}</h2>
        <p>Capital: ${capital}</p>
        <p>Region: ${region}</p>
        <p>Population: ${population}</p>
        <p>Area: ${area} square kilometers</p>
      `;

      // Update the HTML container with the country information
      countryInformation.innerHTML = htmlTemplate;
    } 
    else {
      countryInformation.innerHTML = 'Failed to fetch country information.';
    }
}

button.addEventListener('click', getCountryDetails);
getCountryDetails()