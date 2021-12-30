import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'


const ReviewList = () => {
  const {product} = useContext(AppContext)
  const {product_id} = useContext(RatingsAndReviewsContext)

  const [reviews, setReviews] = useState([])
  // const [page, setPage]  = useState(1)
  // const [count, setCount] = useState(100)
  // const [sort, setSort] = useState('relevant')

  const [numOfDisplayed, setNumOfDisplayed] = useState(2)

  let displayedReviews = reviews.slice(0, numOfDisplayed)

  function fetchReviews() {
    axios.get(`/api/reviews/?page=1&count=100&sort=relevant&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchReviews()
    }
  }, [product])

  function handleMoreReviewsClick() {
    setNumOfDisplayed(numOfDisplayed + 2)
  }

  function handleSortChange(event) {
    axios.get(`/api/reviews/?page=1&count=100&sort=${event.target.value}&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  return (
    <div>
      <div style={{marginBottom: "20px"}}>
        {reviews.length} reviews, sorted by <SortDropDown handleSortChange={handleSortChange}/>
      </div>

      <div style={{maxHeight: "50vh", overflow: "scroll"}}>
      {displayedReviews.map(review =>
        <ReviewTile key={review.review_id} review={review}/>)}
      </div>

      {numOfDisplayed < reviews.length &&
        <button onClick={handleMoreReviewsClick}>More Reviews</button>
      }

      <button>Add Review +</button>

    </div>
  )
}

export default ReviewList