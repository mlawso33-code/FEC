import React from 'react';

const StylePic = (props) => {

  return (
    <div style={styleItem}>
      <img src={props.pic.thumbnail_url} />
    </div>
  )
}

let styleItem = {
  height: '10%',
  border: '2px solid white',
  borderRadius: 10,
  outline: 5
}

export default StylePic