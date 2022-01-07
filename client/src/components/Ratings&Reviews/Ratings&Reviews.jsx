import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import ReviewList from './Reviews/ReviewList.jsx'
import RatingBreakdown from './Ratings/RatingBreakdown.jsx'
import ProductBreakdown from './Product/ProductBreakdown.jsx'

const RatingsAndReviews = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [filtersApplied, setFiltersApplied] = useState([])

  function filterList(event, toggleOn) {
    const matchingReviews = reviews.filter(review => review.rating === Number(event.target.id))
    let newFilteredReviews = filteredReviews.filter(review => review.rating !== Number(event.target.id))
    let currentFilters = filtersApplied.filter(rating => rating !== event.target.id)
    if (toggleOn) {
      setFilteredReviews(newFilteredReviews.concat(matchingReviews))
      setFiltersApplied(currentFilters.concat([event.target.id]))
      return;
    }
    setFilteredReviews(newFilteredReviews)
    setFiltersApplied(currentFilters)
  }

  function clearAllFilters(e) {
    e.preventDefault()
    setFilteredReviews([])
    setFiltersApplied([])
  }


  function fetchReviews() {
    axios.get(`/api/reviews/?page=1&count=100&sort=relevant&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchReviews()
    }
  }, [product])

  function handleSortChange(event) {
    axios.get(`/api/reviews/?page=1&count=100&sort=${event.target.value}&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  return (
    <RatingsAndReviewsContext.Provider value={{
      product_id, reviews, handleSortChange, filterList, filteredReviews, filtersApplied, clearAllFilters
    }}>
      <h1 className='ratingsTitle' id='RatingsLink'>Ratings &amp; Reviews</h1>

      <div className='ratingsANDreviews'>
        <RatingBreakdown />
        <ReviewList />
        <ProductBreakdown />
      </div>
    </RatingsAndReviewsContext.Provider>
  )
}

export default RatingsAndReviews