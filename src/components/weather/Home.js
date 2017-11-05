import React, { Component } from 'react'

export class Home extends Component {
  render () {
    return (
      <div className='home'>
        <table className='table'>
          <thead>
            <tr>
              {this.props.titles.map(title => <Header key={title} title={title} />)}
            </tr>
          </thead>
          <tbody>
            {this.props.details.map((detail, idx) => <Row key={idx} detail={detail} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

const Header = ({title}) =>
  <th>{title}</th>

const Row = ({detail}) =>
  <tr>
    {Object.keys(detail).map((property, idx) => <Description key={detail[property]} name={detail[property]} />)}
  </tr>

const Description = ({name}) =>
  <td>{name}</td>
