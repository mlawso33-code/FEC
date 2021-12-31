import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import AvgStarRating from "./AvgStarRating.jsx"

const RatingBreakdown = () => {
  const { product } = useContext(AppContext)
  const {product_id} = useContext(RatingsAndReviewsContext)
  const [metaData, setMetaData] = useState({})
  const averageRating = avgRating(metaData.ratings)
  const percentRecommend = perRecommend(metaData.recommended)

  function fetchMetaData() {
    axios.get(`/api/reviews/meta/?product_id=${product_id}`)
      .then(response => setMetaData(response.data))
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

  function perRecommend(recommendRes) {
    if (recommendRes) {
      let notRecommended = Number(recommendRes.false)
      let recommended = Number(recommendRes.true)
      let totalResponse = notRecommended + recommended

      return Math.round((recommended / totalResponse) * 100).toString()
    }
  }

  return (
    <div>
      {/* Rating Summary */}
      <div>
        <span>{averageRating}</span>
        <AvgStarRating rating={averageRating}/>
      </div>

      {/* Recommendations Percentage */}
      <div>
        {percentRecommend}% of reviews recommend this product
      </div>

      {/* Breakdown/Filter Section */}
      <div>

      </div>
    </div>
  )
}

export default RatingBreakdown