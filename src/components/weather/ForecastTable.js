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
          submitHandler={this.props.submitHandler}
          searchCity={this.props.searchCity}
        />
        <table className='table table-bordered table-inverse'>
          <thead>
            <tr>
              {this.props.categories.map(title => <Category key={title} title={title} />)}
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map((detail, idx) =>
              <Row
                key={idx}
                detail={detail}
                renderFiveDayForecast={this.props.renderFiveDayForecast}
              />)}
          </tbody>
        </table>
      </div>
    )
  }
}

const Category = ({title}) => <th><h3>{title}</h3></th>

const Row = ({detail, renderFiveDayForecast}) =>
  <tr>
    {Object.keys(detail).map((property, idx) =>
      <Description
        key={idx}
        name={detail[property]}
        property={property}
        renderFiveDayForecast={renderFiveDayForecast}
      />
    )}
  </tr>

const Description = (props) => {
  return (props.property === 'city') ? <td><Link to='/forecast'><h4 onClick={props.renderFiveDayForecast}>{props.name}</h4></Link></td> : <td><h4>{props.name}</h4></td>
}
