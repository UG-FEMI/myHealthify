import React from 'react'
import './Container.css'
import Navbar from '../components/navbar/Navbar'
import Flexcontain from './Flexcontain'
import Button from '../components/buttons/Button'
import Footer from '../components/footer/Footer'
import { useState } from 'react'



function Container() {
  const [ subemail, setSubemail] = useState('');

  function onEmailChange(e) {
    setSubemail(e.target.value)
  }

  const submitForm = (e) =>{
    e.preventDefault();
    setSubemail('');
   alert(`Hey ${subemail} Thanks for Subscribing`);
  }


  return (
    <>
      <Navbar />
      <div className='Container'>
        <Flexcontain />
        <div className="subscribe-container">
          <form className="subscribe" onSubmit={submitForm}>
            <h2>Subscribe to our newletter</h2>
            <input  
            type="email" 
            id='email' 
            onChange={onEmailChange}
            value={subemail} 
            placeholder='Email' 
            />

            <div className="sub-btn-contain">
            <Button text='Subscribe' type='Submit' className='btn_primary'/>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Container
