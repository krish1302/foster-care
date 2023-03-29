import React, { Component } from 'react'
import './BottomNavbar.css'
import Logo from '../../assets/images/logo.jpg'

class BottomNavbar extends Component {
  render() {
    return (
      <div className='bottom-navbar'>
        <div className='bottom-navbar-item'>
            <img src={Logo} width="70%"/>
        </div>
        <div className='bottom-navbar-item'>
            <div>Foster with us</div>
            <div>Transferring to us</div>
            <div>Advice</div>
            <div>About us</div>
            <div>Talk to us</div>
            <div>FAQ</div>
        </div>
      </div>
    )
  }
}

export default BottomNavbar