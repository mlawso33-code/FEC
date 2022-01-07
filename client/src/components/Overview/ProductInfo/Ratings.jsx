import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';
import AvgStarRating from '../../Ratings&Reviews/Ratings/AvgStarRating.jsx';

const Ratings = () => {
  const { styles } = useContext(OverviewContext);
  const { product, averageRating } = useContext(AppContext);

  function handleClick (e) {
    let ratingId = document.getElementById("RatingsLink")
    ratingId.scrollIntoView({ behavior: "smooth", block: "start"})
  }

  return (
    <div>
      <AvgStarRating rating={averageRating}/>
      <a onClick={e => handleClick(e)}>Read all reviews</a>
    </div>
  )
}

export default Ratings