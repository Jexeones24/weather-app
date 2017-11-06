const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'bf8ca4717bdd97a9ba7800e9f63c7b72'
const id = 524901

const handleErrors = (resp) => {
  if (!resp.ok) {
    throw Error(resp.statusText)
  }
  return resp
}

export const loadLocalWeather = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
  .then(handleErrors)
  .then(resp => resp.json())
  .catch(error => { console.log(error) })
}

export const loadWeather = (city) => {
  return fetch(`${baseURL}?q=${city}id=${id}&APPID=${API_KEY}&units=imperial`)
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { console.log(error) })
}
