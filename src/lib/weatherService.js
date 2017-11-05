const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'bf8ca4717bdd97a9ba7800e9f63c7b72'
const city = 'detroit'
const id = 524901
// http://api.openweathermap.org/data/2.5/weather?q=detroitid=524901&APPID=bf8ca4717bdd97a9ba7800e9f63c7b72

export const loadWeather = () => {
  return fetch(`${baseURL}?q=${city}id=${id}&APPID=${API_KEY}`)
    .then(resp => resp.json())
}
