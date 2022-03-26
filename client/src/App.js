import './App.css';
import React from 'react';
import Games from './Games';
import LoginForm from './features/LoginForm';
import {useState, useEffect} from 'react'


function App() {
  const [user, setUser] = useState(null)
  const [games, setGames] = ([])
  
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

  function removeGames(game) {
    setGames((games) => games.filter(g => g.id !== game.id))
  }

  //renders login screen if user is not logged in 
  if (!user) return <LoginForm setUser = {setUser}/>

  return (
    <div>
       
        <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
      <Games removeGames={removeGames} games = {games} user={user} setGames={setGames}/>
    </div>
  );
}

export default App;
