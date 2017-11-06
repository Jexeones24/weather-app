import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { searchCity: '' }
  // add autocomplete - http://hackingbeauty.com/create-a-reactjs-component-part1/

  handleTextChange = (event) => {
    this.setState({ searchCity: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getSearchCity(this.state.searchCity)
    this.setState({ searchCity: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='search city...'
            value={this.state.searchCity}
            onChange={this.handleTextChange}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
