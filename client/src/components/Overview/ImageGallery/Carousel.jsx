import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';

const Carousel = (props) => {
  const{setCurrentPic} = useContext(OverviewContext);

  function handleClick (event) {
    setCurrentPic(props.pic.url)
  }


  return (
      <img src={props.pic.url} className='carouselItem' onClick={event => handleClick(event)}/>
  )
}

export default Carousel;