import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import StarRating from './StarRating.jsx';
import moment from 'moment';
import ReviewPhoto from './ReviewPhoto.jsx';

const ReviewTile = ({review}) => {
  const { product } = useContext(AppContext)
  const {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = review
  const [fullReview, setFullReview] = useState(false)


  function incrementHelpfullness(event) {
    //Make api call to update helpfulness count
    event.preventDefault()
    console.log(helpfulness)
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
        <a href='' style={{color: "black"}} onClick={incrementHelpfullness}>Yes</a>
        <span>({helpfulness})</span>
        |
        <a href='' style={{color: "black"}} onClick={incrementHelpfullness}>Report</a>
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