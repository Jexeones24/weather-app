import React from 'react'

const Home = ({headers}) =>
  <div className='home'>
    <table>
      <thead>
        <tr>
          {headers.map((header, idx) => <Header key={header} name={header} />)}
        </tr>
      </thead>
      <tbody>
        <Row />
      </tbody>
    </table>
  </div>

const Row = () =>
  <tr><Description /></tr>

const Header = ({name}) =>
  <th>{name}</th>

const Description = () =>
  <td>Description</td>

export default Home
