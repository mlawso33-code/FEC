import React from "react"

const ProductBar = ({chartic}) => {
  const value = (Number(chartic.value) / 5 ) * 100

  const barStyle = {
    position: 'relative',
    height: 12,
    width: '30%',
    backgroundColor: "#e0e0de",
    borderRadius: 50
  }

  const arrowStyle = {
    position: 'absolute',
    left: `${value}%`,
    fontSize: 12,
  }

  return (
    <div style={barStyle}>
      <div style={arrowStyle}>
        <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default ProductBar