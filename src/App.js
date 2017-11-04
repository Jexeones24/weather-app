import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Forecast from './Forecast'

const NavBar = () =>
  <nav>
    <NavLink activeClassName='active' to='/'>Home</NavLink>
    <NavLink activeClassName='active' to='/forecast'>5-day Forecast</NavLink>
  </nav>

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      headers: ['CITY', 'STATE', 'AVG. TEMP.', 'HIGH', 'LOW'],
      rows: ['Brooklyn', 'NY', '65', '66', '64']
    }
  }

  renderHome = () =>
    <Home
      headers={this.state.headers}
      rows={this.state.rows}
    />

  render () {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/forecast' render={Forecast} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
