import React from 'react';

const ProgressBar = (props) => {
  const { percent } = props

  const containerStyle = {
    display: 'inline-block',
    height: 12,
    width: '65%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    marginRight: 5
  }

  const fillerStyle = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: '#414833',
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}></div>
    </div>
  )
}

export default ProgressBar
