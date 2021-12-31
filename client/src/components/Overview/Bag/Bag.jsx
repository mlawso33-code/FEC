import React, {useState, useContext, useEffect} from 'react';
import BagButton from './BagButton.jsx';
import Quantity from './Quantity.jsx';
import SizeSelect from './SizeSelect.jsx';
import OverviewContext from '../OverviewContext.jsx';

const Bag = () => {
  const [selectedSize, setSelectedSize] = useState({});
  const { currentStyle } = useContext(OverviewContext);

  return (
    <div className='puchaseOptions'>
       {console.log(currentStyle)}
       <OverviewContext.Provider value={{currentStyle, selectedSize, setSelectedSize}}>
        <SizeSelect />
        <Quantity />
        <BagButton />
      </OverviewContext.Provider>
    </div>
  )
}

export default Bag;