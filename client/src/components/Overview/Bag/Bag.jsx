import React, {useState, useContext} from 'react';
import BagButton from './BagButton.jsx';
import Quantity from './Quantity.jsx';
import SizeSelect from './SizeSelect.jsx';
import OverviewContext from '../OverviewContext.jsx';

const Bag = () => {
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { currentStyle, cart, setCart, price } = useContext(OverviewContext);

  return (
    <div className='puchaseOptions'>
       <OverviewContext.Provider value={{currentStyle, selectedSize, setSelectedSize, cart, setCart, selectedQuantity, setSelectedQuantity, price}}>
        <SizeSelect />
        <Quantity />
        <BagButton />
      </OverviewContext.Provider>
    </div>
  )
}

export default Bag;