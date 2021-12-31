import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';

const Quantity = (props) => {

  const{selectedSize} = useContext(OverviewContext);

  function range () {
    let options = [];
    if (!selectedSize.quantity) {
      return ['...']
    }
    let max = (selectedSize.quantity <= 15 ? selectedSize.quantity : 15);
    // let max = selectedSize
    for (let i = 1; i <= max; i++) {
      options.push(i);
    }
    return options;
  }

  let optionsArr = range();

  return (
    <span>
      <select name='QuantitySelect'>
        {optionsArr.map(opt => <option value={opt} key={opt}>{opt}</option>)}
      </select>
    </span>
  )
}

export default Quantity;