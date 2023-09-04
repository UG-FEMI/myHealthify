import React from 'react';
import Goicon from './goicon.svg'
import './Golink.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


export default function Golink() {
  const googleProvider= new GoogleAuthProvider();
  const navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) =>{
      console(result)
      navigate('/Dasboard')
    }) .catch((error) =>{
      alert(error)
    })

  } 

  return (
    <>
        <div className='golink' onClick={signInWithGoogle}>
            <div className="google-contain">
            <img src={Goicon} alt="" />
            <h5>Continue with Google</h5>
            </div>
        </div>
    </>
   
  )
};



