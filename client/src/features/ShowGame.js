import React, { useEffect } from 'react'

function ShowGame({game, filterGame}) {
    useEffect(()=> {
        fetch(`games/${game.id}`)
        .then((r) => r.json())
        .then((g) => {
            filterGame(g)
        })
      }, [])

    return(
        <div>
            {game.name}
            <br></br>
            {game.genre}
            <br></br>
            {game.rating}
        </div>
    )

}

export default ShowGame;