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
        </div>
    )

}

export default ShowGame;