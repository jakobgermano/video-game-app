import './App.css';
import React from 'react';
import Games from './Games';
import LoginForm from './LoginForm';
import {useState, useEffect} from 'react'
import GameForm from './GameForm'


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

// fetchs to index in games for "all gamese"
  useEffect(()=> {
    fetch(`/games`)
    .then((r) => r.json())
    .then((g) => {
        setGames(g.games)
    })
}, [])

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

  function addGame(game) {
    setGames([...games, game])

  }

  //renders login screen if user is not logged in 
  if (!user) return <LoginForm setUser = {setUser}/>

  return (
    <div>
       
        <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
      <Games removeGames={removeGames} games = {games} user={user} setGames={setGames}/>
      <GameForm addGame={addGame} user={user}/>
    </div>
  );
}

export default App;
