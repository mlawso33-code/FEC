import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';


const AskQuestion = () => {
  const inputStyle = {
    width: "70%",
  }
  const buttonStyle = {
    cursor: "pointer",
  }
  return (
    <div style={{ position: "relative" }}>
      <input type="text" defaultValue="HAVE A QUESTION? SEARCH FOR ANSWERS..." style={inputStyle} />
      <button type="submit" style={buttonStyle}>Magnifying Glass</button>
    </div>
  )
}

export default AskQuestion