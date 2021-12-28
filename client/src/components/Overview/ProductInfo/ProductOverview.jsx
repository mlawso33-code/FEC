import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';
import Category from './Category.jsx';
import Price from './Price.jsx';
import ProductName from './ProductName.jsx';
import Ratings from './Ratings.jsx';
import Share from './Share.jsx';
import ProductStyles from '../Styles/ProductStyles.jsx';

const ProductOverview = () => {
  const { styles } = useContext(OverviewContext);
  const { product } = useContext(AppContext);

  return (
    <div>
      <Ratings />
      <Category />
      <ProductName />
      <Price />

      <ProductStyles />

      <Share />

      <div className='description' style={descriptionStyle}>

      </div>

    </div>
  )
}

let descriptionStyle = {
  position: 'relative'
}

export default ProductOverview