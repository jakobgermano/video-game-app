import GameCard from './GameCard'
import { useSelector } from 'react-redux'


function Games() {
    const games = useSelector ( state => state.games)
    const cards = games.map((game) =>{ 
        return <GameCard game={game} key={game.id}/>

    })
    return(
        <div>
            <h1>Games you own</h1>
            {cards}
            
        </div>
    )
}

export default Games