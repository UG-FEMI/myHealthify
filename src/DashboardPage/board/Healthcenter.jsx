import React from 'react';
import Button from '../../components/buttons/Button';
import HospLocate from '../../components/HospitalLocation/HospLocate';
import { GrKey } from 'react-icons/gr';
import { CgBee } from 'react-icons/cg';
import { FaStethoscope, FaGift } from 'react-icons/fa';
import Navbardash from '../sidenav/Navbardash';
import Sidenav from '../sidenav/Sidenav';
import Atag from '../../assets/Jpegs/a.svg';
import Btag from '../../assets/Jpegs/y.svg';
import Ctag from '../../assets/Jpegs/e.svg';
import Dtag from '../../assets/Jpegs/secretd.svg';
import { IconContext } from 'react-icons/lib';

function Healthcenter() {
  const HospLocate1 = {
    icon: <GrKey/>,
    imageURL: <img src={Btag} alt=""/>,
    headText:'Hospital',
    iconHeadtext: 'YUSJIB',
    locateText:'20km away',
  }
  const HospLocate2 = {
    icon: <CgBee/>,
    imageURL: <img className='logo2' src={Atag} alt=""/>,
    headText:'Hospital',
    iconHeadtext: 'AROMOKEYE',
    locateText:'5km away',
  }
  const HospLocate3 = {
    icon: <FaStethoscope/>,
    imageURL: <img className='logo3' src={Dtag} alt=""/>,
    headText:'SecretDee',
    iconHeadtext: 'SECRETDEE',
    locateText:'One click away',
  }
  const HospLocate4 = {
    icon: <FaGift/>,
    imageURL: <img src={Ctag} alt=""/>,
    headText:'Provision Store',
    iconHeadtext: 'EDINWO',
    locateText:'NearbyH',
  }
  
  return (
    <>
      <Navbardash />
      <Sidenav />
      <div className="board-padd">
        <div className='board-main-container'>
          <div className="container-board">
            <div className="board-text">
              <h2>Our Health Centers Around You</h2>
              <p>You can change your location above to see other options</p>
            </div>
            <div className="board-btn">
              <Button icon className='subsciption-btn' text='My Subscription' />
            </div>
          </div>
          <div className="health-center-container">
            <HospLocate headText={HospLocate1.headText} hosIcon={HospLocate1.icon} imageURL={HospLocate1.imageURL} locateText={HospLocate1.locateText} iconHeadtext={HospLocate1.iconHeadtext}/>
            <HospLocate headText={HospLocate2.headText} hosIcon={HospLocate2.icon} imageURL={HospLocate2.imageURL} locateText={HospLocate2.locateText} iconHeadtext={HospLocate2.iconHeadtext}/>
            <HospLocate headText={HospLocate3.headText} hosIcon={HospLocate3.icon} imageURL={HospLocate3.imageURL} locateText={HospLocate3.locateText} iconHeadtext={HospLocate3.iconHeadtext}/>
            <HospLocate headText={HospLocate3.headText} hosIcon={HospLocate4.icon} imageURL={HospLocate4.imageURL} locateText={HospLocate4.locateText} iconHeadtext={HospLocate4.iconHeadtext}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Healthcenter
