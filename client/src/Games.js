import GameCard from "./GameCard";
import React from 'react'


function Games({games, removeGames}){

    return(
        <>
            <div>
                
                <h1>Games you own</h1>
                {games?.map((g) => 
                <GameCard key = {g.id} game = {g} removeGames={removeGames} />
                )}
            </div>
        </>

    )
}


export default Games;