import React, { Component } from 'react'
import ForecastTable from './ForecastTable'
import PropTypes from 'prop-types'

class TableContainer extends Component {
  render () {
    return (
      <ForecastTable
        categories={this.props.categories}
        weather={this.props.weather}
        fetchWeather={this.props.fetchWeather}
        handleInputChange={this.props.handleInputChange}
        handleSubmit={this.props.handleSubmit}
        searchCity={this.props.searchCity}
      />
    )
  }
}

export default TableContainer

TableContainer.propTypes = {
  fetchWeather: PropTypes.func,
  searchCity: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  weather: PropTypes.array
}
