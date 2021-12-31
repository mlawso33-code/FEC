import React, {useContext} from 'react';

const Quantity = (props) => {

  function range (max) {
    let options = [];
    for (let i = 1; i <= max; i++) {
      options.push(i);
    }
    return options;
  }

  let optionsArr = range(15);

  return (
    <span>
      <select name='QuantitySelect'>
        {optionsArr.map(opt => <option value={opt} key={opt}>{opt}</option>)}
      </select>
    </span>
  )
}

export default Quantity;