import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';
import Category from './Category.jsx';
import Price from './Price.jsx';
import ProductName from './ProductName.jsx';
import Ratings from './Ratings.jsx';
import Share from './Share.jsx';
import ProductStyles from '../Styles/ProductStyles.jsx';
import Bag from '../Bag/Bag.jsx';


const ProductOverview = () => {
  const { product } = useContext(AppContext);

  return (
    <div>
      <div className='overviewBox2'>
        <Ratings />
        <Category />
        <ProductName />
        <Price />

        <ProductStyles />
        <Bag />

        <Share />
      </div>

      {/* <div className='description'>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </div> */}

    </div>
  )
}

export default ProductOverview