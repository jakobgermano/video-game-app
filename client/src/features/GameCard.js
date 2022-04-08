import React, {useState} from "react";
import EditForm from './EditForm'
import { Button } from '@mui/material'
import {Card} from "react-bootstrap";
import ShowGame from './ShowGame'




function GameCard({editGame, game, setGames, removeGames}) {
    const [editForm, setEditForm] = useState(false)
    const [showGame, setShowGame] = useState("")
    
    


    //fetch request to delete game
    function handleDelete(game) {
        fetch(`/games/${game.id}`, 
     {method: "DELETE"}).then(g => {
       removeGames(game)
     })
   }

   
   function filterGame(game) {
    setGames((games) => games.filter(g => g.id === game.id))
  }




    return(
        <div>
            
            <div className="card-box">
            <Card style={{ width: '20rem'}}>
            <Card.Body>
            <Card.Title>{game.style}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Name: {game.name}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Genre: {game.genre}</Card.Subtitle>
                        <Card.Subtitle className="mb-0 text-muted">Rating: {game.rating}</Card.Subtitle>
            <Button type = "submit" variant = "contained" size = "small" onClick={e => setShowGame(!showGame)}>Show:</Button>
            <Button type = "submit" variant = "contained" size = "small" onClick={e => handleDelete(game)}>Delete:</Button>
            <Button type = "submit" variant = "contained" size = "small" onClick={e => setEditForm(!editForm)}>Update:</Button>
            {editForm ? <EditForm game={game} editGame={editGame}/> : null}
            {showGame ? <ShowGame game={game} filterGame={filterGame} setGames={setGames}/> : null}
            </Card.Body>
            </Card>
        </div>
        </div>
        
            
    )
    
}

export default GameCard;