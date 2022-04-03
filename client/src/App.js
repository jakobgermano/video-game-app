import './index.css';
import React, { Fragment } from 'react';
import Games from './features/Games';
import LoginForm from './features/LoginForm';
import {useState, useEffect} from 'react'
import GameForm from './features/GameForm'
import ReviewForm from './ReviewForm'
import Reviews from './Reviews'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './features/NavBar';
import GameCounter from './features/GameCounter';
import { Button } from '@mui/material';



function App() {
  const [user, setUser] = useState(null)
  const [games, setGames] = useState([])
  const [reviews, setReviews] = useState([])

  
  
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

  function addReview(review){
    setReviews([...reviews, review])
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
      <Route exact path="Reviews" element={<Reviews reviews={reviews} setReviews={setReviews}/>}>    
      </Route>
      <Route exact path="ReviewForm" element={<ReviewForm reviews={reviews} addReview={addReview}/>}>    
      </Route>
      <Route exact path="/" element={<Games removeGames={removeGames} games = {games} user={user} setGames={setGames}/>}>
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
