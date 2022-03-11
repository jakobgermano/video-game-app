
function GameCard({game}) {
    return(
        <div>
             <h2>{game.name}</h2>
            <h3>genre:{game.genre}</h3>
            <h3>rating:{game.rating}</h3>
        </div>
    )
}

export default GameCard;