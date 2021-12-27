import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../App/AppContext.jsx'
import axios from 'axios'
import ReviewTile from './ReviewTile.jsx'


const Ratings = () => {
  const { product } = useContext(AppContext)
  const [reviews, setReviews] = useState([])

  function fetchReviews(page, count, sort, product_id) {
    axios.get(`/api/reviews/?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}')
    fetchReviews(1, 5, 'relevant', product.id)
  }, [product])

  function handleMoreReviewsClick() {
    console.log('I was clicked')
  }

  return (
    <div>
      {reviews.map(review =>
        <ReviewTile key={review.review_id} review={review}/>)}
      <button onClick={handleMoreReviewsClick}>More Reviews</button>
    </div>

  )
}

export default Ratings