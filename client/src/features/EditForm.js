import React, {useState} from "react";

function EditForm({game, editGame}) {
    const [name, setName] = useState(game.name)
    const [genre, setGenre] = useState(game.genre)
    const [rating, setRating] = useState(game.rating)


    function handleSubmit(e) {
      e.preventDefault()
      setName("")
      setGenre("")
      setRating("")
      fetch(`/games/${game.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
              name,
              genre,
              rating,
              game_id: game.id
          }),
      })
      .then(r => r.json())
      .then(g => editGame(g))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Name </label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <label>Genre</label>
                <input type="text" id="name" value={genre} onChange={e => setGenre(e.target.value)}/>
                <label>Rating</label>
                <input type="text" id="name" value={rating} onChange={e => setRating(e.target.value)}/>
                <input type="submit"/>
            </form>

        </div>
    )
}

export default EditForm;