import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';

import IndividualQuestion from './individualQuestion.jsx';

const Answers = (props) => {
  const answerObj = props.answer
  function eachAnswer(obj) {
    for (var i in obj) {
      return props.answer[`${i}`].body
    }
  }
  console.log('answers::::', props.answer)
  return (
    <div>
      <div style={{ marginTop: "10px" }}>A: {eachAnswer(answerObj)}
       by
      </div>

    </div>
  )
}

export default Answers

/*
Need to fix answer list for each answer - possibly component
*/