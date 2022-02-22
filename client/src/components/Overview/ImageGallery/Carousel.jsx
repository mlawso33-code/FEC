import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';


const Carousel = (props) => {
  const{currentPic, setCurrentPic} = useContext(OverviewContext);

  let pic = props.pic.url;
  let editedURL = pic.slice(0, pic.indexOf('&w=')) + '&w=600&q=1';

  function handleClick () {
    setCurrentPic(editedURL);
  }


  return (
    <span>
      <img src={props.pic.url} className={currentPic === props.pic.url ? 'selectedCarouselItem' :'carouselItem'} onClick={() => handleClick()}/>
    </span>
  )
}

export default Carousel;