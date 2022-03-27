import GameCard from "./GameCard";
import React from 'react'
import {useEffect} from 'react'


function Games({games, removeGames, setGames, user}){


    useEffect(()=> {
        fetch(`/users/${user.id}`)
        .then((r) => r.json())
        .then((g) => {
            setGames(g.games)
        })
      }, [])

    return(
        <>
            <div>
                
                <h1>Games you own</h1>
                {games?.map((g) => 
                <GameCard key = {g.id} game = {g} removeGames={removeGames} setGames={setGames}/>
                )}
            </div>
        </>

    )
}


export default Games;