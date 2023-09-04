import React from 'react';
import './Balancetrack.css'

function Balancetrack({siteTitle}) {
   
  return (
    <div className='balance-container'>
        <div className="contain-track-bal">
            <h6>{siteTitle}</h6>
            <h4>N 0.00</h4>
        </div>
    </div>
  )
}

export default Balancetrack
