import React from "react";
import {useSelector, useDipsatch} from "react-redux";


function GameCard({game, error, isLoading, isSuccess}) {
    return(
        <div>
            {isLoading && <h2>...loading</h2>}
            {error && <h2>Something went wrong</h2>}
            {isSuccess && 
            <div>
            {game.name}
            {game.genre}
            {game.rating}
        </div>}
        </div>
        
            
    )
    
}

export default GameCard;