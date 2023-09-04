import React from 'react'
import Button from '../buttons/Button';
import {BsChatRight} from 'react-icons/bs'
import './Previousstate.css'
import { useNavigate } from 'react-router-dom'

function Previousstate() {
   const navigate = useNavigate();

   const buttonClick = () =>{
    navigate(-1)
   };
  return (
    <>
        <div className='prev-contain'>
            <div className="for-the-prev-btn">
                <Button type='submit' className='bttn' text='Back' onClick={buttonClick}></Button>
            </div>
            <div className="the-chat-service-contain">
                <BsChatRight id='priv-img-icon'/>
            </div>
        </div>
    </>
   
  )
}

export default Previousstate
