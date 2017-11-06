import React from 'react'
import PropTypes from 'prop-types'

export const SearchBar = (props) =>
  <div>
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        placeholder='enter a city...'
        value={props.searchCity}
        onChange={props.handleInputChange}
      />
      <input type='submit' />
    </form>
  </div>

SearchBar.propTypes = {
  searchCity: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
