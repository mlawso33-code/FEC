import React from 'react';

const Carousel = (props) => {



  return (
      <img src={props.pic.url} className='carouselItem'/>
  )
}

// let carouselItem = {
//   width: 100,
//   height: 75,
//   border: '2px solid white',
//   borderRadius: 10,
//   outline: 5
// }

export default Carousel;