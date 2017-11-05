import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
  }

  handleTextChange = () => this.props.getSearchCity(this.refs.searchCity.value)

  render () {
    const searchCity = this.props.searchCity
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='search city...'
            value={searchCity}
            ref='searchCity'
            onChange={this.handleTextChange}
          />
        </form>
      </div>
    )
  }
}
