import React, { Component } from 'react'
import './App.css'
import { Forecast, Footer, Header } from './components/weather'
import TableContainer from './components/weather/TableContainer'
import { loadLocalWeather, loadWeather, loadFiveDayForecast } from './lib/weatherService'

class App extends Component {
  state = {
    loading: true,
    categories: ['CITY', 'COUNTRY', 'AVG. TEMP.', 'HIGH', 'LOW'],
    weather: [],
    data: null,
    searchCity: '',
    errorMessage: '',
    fiveDayForecastVisible: false
  }

  componentDidMount () {
    this.getGeoLocation()
  }

  // on refactor - helper function to create weather object frmom fetch
    // build your first production quality react application
  getGeoLocation () {
    let self = this
    if (!navigator.geolocation) {
      self.setState({ errorMessage: 'Geolocation unavailable' })
      return;
    }
    navigator.geolocation.getCurrentPosition(success, error)
    function success (position) {
      let lat  = position.coords.latitude
      let lon = position.coords.longitude
      loadLocalWeather(lat, lon)
        .then((data) => {
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
      console.log('Geolocation unavailable')
    }
  }

  fetchWeather = (searchCity) => {
    this.setState({ searchCity }, () => {
      loadWeather(searchCity)
      .then(data => {
        console.log(data === 'city does not exist')
        if (data === 'city does not exist') {
          this.setState({ errorMessage: 'city does not exist' })
        } else {
          let newWeatherData = {}
          newWeatherData.city = data.name
          newWeatherData.country = data.sys.country
          newWeatherData.avgTemp = data.main.temp
          newWeatherData.high = data.main.temp_max
          newWeatherData.low = data.main.temp_min
          this.setState({ data }, () => {console.log(this.state.data)})
        }
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

  // disables input field after
  handleInvalidInput = (event) => {
    this.setState({
      errorMessage: 'City must not contain numbers'
    })
  }

  renderFiveDayForecast = (props) => {
    console.log(props)
    let city = props.name
    let country = props.country
    this.setState({ fiveDayForecastVisible: true }, () => {
      loadFiveDayForecast(city, country)
      .then(data => {console.log(data)})
    })
  }

  render () {
    const submitHandler = this.state.searchCity ? this.handleSubmit : this.handleEmptySubmit

    const inputHandler = /\d/.test(this.state.searchCity) === true ? this.handleInvalidInput : this.handleInputChange

    const isLoading = this.state.loading && <div className='fetch-msg'><h2>Fetching local weather...</h2></div>

    const displayErrors = this.state.errorMessage && <span className='alert alert-danger'>{this.state.errorMessage}</span>

    return (
      <div className='App'>
        <Header />
        <div className='container'>
          {isLoading}
          {displayErrors}

          <TableContainer
            categories={this.state.categories}
            weather={this.state.weather}
            handleInputChange={inputHandler}
            submitHandler={submitHandler}
            searchCity={this.state.searchCity}
            fetchWeather={this.fetchWeather}
            renderFiveDayForecast={this.renderFiveDayForecast}
          />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
