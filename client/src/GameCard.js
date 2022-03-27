import React, {useState} from "react";
import EditForm from './EditForm'




function GameCard({game, removeGames}) {
    const [editForm, setEditForm] = useState(false)

    function handleDelete(game) {
        fetch(`/games/${game.id}`, 
     {method: "DELETE"}).then(r => {
       removeGames(game)
     })
   }

    return(
        <div>
            
            <div>
            <h2>name:{game.name}</h2>
            <br></br>
            <h2>Genre:{game.genre}</h2>
            <br></br>
            <h2>Rating:{game.rating}</h2>
            <button onClick={e => handleDelete(game)}></button>
            <button onClick={e => setEditForm(!editForm)}></button>
            {editForm ? <EditForm game={game}/> : null}
        </div>
        </div>
        
            
    )
    
}

export default GameCard;