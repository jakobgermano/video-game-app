import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './features/LoginForm';
import { loginUser, logoutUser } from './features/userSlice';


function App() {
  const userState = useSelector((state) => state.user.username)
  const dispatch = useDispatch()

  

  return (
    <div>
      
      
    </div>
  );
}

export default App;
