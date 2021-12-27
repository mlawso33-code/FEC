import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../App/AppContext.jsx'
import axios from 'axios'
import ReviewTile from './ReviewTile.jsx'


const Ratings = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id
  const [reviews, setReviews] = useState([])
  const [page, setPage]  = useState(1)
  const [count, setCount] = useState(2)
  const [sort, setSort] = useState('relevant')

  function fetchReviews() {
    axios.get(`/api/reviews/?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchReviews()
    }
  }, [product])

  function handleMoreReviewsClick() {
    setCount(count + 2)
    fetchReviews()
  }

  return (
    <div>
      <div style={{maxHeight: "50vh", overflow: "scroll"}}>
      {reviews.map(review =>
        <ReviewTile key={review.review_id} review={review}/>)}
      </div>

      {reviews.length &&
        <button onClick={handleMoreReviewsClick}>More Reviews</button>
      }

      <button>Add Review +</button>

    </div>
  )
}

export default Ratings