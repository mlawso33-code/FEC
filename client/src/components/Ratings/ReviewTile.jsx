import React, {useState, useEffect, useContext} from 'react';
import ReviewContext from './ReviewContext.jsx';
import axios from 'axios';
import StarRating from './StarRating.jsx';
import moment from 'moment';
import ReviewPhoto from './ReviewPhoto.jsx';

const ReviewTile = ({review}) => {
  const {fetchReviews} = useContext(ReviewContext)
  const {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = review
  const [fullReview, setFullReview] = useState(false)
  const [reported, setReported] = useState(false)
  const [helpful, setHelpful] = useState(helpfulness)


  function incrementHelpful(event) {
    event.preventDefault()
    axios.put(`/api/reviews/${review_id}/helpful`)
      .then(setHelpful(helpful + 1))
  }

  function reportReview(event) {
    event.preventDefault()
    axios.put(`/api/reviews/${review_id}/report`)
      .then(setReported(true))
  }

  function showMoreClick(event) {
    event.preventDefault()
    setFullReview(true)
  }

  return (
    <div>
      {/* Review head */}
      <div>
        <StarRating rating={rating}/>
        {/* Conditionally render icon if user is verified */}
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        <span>{reviewer_name}, {moment(date).format('LL')} </span>
      </div>

      <div style={summaryStyle}>{summary}</div>

      {/* Review body */}
      <div>
        {fullReview
          ? <p>{body}</p>
          : <p style={bodyStyle}>{body}</p>
        }

        {body.length > 250 && !fullReview &&
          <a href='' style={{color: "black"}} onClick={showMoreClick}>Show more</a>
        }

        <div>
          {photos.map(photo =>
            <ReviewPhoto key={photo.id} photo={photo}/>)
          }
        </div>
      </div>


      {/* Conditionally render div if recommended */}
      {recommend &&
        <div>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>I recommend this product</span>
        </div>
      }

      {/* Conditionally render if response from seller */}
      {response &&
      <div style={{backgroundColor: "grey"}}>
        <div style={{fontWeight: "bold"}}>Response from seller:</div>
        <p>{response}</p>
      </div>
      }

      {/* Review footer */}
      <div>
        <span>Helpful?</span>
        <a href='' style={{color: "black"}} onClick={incrementHelpful}>Yes</a>
        <span>({helpful})</span>
        |
        <a href='' style={{color: "black"}} onClick={reportReview}>{reported ? 'Reported' : 'Report'}</a>
      </div>

      <hr/>

    </div>
  )
}

export default ReviewTile


const summaryStyle = {
  fontWeight: "bold",
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}

const bodyStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "250ch"
}