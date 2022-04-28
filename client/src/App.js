import './App.css';
import React, { Fragment } from 'react';
import Games from './features/Games';
import LoginForm from './features/LoginForm';
import {useState, useEffect} from 'react'
import GameForm from './features/GameForm'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './features/NavBar';
import GameCounter from './features/GameCounter';
import { Button } from '@mui/material';



function App() {
  const [user, setUser] = useState(null)
  const [games, setGames] = useState([])
  

  
  
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);



  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => setUser(null))
  }

  function removeGames(game) {
    setGames((games) => games.filter(g => g.id !== game.id))
  }

  


  function addGame(game) {
    setGames([...games, game])

  }

 
  if (!user) return <LoginForm setUser = {setUser}/>

  return (
    <div>
      <Button id = "logout" onClick = {handleLogoutClick} variant ="contained" size = "medium" color="error">Logout</Button>
      <Router>
      <Fragment>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Games removeGames={removeGames} games={games} user={user} setGames={setGames}/>}>
      </Route>
      <Route exact path="/GameForm" element={<GameForm addGame={addGame} user={user}/>}>
      </Route>
      <Route exact path="/GameCounter" element={<GameCounter/>}>
      </Route>
      </Routes>
      </Fragment>
      </Router>
    </div>
  );
}

export default App;
