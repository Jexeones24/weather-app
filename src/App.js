import React, { Component } from 'react'
import './App.css'
import { Forecast, Footer } from './components/weather'
import { loadLocalWeather, loadWeather } from './lib/weatherService'
import TableContainer from './components/weather/TableContainer'

class App extends Component {
  state = {
    loading: true,
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
          self.setState({
            weather: [...self.state.weather, weather],
            loading: false
          })
        })
      }
    function error () {
      alert('error')
    }
    console.log('loading local weather...')
    navigator.geolocation.getCurrentPosition(success, error)
  }

  render () {
    
    let renderContent = () =>
      this.state.loading ?
      <div>Loading...</div> :
      <div className='weather-app'>
        <TableContainer
          categories={this.state.categories}
          weather={this.state.weather}
        />
        <Footer />
      </div>

    return (
      <div className='App'>
        <div className='App-header'>
          <img src='' alt=''/>
          <h2>WEATHER APP</h2>
        </div>
        {renderContent()}
      </div>
    )
  }
}

export default App
