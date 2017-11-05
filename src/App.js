import React, { Component } from 'react'
import './App.css'
import { Home, Forecast, Footer } from './components/weather'
import { loadWeather } from './lib/weatherService'

class App extends Component {
  state = {
    titles: ['CITY', 'COUNTRY', 'AVG. TEMP.', 'HIGH', 'LOW'],
    weather: [],
    searchCity: ''
  }

  componentDidMount () {
    loadWeather()
      .then(data => {
        let weather = this.state.weather
        weather.city = data.name
        weather.country = data.sys.country
        weather.avgTemp = data.main.temp
        weather.high = data.main.temp_max
        weather.low = data.main.temp_min
        this.setState({ weather: [...this.state.weather, weather] }, () => { console.log('weather:', this.state.weather, 'titles:', this.state.titles) })
      })
    }

  getSearchCity = (city) => {
    this.setState({searchCity: city}, () => {console.log('search this city:', this.state.searchCity)})
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src='' alt=''/>
          <h2>WEATHER APP</h2>
        </div>
        <div className='weather-app'>
          <Home
            titles={this.state.titles}
            weather={this.state.weather}
            getSearchCity={this.getSearchCity}
          />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
