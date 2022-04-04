import GameCard from "./GameCard";
import React from 'react'
import {useEffect} from 'react'
import SearchBar from './SearchBar';


function Games({games, removeGames, setGames, user}){ 
    
    function editGame(game) {
        const edited = games.map(g => {
            if (game.id === g.id) {
                return game
            }
            return g
        })
        setGames(edited)
       
    }

    useEffect(()=> {
        fetch(`users/${user.id}`)
        .then((r) => r.json())
        .then((g) => {
            setGames(g.games)
        })
      }, [])

      const nameSorted = () =>{
        fetch('/filter')
        .then((r) => r.json())
        .then((g) => setGames(g));

    };

    const allGames = games&&games.map((g) => <GameCard games={games} editGame={editGame} key={g.id} game={g} removeGames={removeGames} setGames={setGames}/> )

    return(
        <>
            <div>
                
                <h1>Games you own</h1>
                <SearchBar  games={games} setGames={setGames}/>
                {allGames}
                <button onClick={nameSorted}>Sort By Name:</button>
            </div>
        </>

    )
}


export default Games;