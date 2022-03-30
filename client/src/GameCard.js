import React, {useState} from "react";
import EditForm from './EditForm'
import { Button } from '@mui/material'


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
            
            <div className="GameCard">
            {/* <Button type = "submit" variant = "contained" size = "small" onClick={e => handleFilter(game)}>Filter Games:</Button> */}
            <h2>name:{game.name}</h2>
            <br></br>
            <h2>Genre:{game.genre}</h2>
            <br></br>
            <h2>Rating:{game.rating}</h2>
            <Button type = "submit" variant = "contained" size = "small" onClick={e => handleDelete(game)}>Delete:</Button>
            <Button type = "submit" variant = "contained" size = "small" onClick={e => setEditForm(!editForm)}>Update:</Button>
            {editForm ? <EditForm game={game} editGame={editGame}/> : null}
        </div>
        </div>
        
            
    )
    
}

export default GameCard;