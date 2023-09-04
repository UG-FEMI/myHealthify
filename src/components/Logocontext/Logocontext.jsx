import React from 'react';
import Logo from '../logo/Logo';
import './Logocontext.css';

export default function Logocontext({ headText, paraText}) {
  
 
  return (
    <div>
        <div className="put-logo-auto">
            <Logo/>
        </div>
        <div className="logo-text">
            <h2>{headText}</h2>
        </div>
        <div className="logo-paragr">
            <p>{paraText}</p>
        </div>
    </div>
  )
}
