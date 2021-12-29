import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';

import AnswersList from './answersList.jsx';


const IndividualQuestion = (props) => {

  const helpfulNum = props.question.question_helpfulness
  return (
    <div style={{ maxHeight: "20vh", overflow: "scroll" }}>
      <div style={{ border: "solid" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          Q: {props.question.question_body}
          <span style={{ marginLeft: "auto" }}>Helpful? Yes({helpfulNum}) | Add Answer </span>
        </div>
        <AnswersList question_id={props.question.questions_id} question={props.question}/>
      </div>
    </div>
  )
}

export default IndividualQuestion
