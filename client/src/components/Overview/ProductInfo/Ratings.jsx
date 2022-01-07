import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';
import AvgStarRating from '../../Ratings&Reviews/Ratings/AvgStarRating.jsx';

const Ratings = () => {
  const { styles } = useContext(OverviewContext);
  const { product, averageRating } = useContext(AppContext);

  return (
    <div>
      {/* <p>Put stars here {' '}
      <a href="localHost:3000">Read all reviews</a>
      </p> */}

      <AvgStarRating rating={averageRating}/>
      <a href="#RatingsLink">Read all reviews</a>

    </div>
  )
}

export default Ratings