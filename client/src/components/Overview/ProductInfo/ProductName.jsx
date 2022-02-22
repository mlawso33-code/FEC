import React, {useContext} from 'react';
import AppContext from '../../App/AppContext.jsx';

const ProductName = () => {
  const { product } = useContext(AppContext);

  return (
    <div>
      <h2 style={{fontFamily: 'elvish', margin: '0px'}}>{product.name}</h2>


    </div>
  )
}

export default ProductName