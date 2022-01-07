import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';

const Quantity = (props) => {

  const{selectedSize, setSelectedQuantity} = useContext(OverviewContext);

  function range () {
    let options = [];
    if (!selectedSize.quantity) {
      return ['...']
    }
    let max = (selectedSize.quantity <= 15 ? selectedSize.quantity : 15);
    for (let i = 1; i <= max; i++) {
      options.push(i);
    }
    return options;
  }

  let optionsArr = range();

  function handleChange(event) {
    setSelectedQuantity(event.target.value);
  }

  return (
    <span>
      <select name='QuantitySelect' style={{color: "rgba(88, 47, 14)"}} disabled={!selectedSize.quantity} onChange={event => handleChange(event)}>
        {optionsArr.map(opt => <option value={opt} key={opt}>{opt}</option>)}
      </select>
    </span>
  )
}

export default Quantity;