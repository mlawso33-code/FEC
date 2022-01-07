import React from 'react'

const ProductBar = ({chartic}) => {
  const value = (Number(chartic.value) / 5 ) * 100

  const barStyle = {
    height: 12,
    width: '95%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    marginBottom: 5
  }

  const arrowStyle = {
    position: 'relative',
    left: `${value}%`,
    fontSize: 12,
  }

  return (
    <div style={barStyle}>
      <div style={arrowStyle}>
        <i className='fa fa-chevron-circle-down' aria-hidden='true'></i>
      </div>
    </div>
  )
}

export default ProductBar