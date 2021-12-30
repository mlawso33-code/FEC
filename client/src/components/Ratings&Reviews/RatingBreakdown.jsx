import React, {useState, useEffect, useContext} from "react"
import Rating from 'react-rating'
import axios from "axios"
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'

const RatingBreakdown = () => {
  const { product } = useContext(AppContext)
  const {product_id} = useContext(RatingsAndReviewsContext)
  const [ratingSummary, setRatingSummary] = useState({})
  const averageRating = avgRating(ratingSummary)

  function fetchMetaData() {
    axios.get(`/api/reviews/meta/?product_id=${product_id}`)
      .then(response => setRatingSummary(response.data.ratings))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchMetaData()
    }
  }, [product])

  function avgRating(rating) {
    let totalStars = 0
    let totalRatings = 0

    for (let star in rating) {
      totalStars += star * Number(rating[star])
      totalRatings += Number(rating[star])
    }

    return (Math.round((totalStars / totalRatings) * 10) / 10).toString()
  }

  return (
    <div>
      {/* Rating Summary */}
      <div>
        <span>{averageRating}</span>
        <Rating />
      </div>
    </div>
  )
}

export default RatingBreakdown