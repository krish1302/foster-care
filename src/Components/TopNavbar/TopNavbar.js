import React, { Component } from 'react'
import './TopNavbar.css'
import Phone from '../../assets/images/phone-solid.svg'

export class TopNavbar extends Component {
  render() {
    return (
      <div className='top-navbar'>
        <div className='item'>Information</div>
        <div className='item'>
          <div><i className='fas fa-envelope'></i>tazim@caff.org.uk</div>
          <div><img src={Phone} width="15px"></img> Phone</div>
        </div>
      </div>
    )
  }
}

export default TopNavbar