import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './features/LoginForm';
import { loginUser, logoutUser } from './features/userSlice';


function App() {
  const userState = useSelector((state) => state.user.username)
  const dispatch = useDispatch()

  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => dispatch(logoutUser))
  }

  return (
    <div>
       <h1>App</h1>
        <LoginForm />
        <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
    </div>
  );
}

export default App;
