import React from "react"
import Rating from 'react-rating'

const StarRating = (props) => {
  return (
    <Rating
      emptySymbol="fa fa-star-o"
      fullSymbol="fa fa-star"
      initialRating={props.rating}
      readonly
    />
  )
}

export default StarRating