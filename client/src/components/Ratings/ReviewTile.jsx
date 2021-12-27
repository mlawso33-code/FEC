import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';

const ReviewTile = (props) => {
  const { product } = useContext(AppContext)
  const {review_id, rating, summary, recommended, response, body, date, reviewer_name, helpfulness, photos} = props.review


  function incrementHelpfullness() {
    //Make api call to update helpfulness count
    console.log(helpfulness)
  }

  return (
    <div>
      {/* <StarRating /> */}

      <div>
        {/* Conditionally render icon if user is verified */}
        <span>{reviewer_name}</span>
        <span>{date.slice(0, 10)}</span>
      </div>

      <div style={{fontWeight: "bold"}}>{summary}</div>

      {/* Review body will need to be a free-form multimedia input to submit text and images */}
      <div>
        <p>{body}</p>
        {/* Need to render photos here */}
      </div>


      {/* Conditionally render div if recommended */}
      <div>
        {/* Render checkmark icon */}
        <span>{recommended}</span>
      </div>

      <div>
        <div style={{fontWeight: "bold"}}>Response:</div>
        <p>{response}</p>
      </div>

      <div>
        <span>Helpful?</span>
        <a onClick={incrementHelpfullness}>Yes</a>
        <span>{helpfulness}</span>
      </div>

    </div>
  )
}

export default ReviewTile