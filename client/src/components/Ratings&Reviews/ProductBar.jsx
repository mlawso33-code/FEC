import React from "react"

const ProductBar = ({chartic}) => {
  const value = Number(chartic.value)

  const barStyle = {
    height: 10,
    width: '30%',
    backgroundColor: "#e0e0de",
  }

  // arrowStyle = {

  // }

  return (
    <progress style={barStyle} type='range' max='5' min = '1' value={value}>
      {/* <div style={arrowStyle}></div> */}
    </progress>
  )
}

export default ProductBar