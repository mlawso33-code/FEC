import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';
import StyleOptions from './StyleOptions.jsx';

const ProductStyles = () => {
  const { styles } = useContext(OverviewContext);
  const { product } = useContext(AppContext);

  return (
    <div>
      <h4>{'Style >'}</h4>
      <StyleOptions />


    </div>
  )
}

export default ProductStyles