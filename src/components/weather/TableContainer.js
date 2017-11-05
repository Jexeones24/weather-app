import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ForecastTable from './ForecastTable'

class TableContainer extends Component {
  state = {
    searchCity: ''
  }

  constructor(props) {
    super(props)
  }

  getSearchCity = (searchCity) => {
    this.setState({ searchCity }, () => {console.log('search city is:', this.state.searchCity)
    })
  }

  render () {
    return (
      <div>
        <SearchBar
          getSearchCity={this.getSearchCity}
        />
        <ForecastTable
          categories={this.props.categories}
          weather={this.props.weather}
        />
      </div>
    )
  }
}

export default TableContainer
