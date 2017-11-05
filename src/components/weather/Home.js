import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titles: ['CITY', 'COUNTRY', 'AVG. TEMP.', 'HIGH', 'LOW'],
      details: []
    }
  }

  componentDidMount () {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=detroitid=524901&APPID=bf8ca4717bdd97a9ba7800e9f63c7b72')
      .then(resp => resp.json())
      .then(data => {
        let details = this.state.details
        details.city = data.name
        details.country = data.sys.country
        details.avgTemp = data.main.temp
        details.high = data.main.temp_max
        details.low = data.main.temp_min
        this.setState({ details }, () => { console.log('details:', this.state.details, 'titles:', this.state.titles) })
      })
    }

    render(){
      return (
        <div className='home'>
          <table className='table'>
            <thead>
              <tr>
                {this.state.titles.map(title => <Header key={title} title={title} />)}
              </tr>
            </thead>
            <tbody>
              {this.state.details.map((detail, idx) => <Row key={idx} detail={detail} />)}
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
