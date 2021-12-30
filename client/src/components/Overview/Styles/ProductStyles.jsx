import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import StyleOptions from './StyleOptions.jsx';

const ProductStyles = () => {

  const {currentStyle} = useContext(OverviewContext);

  return (
    <div>
      <div className='styleName'>{`Style: ${currentStyle && currentStyle.name}`}</div>
      <StyleOptions />


    </div>
  )
}

export default ProductStyles