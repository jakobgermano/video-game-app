import GameCard from "./GameCard";
import {useEffect} from 'react'


function Games({user, games, setGames, removeGames}){

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
                <GameCard key = {g.id} game = {g} removeGames={removeGames} />
                )}
            </div>
        </>

    )
}


export default Games;