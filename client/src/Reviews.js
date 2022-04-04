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

      const allReviews = reviews&&reviews.map((r) => <ReviewCard reviews={reviews} key={r.id} review={r}/> )

    return(
        <div>
           {allReviews}
            

        </div>
    )
}

export default Reviews;