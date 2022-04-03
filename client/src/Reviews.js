import React, { useEffect } from 'react'
import ReviewCard from './ReviewCard'

function Reviews({reviews, setReviews}) {
    


    useEffect(()=> {
        fetch(`/reviews`)
        .then((r) => r.json())
        .then((r) => {
            setReviews(r.reviews)
        })
      }, [])


    return(
        <div>
            {reviews?.map((r) => 
            <ReviewCard   key={r.id} review={r} />)}
            

        </div>
    )
}

export default Reviews;