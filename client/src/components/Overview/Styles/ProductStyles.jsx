import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import StyleOptions from './StyleOptions.jsx';

const ProductStyles = () => {

  const {currentStyle} = useContext(OverviewContext);

  return (
    <div>
      <span style={{marginBottom: '1%', fontSize: '1.2em'}}>
        Style:
      <span style={{fontFamily: 'elvish', margin: '0px', fontSize: '1em'}}>{`  ${currentStyle && currentStyle.name}`} </span>
      </span>
      <StyleOptions />


    </div>
  )
}

export default ProductStyles