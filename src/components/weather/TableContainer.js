import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ForecastTable from './ForecastTable'
import PropTypes from 'prop-types'

class TableContainer extends Component {
  render () {
    return (
      <div>
        <SearchBar
          getSearchCity={this.props.getSearchCity}
          searchCity={this.props.searchCity}
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

TableContainer.propTypes = {
  getSearchCity: PropTypes.func,
  searchCity: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  weather: PropTypes.array
}
