import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import StarRating from './StarRating.jsx';
import moment from 'moment';

const ReviewTile = (props) => {
  const { product } = useContext(AppContext)
  const {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = props.review


  function incrementHelpfullness(event) {
    //Make api call to update helpfulness count
    event.preventDefault()
    console.log(helpfulness)
  }

  return (
    <div>
      <div>
        <StarRating rating={rating}/>
        {/* Conditionally render icon if user is verified */}
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        <span>{reviewer_name}</span>
        <span>{moment(date).format('LL')}</span>
      </div>

      <div style={{fontWeight: "bold"}}>{summary}</div>

      {/* Review body will need to be a free-form multimedia input to submit text and images */}
      <div>
        <p>{body}</p>
        {/* Need to render photos here */}
      </div>


      {/* Conditionally render div if recommended */}
      {recommend &&
        <div>
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>I recommend this product</span>
        </div>
      }

      <div>
        <div style={{fontWeight: "bold"}}>Response:</div>
        <p>{response}</p>
      </div>

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