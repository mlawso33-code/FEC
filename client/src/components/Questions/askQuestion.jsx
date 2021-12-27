import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';


const AskQuestion = () => {
  return (
    <div>
      <input type="text" defaultValue="HAVE A QUESTION? SEARCH FOR ANSWERS..." style={{width: "70%"}}/>
      <button type="submit">Magnifying Glass</button>
    </div>
  )
}

export default AskQuestion