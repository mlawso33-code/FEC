import React from 'react'
import Rating from 'react-rating'

const AvgStarRating = ({ rating }) => {
  return (
    <Rating
      emptySymbol='fa fa-star-o singleStar'
      fullSymbol='fa fa-star singleStar'
      initialRating={rating}
      fractions={4}
      readonly
    />
  )
}

export default AvgStarRating