import React, {useState} from 'react';


function ReviewForm({review, addReview}) {
    const [name, setName] = useState("")

    function handleSubmit(e) {
        function handleSubmit(e) {
            e.preventDefault() 
            setName("")
            fetch("/reviews", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name
                }),
            }).then(r => r.json())
            .then(r => addReview(r.review))
        }
    }
    return(
        <div>
             <h1>Add a Review</h1>
             <p>Let us know how you like the site!</p>
            <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>Review:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="submit"/>
            </form>
            </div>
        </div>
    )
}

export default ReviewForm;