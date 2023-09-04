import React from 'react';
import Navbardash from '../sidenav/Navbardash';
import './Dashboard.css'
import Sidenav from '../sidenav/Sidenav';
import Boards from '../board/Boards';









function Dashboard() {


  
  return (

    <>
      <div className='dash-board'>
        <Navbardash />
        <div className="sidenav-container-content">
          <Sidenav />
         
          <Boards/>
         
        </div>
      </div>

    </>
  )
}

export default Dashboard
