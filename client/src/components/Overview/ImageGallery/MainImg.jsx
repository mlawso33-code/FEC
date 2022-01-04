import React, {useState, useContext} from 'react';
import Carousel from './Carousel.jsx';
import OverviewContext from '../OverviewContext.jsx';

const MainImg = () => {
  const { currentStyle, currentPic} = useContext(OverviewContext)
  const { popup, setPopup} = useContext(OverviewContext);
  const expandedView = document.querySelector("#popupBackground");

  function handleClick (event) {
    console.log('ive been clicked!')

    setPopup(!popup);

    // const mainPic = document.getElementById('mainImage');
    // mainPic.classList.toggle('expandedView');

  }

  return (
    <div>
    <div className='overviewBox1'>
      {currentPic &&
      <>
        <img src={currentPic} id='mainImage' onClick={event => handleClick(event)}/>
        <span className='carousel'>
          {currentStyle.photos.map(pic => <Carousel pic={pic} key={pic.url.slice(33, 40)} />)}
        </span>
      </>
        }

    </div>

    <div className='popup' style={{display: popup ? 'block' : 'none'}} >
      <img src={currentPic} onClick={event => handleClick(event)}/>
    </div>

    </div>
  )
}

export default MainImg;