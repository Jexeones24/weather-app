import React, { Component } from 'react'
import { Link } from '../router/Link'
import { SearchBar } from './SearchBar'

export default class ForecastTable extends Component {
  render () {
    return (
      <div>
        <SearchBar
          fetchWeather={this.props.fetchWeather}
          handleInputChange={this.props.handleInputChange}
          handleSubmit={this.props.handleSubmit}
          searchCity={this.props.searchCity}
        />
        <table className='table table-bordered table-inverse'>
          <thead>
            <tr>
              {this.props.categories.map(title => <Category key={title} title={title} />)}
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map((detail, idx) => <Row key={idx} detail={detail} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

const Category = ({title}) => <th>{title}</th>

const Row = ({detail}) =>
  <tr>
    {Object.keys(detail).map((property, idx) =>
      <Description
        key={idx}
        name={detail[property]}
        property={property}
      />
    )}
  </tr>

const Description = (props) => {
  return (props.property === 'city') ? <td><Link to='/forecast'>{props.name}</Link></td> : <td>{props.name}</td>
}
