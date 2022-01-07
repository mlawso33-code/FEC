import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';


const Carousel = (props) => {
  const{currentPic, setCurrentPic} = useContext(OverviewContext);

  function handleClick (event) {
    setCurrentPic(props.pic.url)
  }


  return (
    <span>
      <img src={props.pic.url} className={currentPic === props.pic.url ? 'selectedCarouselItem' :'carouselItem'} onClick={event => handleClick(event)}/>
    </span>
  )
}
//there's got to be a cleaner way to highlight?

export default Carousel;