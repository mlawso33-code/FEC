import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const ProductName = () => {
  const { styles } = useContext(OverviewContext);
  const { product } = useContext(AppContext);

  return (
    <div>
      {product.name}


    </div>
  )
}

export default ProductName