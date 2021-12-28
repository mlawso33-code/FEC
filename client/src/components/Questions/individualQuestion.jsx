import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';


const IndividualQuestion = (props) => {
  const answerObj = props.question.answers
  function eachAnswer(obj) {
    for (var i in obj) {
      return props.question.answers[`${i}`].body
    }
  }
  return (
    <div style={{ border: "solid" }}>
      <div style={{ display: "flex", flexDirection: "row", maxHeight:"50vh", overflow:"scroll"}}>
        Q: {props.question.question_body}
        <span style={{ marginLeft: "auto" }}>Helpful? Yes(num) | Add Answer </span>
      </div>
      <div style={{ marginTop: "10px" }}>A: {eachAnswer(answerObj)}</div>
    </div>
  )
}

export default IndividualQuestion

/*
Need to fix answer list for each answer - possibly component
*/