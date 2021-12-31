import React, {useState, useContext, useEffect} from 'react';
import BagButton from './BagButton.jsx';
import Quantity from './Quantity.jsx';
import SizeSelect from './SizeSelect.jsx';
import OverviewContext from '../OverviewContext.jsx';

const Bag = () => {
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const { currentStyle, cart, setCart } = useContext(OverviewContext);

  return (
    <div className='puchaseOptions'>
       {console.log(currentStyle)}
       <OverviewContext.Provider value={{currentStyle, selectedSize, setSelectedSize, cart, setCart, selectedQuantity, setSelectedQuantity}}>
        <SizeSelect />
        <Quantity />
        <BagButton />
      </OverviewContext.Provider>
    </div>
  )
}

export default Bag;