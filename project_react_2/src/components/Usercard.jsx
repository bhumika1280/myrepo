import React from 'react'
import './Usercard.css';
import whiteheartt from '../assets/whiteheartt.jpeg'


const Usercard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>Love babbarr</p>
        <img id='user-image'  src={whiteheartt} alt="love" />
        <p id='user-description'>description of user card by love babbar</p>
        
    </div>
  )
}

export default Usercard