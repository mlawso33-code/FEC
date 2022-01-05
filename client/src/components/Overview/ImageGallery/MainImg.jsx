import React, {useState, useContext} from 'react';
import Carousel from './Carousel.jsx';
import OverviewContext from '../OverviewContext.jsx';
import { FaTimes, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const MainImg = () => {
  const { currentStyle, currentPic, setCurrentPic, zoom, setZoom} = useContext(OverviewContext)
  const { popup, setPopup} = useContext(OverviewContext);
  const expandedView = document.querySelector("#popupBackground");

  function handleClick (event) {
    setPopup(!popup);
  }

  function handlePopupImgClick (event) {
    setZoom(!zoom);
  }

  // function handleScrollClick (event) {
  //   event.stopPropagation();
  //   let currentIndex = currentStyle.photos.map((photo) => photo.url).indexOf(currentPic);

  //   if (event.target.className.baseVal === 'mainArrows right') {
  //     console.log('right')
  //     setCurrentPic(currentStyle.photos[currentIndex + 1].url);
  //   } else {
  //     setCurrentPic(currentStyle.photos[currentIndex - 1].url);
  //     console.log('eep')
  //   }
  // }

  function handleRightClick (event) {
    let currentIndex = currentStyle.photos.map((photo) => photo.url).indexOf(currentPic);
      setCurrentPic(currentStyle.photos[currentIndex + 1].url);
  }

  function handleLeftClick (event) {
    let currentIndex = currentStyle.photos.map((photo) => photo.url).indexOf(currentPic);
      setCurrentPic(currentStyle.photos[currentIndex - 1].url);
  }

  return (
    <div>
    <div className='overviewBox1'>

        <img src={currentPic} id='mainImage' onClick={event => handleClick(event)}/>

        <span className='carousel'>
          {currentStyle.photos.map(pic => <Carousel pic={pic} key={pic.url.slice(33, 40)} />)}
        </span>

        <div style={{position: 'absolute', height: '100%', width: '100%', display: 'flex', alignItems: 'center'}}>
          <FaArrowLeft className='mainArrows left' onClick={(event) => handleLeftClick(event)} ></FaArrowLeft>
          <FaArrowRight className='mainArrows right'onClick={(event) => handleRightClick(event)} />
        </div>

    </div>

    <div className='popup' style={{display: popup ? 'flex' : 'none'}}>
      <img
        className='popupImg' src={currentPic}
        onClick={event => handlePopupImgClick(event)}
        style={{transform: zoom && 'scale(2.5)'}}
      />

      <FaTimes className='exit' onClick={event => handleClick(event)}/>

    </div>

    </div>
  )
}

export default MainImg;