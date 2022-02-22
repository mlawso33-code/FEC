import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import { FaCheckCircle } from 'react-icons/fa';

const StylePic = (props) => {
  const { currentStyle, setCurrentStyle} = useContext(OverviewContext);

  function handleClick(event) {
    event.preventDefault();
    setCurrentStyle(props.item);
  }

  return (
    <div style={{width: '25%', position: 'relative'}} onClick={event => handleClick(event)}>
      <img src={props.item.photos[0].thumbnail_url.slice(0, -2) + '1'} className='stylePic'/>
      { (currentStyle === props.item) && <FaCheckCircle className='selectedStyle' styles={{}}/> }
    </div>
  )
}

export default StylePic