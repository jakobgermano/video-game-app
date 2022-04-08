import './index.css';
import React, { Fragment } from 'react';
import Games from './features/Games';
import LoginForm from './features/LoginForm';
import {useState, useEffect} from 'react'
import GameForm from './features/GameForm'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './features/NavBar';
import GameCounter from './features/GameCounter';
// import GameDetail from './features/GameDetail'
import { Button } from '@mui/material';



function App() {
  const [user, setUser] = useState(null)
  const [games, setGames] = useState([])
  

  
  
  //keeps person signed in on refresh
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);



  //fetch request for loging out 
  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => setUser(null))
  }

  //function for removing games 
  function removeGames(game) {
    setGames((games) => games.filter(g => g.id !== game.id))
  }

  

//function for adding games
  function addGame(game) {
    setGames([...games, game])

  }

  //renders login screen if user is not logged in 
  if (!user) return <LoginForm setUser = {setUser}/>

  return (
    <div>
      <Button id = "logout" onClick = {handleLogoutClick} variant ="contained" size = "medium" color="error">Logout</Button>
      <Router>
      <Fragment>
      <NavBar/>
      <Routes>
        {/* <Route exact path="/GameDetail" element={<GameDetail games={games}/>}>
        </Route> */}
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
