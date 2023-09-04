import React from 'react';
import { useState } from 'react';
import './Login.css'
import Gap from '../../components/gap/Gap';
import Golink from '../../components/Golink/Golink';
import { Link, useNavigate } from 'react-router-dom';
import Previousstate from '../../components/Pristate/Previousstate';
import Logocontext from '../../components/Logocontext/Logocontext';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';




const headText = 'Welcome Back Fam'
const paraText = 'We hope you are good all we care about is your health.'


export default function Login({ formaddHandler }) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
 const navigate = useNavigate();
 
  


  function onChangeEmail(e) {
    setEmail(e.target.value);
    setButtonDisabled(e.target.value === '' || password === '');
  };


  function onChangePassword(e) {
    setPassword(e.target.value);
    setButtonDisabled(e.target.value === '' || email === '');

  };




  const onformSubmit = async (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');

    const formData = {
      email,
      password,
    };
    formaddHandler(formData)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate('/Dashboard')
        
      })
      .catch((error) => {
        console.log(error)
      });
  }


  return (
    <div className="boxflex">
      <div className="backgrd">

      </div>
      <div className="pad-div">
        <div className="transparent">
          <div className='formdiv'>
            <Logocontext headText={headText} paraText={paraText} />
            <form className='loginform' onSubmit={onformSubmit}>
              <div className='email-pass-log'>
                <label htmlFor="Email">Email
                  <input type="email" id="Email"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder='Enter email' />
                </label>
                <Gap size={25} />
                <label htmlFor="Password">Password
                  <input type="password" id="Password"
                    value={password}
                    onChange={onChangePassword}
                    placeholder='Enter Password' />
                </label>
              </div>
              <div className="register-btn">
                <p>I'm not a member yet? <Link to="/Register">Register</Link></p>
                <button type='submit' className={buttonDisabled ? 'disable-btn' : 'disable-btn-active'} text='Continue' disabled={buttonDisabled}>
                  Continue
                </button>
              </div>
            </form>
            <Golink />
          </div>
          <Previousstate />
        </div>
      </div>
    </div>
  )
}
