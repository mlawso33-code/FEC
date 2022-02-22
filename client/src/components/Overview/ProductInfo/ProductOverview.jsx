import React from 'react';
import Category from './Category.jsx';
import Price from './Price.jsx';
import ProductName from './ProductName.jsx';
import Ratings from './Ratings.jsx';
import Share from './Share.jsx';
import ProductStyles from '../Styles/ProductStyles.jsx';
import Bag from '../Bag/Bag.jsx';


const ProductOverview = () => {

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

    </div>
  )
}

export default ProductOverview