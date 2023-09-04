import React from 'react';
import { Link } from 'react-router-dom';
import './hosplocate.css'


function HospLocate({ headText, hosIcon, iconHeadtext, imageURL, locateText }) {
    return (
        <div className="div-div-hosp">
            <div className="contain-hospital">
                <div className="icon-name-tag-head">
                    <div className="the-icon-tag-contain">
                        {hosIcon}
                    </div>

                  

                    <h4>{headText}</h4>
                </div>
                <div className="icon-logo">
                    {imageURL}
                </div>
                <div className="icon-header-text">
                    <h3>{iconHeadtext}</h3>
                </div>
            </div>
            
            <hr className='health-hr' />
            <div className="km-link">
                <h6>{locateText}</h6>
                <Link>
                    GO
                </Link>
            </div>
        </div>
    )
}

export default HospLocate
