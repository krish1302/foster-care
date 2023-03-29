import React, { Component } from 'react'
import './Introduction.css'
import IntroductionImage from '../../assets/images/4.jpg'

class Introduction extends Component {
  render() {
    return (
      <div className='introduction'>
        <div className='introduction-item'>Centent</div>
        <div className='introduction-item'>
            <img src={IntroductionImage} className="intro-image"/>
        </div>
      </div>
    )
  }
}

export default Introduction