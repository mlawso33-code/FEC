import React from 'react';

const Carousel = (props) => {



  return (
    <div>
      <img src={props.pic.url} style={carouselItem}/>
    </div>
  )
}

let carouselItem = {
  width: 100,
  height: 75,
  border: '2px solid white',
  borderRadius: 10,
  outline: 5
}

export default Carousel;