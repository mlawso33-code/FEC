import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, percent } = props

  const containerStyle = {
    display: 'inline-block',
    height: 12,
    width: '20%',
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
  // <progress style={containerStyle} max='100' min='0' value={percent}></progress>
  )
}

export default ProgressBar
