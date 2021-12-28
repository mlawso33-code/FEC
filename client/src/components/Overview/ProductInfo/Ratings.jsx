import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const Ratings = () => {
  const { styles } = useContext(OverviewContext);
  const { product } = useContext(AppContext);

  return (
    <div>
      <p>Put stars here {' '}
      <a href="localHost:3000">Read all reviews</a>
      </p>

    </div>
  )
}

export default Ratings