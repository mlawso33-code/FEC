import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'

const RatingBreakdown = () => {
  const { product } = useContext(AppContext)
  const {product_id} = useContext(RatingsAndReviewsContext)
  const [ratingSummary, setRatingSummary] = useState([])

  function fetchMetaData() {
    axios.get(`/api/reviews/meta/?product_id=${product_id}`)
      .then(response => setRatingSummary(response.data.ratings))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchMetaData()
    }
  }, [product])

  return (
    <div>
      {/* Rating Summary */}
      <div>
        <span></span>
        <Rating />
      </div>
    </div>
  )
}

export default RatingBreakdown