import React, {useState} from 'react'

const NewReviewPhoto = ({ photo }) => {
  return (
    <span>
      <img src={photo} style={photoStyle}/>
    </span>
  )
}

export default NewReviewPhoto

const photoStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "5px",
  width: "125px",
  height: "125px",
}
