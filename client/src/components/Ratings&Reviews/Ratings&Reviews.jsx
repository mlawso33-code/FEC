import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import ReviewList from './ReviewList.jsx'
import RatingBreakdown from './RatingBreakdown.jsx'

const RatingsAndReviews = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id

  return (
    <RatingsAndReviewsContext.Provider value={{
      product_id
    }}>
      <div>
      <h1>Ratings &amp; Reviews</h1>
      </div>

      <div>
        <RatingBreakdown />
        <ReviewList />
      </div>
    </RatingsAndReviewsContext.Provider>
  )
}

export default RatingsAndReviews