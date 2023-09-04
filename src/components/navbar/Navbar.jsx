import React, { useState } from 'react';
import './navbar.css'
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import { RiMenu4Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'


export default function Navbar() {
    const [smallDevice, setSmallDevice] = useState(false)

    function onClickList() {
        setSmallDevice(false);
    }

    function onClickButton() {
        setSmallDevice(!smallDevice);
    }


    return (
        <nav>
            <div className='navpad'>
                <header>
                    <Logo />
                </header>

                <ul className={smallDevice ? 'nav-links-small' : 'nav-links'} onClick={onClickList}>
                    <Link to="" className='the-link'>
                        <li>Home</li>
                    </Link>
                    <Link to="/Login" className='the-link'>
                        <li>Subscription</li>
                    </Link>
                    <Link to="" className='the-link'>
                        <li>About Us</li>
                    </Link>
                    <Link to="" className='the-link'>
                        <li>Contact</li>
                    </Link>
                </ul>
                <div className="reg-log-buttons">
                    <Link to="/Login">
                        <Button className='btn' text='Sign In'></Button>
                    </Link>

                    <Link to="/Register">
                        <Button className='btn_primary' text='Register'></Button>
                    </Link>
                </div>

                <button className='sm-screen-menu' onClick={onClickButton}>
                    {smallDevice ? <RxCross2 /> : <RiMenu4Line />}
                </button>

            </div>
        </nav>

    )
}
