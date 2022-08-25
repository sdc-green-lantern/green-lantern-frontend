import React from 'react';
import comparison  from './Comparison.module.css'
import Card from './Card/Card.jsx'

class Comparison extends React.Component {
  render () {
    return (
      <div >
        <div className={comparison.header}>Hello Comparison</div>
        <Card />
      </div>
    )
  }
}

export default Comparison;