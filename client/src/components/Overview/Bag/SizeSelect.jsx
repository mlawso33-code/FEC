import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';


const SizeSelect = (props) => {

  const {selectedSize, setSelectedSize, currentStyle} = useContext(OverviewContext);

  function sizes () {
    let sizeA = [];
    if (currentStyle) {
    for (let i = 0; i < currentStyle.skus.length; i++) {
      sizeA.push(currentStyle.skus[i])
    }
  }
    return sizeA;
  }

  let sizeArr = sizes();

  return (
    <span>
      <select name='SelectSize'>
        <option value=''>SELECT SIZE</option>
        {console.log('sizeArr', sizeArr)}
        {sizeArr.map(opt => <option value={opt.size} key={opt.size}>${opt.size}</option>)}
      </select>
    </span>
  )
}

export default SizeSelect;