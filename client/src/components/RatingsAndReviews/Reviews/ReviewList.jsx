import React, { useState, useContext } from 'react'
import RatingsAndReviewsContext from '../RatingsAndReviewsContext.jsx'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'
import NewReview from './NewReview.jsx'


const ReviewList = () => {
  const { reviews, filteredReviews } = useContext(RatingsAndReviewsContext)
  const [numOfDisplayed, setNumOfDisplayed] = useState(2)
  const [addingReview, setAddingReview] = useState(false)
  let allReviews = []

  if (JSON.stringify(filteredReviews) === '[]') {
    allReviews = reviews
  } else {
    allReviews = filteredReviews
  }

  let displayedReviews = allReviews.slice(0, numOfDisplayed)

  function handleMoreReviewsClick() {
    setNumOfDisplayed(numOfDisplayed + 2)
  }

  function handleAddReviewClick() {
    setAddingReview(true)
  }

  function closeNewReviewModal() {
    setAddingReview(false)
  }

  return (
    <div className='reviewList'>
      <div className='numReviews'>
        {reviews.length} reviews, sorted by <SortDropDown />
      </div>

      <div className='allTiles'>
      {displayedReviews.map(review =>
        <ReviewTile key={review.review_id} review={review}/>)}
      </div>

      {numOfDisplayed < allReviews.length &&
        <button className='reviewButton' onClick={handleMoreReviewsClick}>More Reviews</button>
      }

      <button className='reviewButton' onClick={handleAddReviewClick}>Add Review +</button>
      {addingReview &&
        <NewReview closeModal={closeNewReviewModal}/>
      }

    </div>
  )
}

export default ReviewList