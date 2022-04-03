import React, {useState} from 'react'

function GameForm({user, addGame}) {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault() 
        setName("")
        setGenre("")
        setRating("")
        fetch("/games", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                genre,
                rating,
                user_id: user.id

            }),
        }).then(r => r.json())
        .then(g => addGame(g))
    }

    return(
        <div>
            <h1>Add Game</h1>
            <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <label>Genre:</label>
                <input type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
                <label>Rating:</label>
                <input type="text" id="rating" value={rating} onChange={e => setRating(e.target.value)}/>
                <input type="submit"/>
            </form>
            </div>
        </div>
    )
}

export default GameForm;