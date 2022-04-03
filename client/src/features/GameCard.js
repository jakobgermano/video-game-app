import React, {useState} from "react";
import EditForm from './EditForm'
import { Button } from '@mui/material'
import {Card} from "react-bootstrap";


function GameCard({editGame, game, removeGames}) {
    const [editForm, setEditForm] = useState(false)


    //fetch request to delete game
    function handleDelete(game) {
        fetch(`/games/${game.id}`, 
     {method: "DELETE"}).then(g => {
       removeGames(game)
     })
   }

//    function handleFilter(game) {
//        fetch(`/games/${game.name}`, 
//        {method: "POST"}).then(g =>{
//            filterGames(games)
//        })
//    }

    return(
        <div>
            
            <div className="card-box">
            <Card style={{ width: '20rem'}}>
            <Card.Body>
            <Card.Title>{game.style}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Name: {game.name}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Genre: {game.genre}</Card.Subtitle>
                        <Card.Subtitle className="mb-0 text-muted">Rating: {game.rating}</Card.Subtitle>
            <Button type = "submit" variant = "contained" size = "small" onClick={e => handleDelete(game)}>Delete:</Button>
            <Button type = "submit" variant = "contained" size = "small" onClick={e => setEditForm(!editForm)}>Update:</Button>
            {editForm ? <EditForm game={game} editGame={editGame}/> : null}
            </Card.Body>
            </Card>
        </div>
        </div>
        
            
    )
    
}

export default GameCard;