import React, {useState, useContext} from 'react';
import AppContext from '../../App/AppContext.jsx';

const Category = () => {

  const { product } = useContext(AppContext);

  return (
    <div style={{fontFamily: 'elvish', margin: '0px'}}>
      {product.category}

    </div>
  )
}

export default Category

