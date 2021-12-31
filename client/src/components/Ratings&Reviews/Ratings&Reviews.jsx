import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import ReviewList from './ReviewList.jsx'
import RatingBreakdown from './RatingBreakdown.jsx'

const RatingsAndReviews = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id
  const [reviews, setReviews] = useState([])
  const [metaData, setMetaData] = useState({})


  function fetchReviews() {
    axios.get(`/api/reviews/?page=1&count=100&sort=relevant&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  function fetchMetaData() {
    axios.get(`/api/reviews/meta/?product_id=${product_id}`)
      .then(response => setMetaData(response.data))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchReviews()
      fetchMetaData()
    }
  }, [product])

  function handleSortChange(event) {
    axios.get(`/api/reviews/?page=1&count=100&sort=${event.target.value}&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  return (
    <RatingsAndReviewsContext.Provider value={{
      product_id, reviews, handleSortChange, metaData
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