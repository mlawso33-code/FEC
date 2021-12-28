import React from 'react';
import Carousel from './Carousel.jsx';

const MainImg = (props) => {
  // const { products, styles } = useContext(AppContext);

  return (
    <div>
      {console.log("hello:::", props.style.photos[1])}
      <img src={props.style.photos[0].url} style={imageStyle}/>
      <div className='carousel' style={carouselStyle}>
        {props.style.photos.map(pic =>
        <Carousel pic={pic} key={pic.url.slice(33, 40)}/>)}
      </div>
    </div>
  )
}

let imageStyle = {
  width: 700,
  height: 600,
  border: '2px solid gray',
  borderRadius: 5
}

let carouselStyle = {
  position: 'absolute',
  left: 20,
  top: 150

}

export default MainImg;