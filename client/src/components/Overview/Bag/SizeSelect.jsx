import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';


const SizeSelect = (props) => {

  const {selectedSize, setSelectedSize, currentStyle} = useContext(OverviewContext);

  function handleChange (event) {
    setSelectedSize(JSON.parse(event.target.value));
  }

  //cats

  function sizes () {
    let sizeA = [{size: 'SELECT SIZE', id: 'null'}];
    if (currentStyle) {
    for (let key in currentStyle.skus) {
      sizeA.push({size: currentStyle.skus[key].size, quantity: currentStyle.skus[key].quantity, id:key})
    }
  }
    return sizeA;
  }

  let sizeArr = sizes();

  return (
    <span>
      <select name='SelectSize' onChange={event => handleChange(event)}>
        {/* <option value=''>SELECT SIZE</option> */}

         {/* Doesn't like 'selected' / assigning value to select does nothing */}

        {sizeArr.map(opt => <option value={JSON.stringify({size: opt.size, quantity: opt.quantity, id: opt.id})} key={opt.id}>{opt.size}</option>)}
      </select>
    </span>
  )
}

export default SizeSelect;