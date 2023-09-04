import React from 'react';
import Refericon from '../dashicon/refericon.png';
import {CgProfile} from 'react-icons/cg';
import Notifyicon from '../dashicon/notifyicon.png';
import Calendaricon from '../dashicon/calendericon.png';
import Locationicon from '../dashicon/location.png';
import Logo from '../../components/logo/Logo';
import { useState } from 'react';
// import { RxCross2 } from 'react-icons/rx';
import './sidenavdash.css'


function Navbardash({firstname, lastname}) {

//    const getInitials = (firstname, lastname) => {
//         const initial = `${firstname.slice(0, 1)} ${lastname.slice(0,1)}`;
//         return initial();
//    }

    const [smallDevice, setSmallDevice] = useState(false)

    function onClickList() {
        setSmallDevice(true);
    }

    function onClickButton() {
        setSmallDevice(!smallDevice);
    }



    return (
        <div className='main-nav-container'>
            <div className="dashnav-pad">
                <Logo />
                <nav className={smallDevice ? 'dash-navbar-small' : 'dash-navbar'} onClick={onClickList}>
                    <div className="location-div">
                        <hr className='dash-hr' />
                        <div className="location-icon">
                            <img src={Locationicon} alt="" />
                        </div>
                        <div className="location-text">
                            <h6>Current State</h6>
                            <select className='dash-nav'>
                                <option value="">Lagos State</option>
                                <option value="">Kwara State </option>
                                <option value="">Bayelsa State</option>
                                <option value="">Anambra State</option>
                            </select>
                        </div>
                    </div>
                   
                    

                    <div className="refer-bar">
                        <div className="the-refer">
                        <img src={Refericon} alt="" />
                        <a href="">Refer a friend</a>
                        </div>
                        <hr className='dash-hr' />
                    </div>

                    
                   
                </nav>
              


                <div className="proicon">
                    <img src={Notifyicon} alt="" />

                    <img src={Calendaricon} alt="" />
                    <div className="profile" onClick={onClickButton}>
                        <CgProfile style={{ width: '100%', height: '100%', position:'absolute', top:'0', left:'0', color: '#ffffff'}}/>
                        {/* <span>{getInitials(firstname, lastname)}</span> */}
                    </div>
                </div>





                {/* <button className='sm-screen-menu' onClick={onClickButton}>
                    {smallDevice ? <RxCross2 /> : <RiMenu4Line />}
                </button> */}

            </div>
        </div>
    )
}

export default Navbardash
