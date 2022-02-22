import React, {useContext} from 'react';
import AppContext from '../../App/AppContext.jsx';
import AvgStarRating from '../../RatingsAndReviews/Ratings/AvgStarRating.jsx';

const Ratings = () => {
  const { averageRating } = useContext(AppContext);

  function handleClick (e) {
    let ratingId = document.getElementById("RatingsLink")
    ratingId.scrollIntoView({ behavior: "smooth", block: "start"})
  }

  return (
    <div>
      <AvgStarRating rating={averageRating}/>
      <a style={{textDecoration: 'underline', fontSize: '1.1em'}} onClick={e => handleClick(e)}>Read all reviews</a>
    </div>
  )
}

export default Ratings