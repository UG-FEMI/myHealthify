import React from 'react'
import './footer.css'
import Logo from '../logo/Logo'

function Footer() {
    return (
        <div className='footer-container' >
            <div className="foot-contain" >
                <div className="footer-logo">
                    <Logo />
                </div>
                <ul className='footer-list'>
                    <li>Terms of Service</li>
                    <li>Sitemap</li>
                    <li>Privacy Police</li>
                    <li>Join Us</li>
                </ul>
                <div className="copright">
                    <p>MyHealthify <span></span>2023. All RIghts Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
