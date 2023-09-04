import React from 'react';
import './Button.css';
import {PiTelevision} from 'react-icons/pi'


function Button({className, type, text, onClick, icon}) {
  return (
    <button type={type} className={className} onClick={onClick}>{icon && <PiTelevision style={{height:'1.5rem', width:'1.5rem'}}/> }{text}</button>

  )
}

export default Button;
