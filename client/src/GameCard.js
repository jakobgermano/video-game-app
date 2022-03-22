import react from "react";
import {useSelector, useDipsatch} from "react-redux";

function GameCard({game}) {
    return(
        <div>
            {game.name}
            {game.genre}
            {game.rating}
        </div>
    )
    
}

export default GameCard