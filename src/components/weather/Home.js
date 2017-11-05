import React, { Component } from 'react'

export class Home extends Component {
  state = {
    city: ''
  }
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    let city = event.target.value
    this.setState({ city }, () => {console.log('handling change:', this.state.city)
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getSearchCity(this.state.city)
  }

  render () {
    return (
      <div className='home'>
        <form onSubmit={this.handleSubmit}>
          <label>City</label>
          <input
            type='text'
            value={this.state.city}
            onChange={this.handleChange}
          />
          <input
            type='submit'
          />
        </form>
        <table className='table'>
          <thead>
            <tr>
              {this.props.titles.map(title => <Header key={title} title={title} />)}
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

const Header = ({title}) =>
  <th>{title}</th>

const Row = ({detail}) =>
  <tr>
    {Object.keys(detail).map((property, idx) =>
      <Description
        key={detail[property]}
        name={detail[property]}
      />
    )}
  </tr>

const Description = ({name}) =>
  <td>{name}</td>
