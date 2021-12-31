import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';

const Price = () => {
  const { currentStyle, price, sale } = useContext(OverviewContext);

  return (
    <div>
      {sale &&
      <>
        <span className='salePrice'>{price} </span>
        <span className='oldPrice'>{currentStyle.original_price}</span>
      </>
      }
      {currentStyle &&
      <>
        {sale === false &&
        <>
          <span className='price'>{currentStyle.original_price}</span>
        </>
        }
      </>
      }

    </div>
  )
}

export default Price