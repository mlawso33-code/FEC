import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';

const Price = () => {
  const { currentStyle, price, sale } = useContext(OverviewContext);

  return (
    <div>
      {sale &&
      <>
        <span className='salePrice' style={{fontFamily: 'elvish'}}>{`$${price}`} </span>
        <span className='oldPrice' style={{fontFamily: 'elvish'}}>{`$${currentStyle.original_price}`}</span>
      </>
      }
      {currentStyle &&
      <>
        {sale === false &&
        <>
          <span className='price' style={{fontFamily: 'elvish'}}>{`$${currentStyle.original_price}`}</span>
        </>
        }
      </>
      }

    </div>
  )
}

export default Price