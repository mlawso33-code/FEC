import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import AvgStarRating from "./AvgStarRating.jsx"
import BreakDown from "./BreakDown.jsx"

const RatingBreakdown = () => {
  const { product } = useContext(AppContext)
  const { product_id } = useContext(RatingsAndReviewsContext)
  const [metaData, setMetaData] = useState({})
  const averageRating = getAvgRating(metaData.ratings)
  const percentRecommend = getPerRecommend(metaData.recommended)
  const breakDown = getBreakDown(metaData.ratings)

  function fetchMetaData() {
    axios.get(`/api/reviews/meta/?product_id=${product_id}`)
      .then(response => setMetaData(response.data))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchMetaData()
    }
  }, [product])

  function getAvgRating(ratings) {
    let totalStars = 0
    let totalRatings = 0

    for (let star in ratings) {
      totalStars += star * Number(ratings[star])
      totalRatings += Number(ratings[star])
    }

    return (Math.round((totalStars / totalRatings) * 10) / 10).toString()
  }

  function getPerRecommend(recommendRes) {
    if (recommendRes) {
      let notRecommended = Number(recommendRes.false)
      let recommended = Number(recommendRes.true)
      let totalResponse = notRecommended + recommended

      return Math.round((recommended / totalResponse) * 100).toString()
    }
  }

  function getBreakDown(ratings) {
    let result = []
    let totalRatings = 0
    if(ratings) {
      for(let rating in ratings) {
        totalRatings += Number(ratings[rating])
      }

      for (let star in ratings) {
        result.unshift(<BreakDown star={star} count={ratings[star]} totalRatings={totalRatings}/>)
      }
      return result
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
        {breakDown}
      </div>
    </div>
  )
}

export default RatingBreakdown