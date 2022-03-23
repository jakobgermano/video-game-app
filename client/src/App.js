import './App.css';
import React from 'react';
import Games from './Games';
// import { useDispatch } from 'react-redux';
import LoginForm from './features/LoginForm';
// import { logoutUser } from './features/userSlice';

import {useState, useEffect} from 'react'


function App() {
  const [user, setUser] = useState(null)
  
  //keeps person signed in on refresh
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);

  //fetch request for deleting
  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => setUser(null))
  }

  //renders login screen if user is not logged in 
  if (!user) return <LoginForm setUser = {setUser}/>

  return (
    <div>
       <h1>App</h1>
       
        <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
      <Games/>
    </div>
  );
}

export default App;
