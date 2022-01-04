import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const BagButton = (props) => {
  const { currentStyle, cart, setCart, selectedSize, selectedQuantity} = useContext(OverviewContext);
  const {product} = useContext(AppContext);

  function addToBag (event) {
    if (currentStyle) {
      let itemForPurchase = {Product: product.name, Style: currentStyle.name, Size: selectedSize.size, selectedQuantity }

      setCart( oldCart =>  [...oldCart, itemForPurchase])
    }
  }

  return (
    <div>
      {console.log('cart:::', cart)}
      <input type='button' value='Add to bag' onClick={event => addToBag(event)}/>
      </div>
  )
}

export default BagButton;