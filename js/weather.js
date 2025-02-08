const weatherIcon = document.querySelector('#weather');
const weather = document.querySelector('#weather span:nth-child(2)');
const city = document.querySelector('#weather span:nth-child(3)');
const API_KEY = '8a42e02e9e24f74ff87cb24b7d5dc7f9';
const chosenImages = [
  'atmosphere.png',
  'clear.png',
  'cloud.png',
  'drizzle.png',
  'rain.png',
  'snow.png',
  'thunderstorm.png',
];

function getWeatherIcon(weatherID) {
  let chosenWheatherIcon;
  switch (weatherID) {
    case 'Atmosphere':
      chosenWheatherIcon = chosenImages[1];
      break;
    case 'Clear':
      chosenWheatherIcon = chosenImages[2];
      break;
    case 'Clouds':
      chosenWheatherIcon = chosenImages[3];
      break;
    case 'Drizzle':
      chosenWheatherIcon = chosenImages[4];
      break;
    case 'Rain':
      chosenWheatherIcon = chosenImages[5];
      break;
    case 'Snow':
      chosenWheatherIcon = chosenImages[6];
      break;
    case 'Thunderstorm':
      chosenWheatherIcon = chosenImages[7];
      break;
  }
  return `img/weather/${chosenWheatherIcon}`;
}

export function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherID = data.weather[0].main;
      weather.innerText = `${weatherID} / ${data.main.temp}°C`;
      city.innerText = data.name;

      const iconUrl = getWeatherIcon(weatherID);
      const bgImage = document.createElement('img');
      bgImage.src = iconUrl;
      bgImage.style = 'width:100%';
      weatherIcon.prepend(bgImage);
    });
}

export function onGeoError() {
  alert("Can't find you. No weather for you.");
}
