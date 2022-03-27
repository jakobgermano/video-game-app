import React, {useState} from "react";
import EditForm from './EditForm'




function GameCard({games, game, removeGames, setGames}) {
    const [editForm, setEditForm] = useState(false)

    function editGame(game) {
        const edited = games.map(g => {
            if (game.id === g.id) {
                return game
            }
            return g
        })
        setGames(edited)
       
    }



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
            <button onClick={e => handleDelete(game)}>Delete:</button>
            <button onClick={e => setEditForm(!editForm)}>Update:</button>
            {editForm ? <EditForm game={game} editGame={editGame}/> : null}
        </div>
        </div>
        
            
    )
    
}

export default GameCard;