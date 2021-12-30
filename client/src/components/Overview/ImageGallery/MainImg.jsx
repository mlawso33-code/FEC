import React, {useState, useContext} from 'react';
import Carousel from './Carousel.jsx';
import OverviewContext from '../OverviewContext.jsx';

const MainImg = () => {
  const { currentStyle, setCurrentStyle } = useContext(OverviewContext)

  // const { products, styles } = useContext(AppContext);

  return (
    <div className='overviewBox1'>
      {console.log("MAIN IMG CURRENT STYLE:::", currentStyle)}
      {currentStyle &&
      <>
        <img src={currentStyle.photos[0].url} className='mainImage'/>
        <div className='carousel'>
          {currentStyle.photos.map(pic => <Carousel pic={pic} key={pic.url.slice(33, 40)} />)}
        </div>
      </>
        }
    </div>
  )
}

export default MainImg;