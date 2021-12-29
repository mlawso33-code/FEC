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
      <div className='overviewBox2'>
        <Ratings />
        <Category />
        <ProductName />
        <Price />

        <ProductStyles />

        <Share />
      </div>

      {/* <div className='description' style={descriptionStyle}>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </div> */}

    </div>
  )
}

// let infoStyle = {
//   position: 'relative',
//   flexDirection: 'column',
//   float: 'right',
//   backgroundColor: 'gray',
//   width: '50%',
//   height: 350
// }

let descriptionStyle = {
  position: 'relative'
}

export default ProductOverview