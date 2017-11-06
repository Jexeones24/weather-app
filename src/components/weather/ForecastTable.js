import React, { Component } from 'react'

export default class ForecastTable extends Component {
  render () {
    return (
      <div>
        <table className='table'>
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
  return (props.property === 'city') ? <td><a href="/forecast">{props.name}</a></td> : <td>{props.name}</td>
}
