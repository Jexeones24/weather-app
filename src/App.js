import React, { Component } from 'react'
import './App.css'
import { Home, Forecast, Footer } from './components/weather'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src="" alt=""/>
          <h2>WEATHER APP</h2>
        </div>
        <div className='weather-app'>
          <Home />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
