const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'bf8ca4717bdd97a9ba7800e9f63c7b72'
const city = 'detroit'
const id = 524901

export const loadLocalWeather = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(resp => resp.json())
}

export const loadWeather = () => {
  return fetch(`${baseURL}?q=${city}id=${id}&APPID=${API_KEY}`)
    .then(resp => resp.json())
}
