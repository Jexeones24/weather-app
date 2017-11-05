import React, { Component } from 'react'
import './App.css'
import { Home, Forecast, Footer } from './components/weather'

class App extends Component {
  state = {
    titles: ['CITY', 'COUNTRY', 'AVG. TEMP.', 'HIGH', 'LOW'],
    // details: [
    //   {
    //     'city': '',
    //     'country': '',
    //     'avgTemp': null,
    //     'high': null,
    //     'low': null
    //   }
    // ]
    details: []
  }

  componentDidMount () {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=detroitid=524901&APPID=bf8ca4717bdd97a9ba7800e9f63c7b72')
      .then(resp => resp.json())
      .then(data => {
        let details = this.state.details
        details.city = data.name
        details.country = data.sys.country
        details.avgTemp = data.main.temp
        details.high = data.main.temp_max
        details.low = data.main.temp_min
        this.setState({ details: [...this.state.details, details] }, () => { console.log('details:', this.state.details, 'titles:', this.state.titles) })
      })
    }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src='' alt=''/>
          <h2>WEATHER APP</h2>
        </div>
        <div className='weather-app'>
          <Home titles={this.state.titles} details={this.state.details} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
