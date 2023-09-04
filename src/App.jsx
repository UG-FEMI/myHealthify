import Boards from './DashboardPage/board/Boards';
import Healthcenter from './DashboardPage/board/Healthcenter';
import Subscription from './DashboardPage/board/Subscription';
import Support from './DashboardPage/board/Support';
import Dashboard from './DashboardPage/dashboard/Dashboard';
import Login from './auth/Loginpage/Login';
import './assets/styles/App.css';
// import { AuthcontextProvider } from './context/Authcontext';
import Container from './containers/Landingpage';

import Flexcontain from './containers/Flexcontain';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Acctform from './auth/createacctform/Acctform';
import React, { useEffect, useState} from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import ProtectedRoute from './ProtectedRoutes';


const formaddHandler = (formData) => {
  console.log(formData)
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (user) =>{
             console.log(user)
             setUser(user)
         })
         return() =>{
             unsubscribe();
         }
     },[])

  return (

    <BrowserRouter className="App">
      
        <Routes>
          <Route path='/' element={<Container><Flexcontain /></Container>} />
          <Route path='/Register' element={<Acctform />} />
          <Route path='/Login' element={<Login formaddHandler={formaddHandler} />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Boards' element={<Boards />} />
          <Route path='/Health-center' element={<Healthcenter />} />
          <Route path='/Subscription' element={<Subscription />} />
          <Route path='/Support' element={<Support />} />

        </Routes>
    

    </BrowserRouter>

  );
}

export default App;
