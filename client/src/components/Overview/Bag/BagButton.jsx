import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const BagButton = (props) => {
  const { currentStyle, cart, setCart, selectedSize, selectedQuantity, price} = useContext(OverviewContext);
  const {product} = useContext(AppContext);

  function addToBag (event) {
      let totalPrice = (price * Number(selectedQuantity));
      console.log('price, total price', price, totalPrice)
      let itemForPurchase = {Product: product.name, Style: currentStyle.name, Size: selectedSize.size, selectedQuantity, Price: totalPrice }

      setCart( oldCart =>  [...oldCart, itemForPurchase])
  }

  return (
    <div>
      {console.log('cart:::', cart)}
      <input type='button' className='bagButton' style={{color: "rgba(88, 47, 14)"}} value='Add to bag' onClick={event => addToBag(event)}/>
      </div>
  )
}

export default BagButton;