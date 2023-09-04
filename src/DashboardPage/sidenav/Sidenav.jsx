import React, { useState } from 'react';
import { LiaGreaterThanSolid } from 'react-icons/lia'
import { BsFillGridFill, BsTrainFreightFront } from 'react-icons/bs'
import { MdOutlineHealthAndSafety, MdSupportAgent } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import Gap from '../../components/gap/Gap'
import {BiLogOut} from 'react-icons/bi';
import './sidenavdash.css'

function Sidenav() {

    const [collapseNav, setCollapseNav] = useState(true);


    const buttonClick = (e) => {
        setCollapseNav(!collapseNav);
    }


    return (
        <aside className={`sidebar-nav ${collapseNav ? 'sidebar-nav-active' : ''}`}>
            <div className="toggle-btn">
                <div className="tog-bttn" onClick={buttonClick}>
                    <LiaGreaterThanSolid style={{ paddingLeft: '7px' }} />
                </div>
            </div>
            <NavLink to='/Dashboard' className='navv-link'>
                <div className='icon-class'>
                    <BsFillGridFill style={{ height: '1.9rem', width: '1.8rem', marginLeft: '-2px', marginTop: '-2px', color: '#FFB573' }} />
                    <Gap size={15} />
                    <h4>Dashboard</h4>
                </div>
            </NavLink>

            <Gap size={30} />

            <NavLink to='/Health-center' className='navv-link'>
                <div className='icon-class'>
                    <MdOutlineHealthAndSafety style={{ height: '2rem', width: '1.8rem', marginLeft: '-2px', marginTop: '-2px', color: '#FFB573' }} />
                    <Gap size={15} />
                    <h4>Health Center</h4>
                </div>
            </NavLink>

            <Gap size={30} />

            <NavLink to='/Subscription' className='navv-link'>
                <div className='icon-class'>
                    <BsTrainFreightFront style={{ height: '1.7rem', width: '1.8rem', marginLeft: '-2px', marginTop: '-2px', color: '#FFB573' }} />
                    <Gap size={15} />
                    <h4>Subscription</h4>
                </div>
            </NavLink>

            <Gap size={30} />

            <NavLink to='/Support' className='navv-link'>
                <div className='icon-class'>
                    <MdSupportAgent style={{ height: '2rem', width: '1.8rem', marginLeft: '-2px', marginTop: '-2px', color: '#FFB573' }} />
                    <Gap size={15} />
                    <h4>Support</h4>
                </div>
            </NavLink>




            <div className="log-contain">
                <BiLogOut style={{ height: '2rem', width: '1.8rem', marginLeft: '-2px', marginTop: '-2px', color: '#FFB573' }}/>
                <h4>Logout</h4>
            </div>

        </aside>

    )
}

export default Sidenav
