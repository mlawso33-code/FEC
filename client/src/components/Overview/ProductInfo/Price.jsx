import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const Price = () => {
  const { styles } = useContext(OverviewContext);
  const { product } = useContext(AppContext);

  return (
    <div>
      {product.default_price}

    </div>
  )
}

export default Price