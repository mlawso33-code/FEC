import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';

const StylePic = (props) => {
  const { currentStyle, setCurrentStyle} = useContext(OverviewContext);

  function handleClick(event) {
    event.preventDefault();
    setCurrentStyle(props.style);
  }

  return (
      <img src={props.style.photos[0].thumbnail_url} className='stylePic' onClick={event => handleClick(event)}/>
  )
}

export default StylePic