import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const Share = () => {
  const { styles } = useContext(OverviewContext);
  const { product } = useContext(AppContext);

  return (
    <div>
      Share!

    </div>
  )
}

export default Share