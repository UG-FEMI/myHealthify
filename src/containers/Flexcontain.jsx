import React from 'react';
import './Container.css';
import Button from '../components/buttons/Button';
import { Link } from 'react-router-dom';

export default function Flexcontain() {
  return (
    <div className='Flexcontain'>
        <div className="flexcontain-text">
            <div className="flextext">
                <h2>Let your savings save your health.</h2>
                <p>We offer you a platform that helps you save a token monthly to improve your health while also connecting you with the best health services at any time you want.</p>
                <Link to='/Register'>
                  <Button className='btn_primary' text='Get Started'></Button>
                </Link> 
            </div>
        </div>
      <div className="flexcontain-image">
        <img src="./images/imaage1.svg" alt="" />
      </div>
    </div>
  )
}
