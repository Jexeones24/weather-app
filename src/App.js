import React, { Component } from 'react'
import './App.css'
import { Forecast, Footer } from './components/weather'
import { loadLocalWeather, loadWeather } from './lib/weatherService'
import TableContainer from './components/weather/TableContainer'
import { Header } from './components/weather/Header'

class App extends Component {
  state = {
    loading: true,
    categories: ['CITY', 'COUNTRY', 'AVG. TEMP.', 'HIGH', 'LOW'],
    weather: [],
    searchCity: ''
  }

  componentDidMount () {
    this.getGeoLocation()
  }

  // on refactor - helper function to create weather object frmom fetch
    // build your first production quality react application
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
          let weatherData = {}
          weatherData.city = data.name
          weatherData.country = data.sys.country
          weatherData.avgTemp = data.main.temp
          weatherData.high = data.main.temp_max
          weatherData.low = data.main.temp_min
          self.setState({
            weather: [...self.state.weather, weatherData],
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

  fetchWeather = (searchCity) => {
    this.setState({ searchCity }, () => {
      loadWeather(searchCity)
        .then(data => {
          let newWeatherData = {}
          newWeatherData.city = data.name
          newWeatherData.country = data.sys.country
          newWeatherData.avgTemp = data.main.temp
          newWeatherData.high = data.main.temp_max
          newWeatherData.low = data.main.temp_min
          this.setState({ weather: [...this.state.weather, newWeatherData] }, () => {console.log(this.state.weather)})
        })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchWeather(this.state.searchCity)
    this.setState({ searchCity: '' })
  }

  handleInputChange = (event) => {
    this.setState({ searchCity: event.target.value })
    console.log('find weather for:', this.state.searchCity)
  }

  render () {

    let renderContent = () =>
      this.state.loading ?
      <div><h2>Fetching local weather...</h2></div> :
      <div className='weather-app'>
        <TableContainer
          categories={this.state.categories}
          weather={this.state.weather}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          searchCity={this.state.searchCity}
          fetchWeather={this.fetchWeather}
        />
        <Footer />
      </div>

    return (
      <div className='App'>
        <Header />
        {renderContent()}
      </div>
    )
  }
}

export default App
