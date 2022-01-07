import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';
import moment from 'moment';
import ReviewPhoto from './ReviewPhoto.jsx';

const ReviewTile = ({ review }) => {
  const {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = review
  const [fullReview, setFullReview] = useState(false)
  const [reported, setReported] = useState(false)
  const [helpful, setHelpful] = useState(helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)


  function incrementHelpful(event) {
    event.preventDefault()
    if (!helpfulClicked) {
      axios.put(`/api/reviews/${review_id}/helpful`)
      .then(setHelpful(helpful + 1))
      .then(setHelpfulClicked(true))
    }
  }

  function reportReview(event) {
    event.preventDefault()
    if(!reported) {
      axios.put(`/api/reviews/${review_id}/report`)
      .then(setReported(true))
    }
  }

  function showMoreClick(event) {
    event.preventDefault()
    setFullReview(true)
  }

  return (
    <div>
      {/* Review head */}
      <StarRating rating={rating}/>
      <div className='nameNdateReview'>
        <i className='fa fa-check-circle' aria-hidden='true'></i>
        <span>{reviewer_name}, {moment(date).format('LL')} </span>
      </div>

      <div className='reviewSummary'>{summary}</div>

      {/* Review body */}
      <div>
        {fullReview
          ? <p>{body}</p>
          : <p className='reviewTileBody'>{body}</p>
        }

        {body.length > 250 && !fullReview &&
          <a href='' className='tileAnchor' onClick={showMoreClick}>Show more</a>
        }

        <div>
          {photos.map(photo =>
            <ReviewPhoto key={photo.id} photo={photo}/>)
          }
        </div>
      </div>


      {/* Conditionally render div if recommended */}
      {recommend &&
        <div className='recommendedProduct'>
          <i className='fa fa-check' aria-hidden='true'></i>
          <span>I recommend this product</span>
        </div>
      }

      {/* Conditionally render if response from seller */}
      {response &&
      <div className='sellerResponse'>
        <div><b>Response from seller:</b></div>
        <p>{response}</p>
      </div>
      }

      {/* Review footer */}
      <div className='reviewTileFooter'>
        <span className='helpfulReview'>Helpful?</span>
        <a href='' className='tileAnchor' onClick={incrementHelpful}>Yes</a>
        <span>({helpful})</span>
        <span className='divider'>|</span>
        <a href='' className='tileAnchor' onClick={reportReview}>{reported ? 'Reported' : 'Report'}</a>
      </div>

      <hr/>

    </div>
  )
}

export default ReviewTile
