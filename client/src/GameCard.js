import React, {useState} from "react";
import EditForm from './features/EditForm'




function GameCard({game, error, isLoading, isSuccess}) {
    const [editForm, setEditForm] = useState(false)

//     function handleDelete(game) {
//         fetch(`/games/${games.id}`, 
//      {method: "DELETE"}).then(r => {
//        removeGame(game)
//      })
//    }

    return(
        <div>
            {isLoading && <h2>...loading</h2>}
            {error && <h2>Something went wrong</h2>}
            {isSuccess && 
            <div>
            <h2>name:{game.name}</h2>
            <br></br>
            <h2>Genre:{game.genre}</h2>
            <br></br>
            <h2>Rating:{game.rating}</h2>
            <button onClick={e => handleDelete(game)}></button>
            <button onClick={e => setEditForm(!editForm)}></button>
            {editForm ? <EditForm game={game}/> : null}
        </div>}
        </div>
        
            
    )
    
}

export default GameCard;