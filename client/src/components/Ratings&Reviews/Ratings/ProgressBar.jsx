import React from "react";

const ProgressBar = (props) => {
  const { percent } = props

  const containerStyle = {
    display: 'inline-block',
    height: 12,
    width: '15%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginRight: 5
  }

  const fillerStyle = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: 'green',
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
