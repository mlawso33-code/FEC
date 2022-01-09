import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const BagButton = () => {
  const { currentStyle, cart, setCart, selectedSize, selectedQuantity, price} = useContext(OverviewContext);
  const {product} = useContext(AppContext);

  function addToBag () {
      let totalPrice = (price * Number(selectedQuantity));
      let itemForPurchase = {Product: product.name, Style: currentStyle.name, Size: selectedSize.size, selectedQuantity, Price: totalPrice }

      setCart( oldCart =>  [...oldCart, itemForPurchase])
  }

  return (
    <div>
      {/* {console.log('cart:::', cart)} */}
      <input type='button' className='bagButton' style={{color: "rgba(88, 47, 14)"}} value='Add to bag' onClick={() => addToBag()}/>
      </div>
  )
}

export default BagButton;