import React, {useState, useContext} from 'react';
import Carousel from './Carousel.jsx';
import OverviewContext from '../OverviewContext.jsx';

const MainImg = () => {
  const { currentStyle, currentPic} = useContext(OverviewContext)

  return (
    <div className='overviewBox1'>
      {currentPic &&
      <>
        <img src={currentPic} className='mainImage'/>
        <div className='carousel'>
          {currentStyle.photos.map(pic => <Carousel pic={pic} key={pic.url.slice(33, 40)} />)}
        </div>
      </>
        }
    </div>
  )
}

export default MainImg;