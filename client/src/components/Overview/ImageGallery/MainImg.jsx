import React, {useState, useContext} from 'react';
import Carousel from './Carousel.jsx';
import OverviewContext from '../OverviewContext.jsx';

const MainImg = () => {
  const { styles } = useContext(OverviewContext)

  // const { products, styles } = useContext(AppContext);

  return (
    <div style={{position: 'absolute'}}>
      {console.log("MAIN IMG STYLES:::", styles[0])}
      {styles.length &&
      <>
        <img src={styles[0].photos[0].url} style={imageStyle}/>
        <div className='carousel' style={carouselStyle}>
          {styles[0].photos.map(pic => <Carousel pic={pic} key={pic.url.slice(33, 40)} />)}
        </div>
      </>
        }
    </div>
  )
}

let imageStyle = {
  position: 'relative',
  border: '2px solid gray',
  width: '60%',
  height: '50%',
  borderRadius: 5
}

let carouselStyle = {
  position: 'absolute',
  flexDirection: 'column',
  left: 15,
  top: 50

}

export default MainImg;