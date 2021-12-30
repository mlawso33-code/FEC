import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';

const StylePic = (props) => {
  const { currentStyle, setCurrentStyle} = useContext(OverviewContext);

  function handleClick(event) {
    event.preventDefault();
    console.log('STYLE CLICKED ON:::', event.target);
    setCurrentStyle(props.style);
    console.log('NEW CURRENT STYLE:::', currentStyle)
  }

  return (
      <img src={props.style.photos[0].thumbnail_url} className='stylePic' onClick={event => handleClick(event)}/>
  )
}

// let styleItem = {
//   height: '10%',
//   border: '2px solid white',
//   borderRadius: 10,
//   outline: 5
// }

export default StylePic