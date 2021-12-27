import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import AskQuestion from './askQuestion.jsx';

const QuestionsList = () => {
  const { product } = useContext(AppContext)
  const flexRow = {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  }
  return (
    <div>
      <AskQuestion />
      <div style={flexRow}>
        <div>Q: {product.name}</div>
        <span style={{ marginLeft: "auto" }}>Helpful? Yes(num) | Add Answer </span>
      </div>
      <div style={{ marginTop: "10px" }}>
        A: {product.slogan}
      </div>
    </div>
  )
}

export default QuestionsList