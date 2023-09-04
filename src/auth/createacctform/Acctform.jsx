import React from 'react'
import { useState } from 'react';
import './acctform.css'
import Logocontext from '../../components/Logocontext/Logocontext';
import Button from '../../components/buttons/Button';
import { Link, useNavigate } from 'react-router-dom';
import Previousstate from '../../components/Pristate/Previousstate';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Gap from '../../components/gap/Gap';
import Golink from '../../components/Golink/Golink';


export default function Acctform() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // const [error, setError] = useState('')
    const navigate = useNavigate();



    
    const headText = 'Create Your Account'
    const paraText = 'Complete the below form to create your account.'

    const SubmitHandler = (formCard) =>{
        console.log(formCard);
    };

    function onChangeFirstname(e) {
        setFirstname(e.target.value);
    }

    function onChangeLastname(e) {
        setLastname(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
    }

    function onChangePhone(e) {
        setPhone(e.target.value);
    }
    
   
      


    const onformSubmit = async (e) => {
        e.preventDefault();

        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setPhone('');

        const formCard = {
            firstname,
            lastname,
            email,
            password,
            phone
        };
        SubmitHandler(formCard);
       
       
       

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                alert('Sucess Registration')
                navigate('/Login')
            })
            .catch((error) => {
                console.log(error);
               

            });
    }

    return (
            <div className="boxflex">
                <div className="backgrd">

                </div>
                <div className="pad-div" >
                    <div className="transparent" >
                        <div className='formdiv'>
                            <Logocontext headText={headText} paraText={paraText} />
                            <form onSubmit={onformSubmit}  className='account-form'>
                                <div>
                                    <label htmlFor="FirstName" className='lab'>First Name
                                        <input
                                            type="text"
                                            value={firstname}
                                            id="FirstName"
                                            onChange={onChangeFirstname}
                                            placeholder='Enter First Name'
                                            required />
                                    </label>
                                    <label htmlFor="LastName" className='lab'>Last Name
                                        <input
                                            type="text"
                                            value={lastname}
                                            id="LastName"
                                            onChange={onChangeLastname}
                                            placeholder='Enter Last Name'
                                            required />
                                    </label>
                                </div>

                                <Gap size={15} />
                                <div>
                                    <label htmlFor="Email" className='lab'>Email
                                        <input
                                            type="email"
                                            id="Email"
                                            value={email}
                                            onChange={onChangeEmail}
                                            placeholder='Enter email'
                                            required />
                                    </label>
                                    <label htmlFor="Password" className='lab'>Password
                                        <input
                                            type="password"
                                            id="Password"
                                            value={password}
                                            onChange={onChangePassword}
                                            placeholder='Enter Password'
                                            required />
                                    </label>
                                </div>
                                <Gap size={15} />
                                <div>
                                    <label htmlFor="Country" className='lab'>Country
                                        <select className='select' id="country" required >
                                            <option>Nigeria</option>
                                        </select>
                                    </label>


                                    <label htmlFor="Phone" className='lab-phone'>Phone No.
                                        <input
                                            type="tel"
                                            id="Phone"
                                            value={phone}
                                            onChange={onChangePhone}
                                            placeholder='Tel:no'
                                            required />
                                    </label>

                                </div>
                                <Gap size={10} />
                                <div className="register-btn">
                                    <p>I'm registered already? <Link to="/Login">Login</Link></p>
                                    <Button className='btn_primary'
                                        type='submit'
                                        text='Register'
                                    />
                                </div>
                                <Golink />
                            </form>
                        </div>
                        <Previousstate />
                    </div>
                </div>
            </div>
    )
}
