import React, { Component } from 'react'
import './App.css'
import { Forecast, Footer } from './components/weather'
import { loadLocalWeather, loadWeather } from './lib/weatherService'
import FilterableTable from './components/weather/FilterableTable'

class App extends Component {
  state = {
    categories: ['CITY', 'COUNTRY', 'AVG. TEMP.', 'HIGH', 'LOW'],
    weather: []
  }

  componentDidMount () {
    this.getGeoLocation()
  }

  getGeoLocation () {
    let self = this
    if (!navigator.geolocation) {
      alert('geolocation unavailable')
      return;
    }
    function success (position) {
      let lat  = position.coords.latitude
      let lon = position.coords.longitude
      loadLocalWeather(lat, lon)
        .then(data => {
          let weather = self.state.weather
          weather.city = data.name
          weather.country = data.sys.country
          weather.avgTemp = data.main.temp
          weather.high = data.main.temp_max
          weather.low = data.main.temp_min
          self.setState({ weather: [...self.state.weather, weather] }, () => {console.log('weather:', self.state.weather)})
        })
      }
    function error () {
      alert('error')
    }
    console.log('loading local weather...')
    navigator.geolocation.getCurrentPosition(success, error)
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src='' alt=''/>
          <h2>WEATHER APP</h2>
        </div>
        <div className='weather-app'>
          <button onClick={this.geoFindMe}>Find me</button>
          <FilterableTable
            categories={this.state.categories}
            weather={this.state.weather}
          />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
