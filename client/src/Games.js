import React, {useEffect, useState} from "react"
import GameCard from './GameCard'

function Games() {
    const [games, setGames] = useState([])
    console.log(games)
    useEffect(() => {
        fetch("/games")
        .then((r) => r.json())
        .then(setGames)
    },[])
    
    return(
        <div>
           <h1>Games you own</h1>
           {games.map(g => <GameCard game={g} key={g.id}/>)}
        </div>
    )
}

export default Games;