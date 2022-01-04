import React from "react"
import Rating from 'react-rating'

const StarRating = ({rating}) => {
  return (
    <Rating
      emptySymbol="fa fa-star-o"
      fullSymbol="fa fa-star"
      initialRating={rating}
      readonly
    />
  )
}

export default StarRating