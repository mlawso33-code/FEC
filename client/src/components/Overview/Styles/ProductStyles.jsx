import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import StyleOptions from './StyleOptions.jsx';

const ProductStyles = () => {

  const {currentStyle} = useContext(OverviewContext);

  return (
    <div>
      <span>
        Style:
      <span style={{fontFamily: 'elvish', margin: '0px', fontSize: '.85em'}}>{`  ${currentStyle && currentStyle.name}`} </span>
      </span>
      <StyleOptions />


    </div>
  )
}

export default ProductStyles