import React, { Component } from 'react'
import './App.css'
import { Forecast, Footer, Header } from './components/weather'
import TableContainer from './components/weather/TableContainer'
import { loadLocalWeather, loadWeather } from './lib/weatherService'

class App extends Component {
  state = {
    loading: true,
    categories: ['CITY', 'COUNTRY', 'AVG. TEMP.', 'HIGH', 'LOW'],
    weather: [],
    searchCity: '',
    errorMessage: ''
  }

  componentDidMount () {
    this.getGeoLocation()
  }

  // on refactor - helper function to create weather object frmom fetch
    // build your first production quality react application
  getGeoLocation () {
    let self = this
    if (!navigator.geolocation) {
      alert('Geolocation unavailable')
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
      alert('There was an error fetching local weather')
    }
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
          this.setState({ weather: [...this.state.weather, newWeatherData] })
        })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchWeather(this.state.searchCity)
    this.setState({
      searchCity: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please enter a city'
    })
  }

  handleInputChange = (event) => {
    this.setState({ searchCity: event.target.value })
  }

  render () {
    const submitHandler = this.state.searchCity ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className='App'>
        <Header />
        {this.state.loading ?
        <div><h2>Fetching local weather...</h2></div> :
        <div className='weather-app'>
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TableContainer
            categories={this.state.categories}
            weather={this.state.weather}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            searchCity={this.state.searchCity}
            fetchWeather={this.fetchWeather}
          />
          <Footer />
        </div>}
      </div>
    )
  }
}

export default App
