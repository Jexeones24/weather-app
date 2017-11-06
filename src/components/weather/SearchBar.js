import React from 'react'
import PropTypes from 'prop-types'

export const SearchBar = (props) =>
  <div className='card'>
    <div className='card-block'>
      <form onSubmit={props.submitHandler} className='form-inline'>
        <div className='form-group'>
          <input
            className='form-control mx-sm-3'
            type='text'
            placeholder='enter a city...'
            value={props.searchCity}
            onChange={props.handleInputChange}
          />
          <small className='text-muted'>
            Must be a valid US city.
          </small>
          <button type='submit' className='btn btn-primary btn-sm'>Submit</button>
        </div>
      </form>
    </div>
  </div>

SearchBar.propTypes = {
  searchCity: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
}
