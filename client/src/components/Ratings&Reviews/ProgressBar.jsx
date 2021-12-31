import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, percent } = props

  const containerStyle = {
    display: 'inline-block',
    height: 10,
    width: '30%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyle = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}></div>
    </div>
  )
}

export default ProgressBar
