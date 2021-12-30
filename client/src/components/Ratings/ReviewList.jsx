import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../App/AppContext.jsx'
import axios from 'axios'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'
import ReviewContext from './ReviewContext.jsx'


const Ratings = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id
  const [reviews, setReviews] = useState([])
  // const [page, setPage]  = useState(1)
  // const [count, setCount] = useState(100)
  const [sort, setSort] = useState('relevant')

  const [numOfDisplayed, setNumOfDisplayed] = useState(2)

  let displayedReviews = reviews.slice(0, numOfDisplayed)

  function fetchReviews() {
    axios.get(`/api/reviews/?page=1&count=100&sort=${sort}&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
  }

  useEffect(() => {
    if(JSON.stringify(product) !== '{}') {
      fetchReviews()
      // setNumOfDisplayed(2)
    }
  }, [product])

  function handleMoreReviewsClick() {
    setNumOfDisplayed(numOfDisplayed + 2)
  }

  function handleSortChange(event) {
    axios.get(`/api/reviews/?page=1&count=100&sort=${event.target.value}&product_id=${product_id}`)
      .then(response => setReviews(response.data.results))
      .then(setSort(event.target.value))
  }

  return (
    <ReviewContext.Provider value={{
      handleSortChange
    }}>
      <div>
        <div style={{marginBottom: "20px"}}>
          {reviews.length} reviews, sorted by <SortDropDown />
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
    </ReviewContext.Provider>
  )
}

export default Ratings