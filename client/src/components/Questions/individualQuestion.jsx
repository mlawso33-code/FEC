import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';

import AnswersList from './answersList.jsx';


const IndividualQuestion = (props) => {
  const {question_helpfulness, question_body, question_id} = props.question
  const [helpful, setHelpful] = useState(question_helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)
  const [reported, setReported] = useState(false)

  function incrementHelpful(event) {
    event.preventDefault()
    if (!helpfulClicked) {
      axios.put(`/api/qa/questions/${question_id}/helpful`)
        .then(setHelpful(helpful + 1))
        .then(setHelpfulClicked(true))
    }
  }

  function reportQuestion(event) {
    event.preventDefault()
    if(!reported) {
      axios.put(`/api/qa/questions/${question_id}/report`)
      .then(setReported(true))
    }
  }


  //const helpfulNum = props.question.question_helpfulness
  return (
    <div style={{ maxHeight: "20vh", overflow: "scroll" }}>
      <div style={{ border: "solid" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          Q: {question_body}
          <div style={{ marginLeft: "auto" }}>
            <span>Helpful?</span>
            <a href='' style={{ color: "black" }} onClick={incrementHelpful}>Yes</a>
            <span>({helpful})</span>
            |
            <a href='' style={{ color: "black" }} onClick={reportQuestion}>{reported ? 'Reported' : 'Report'}</a>
          </div>
        </div>
        <AnswersList question_id={question_id} question={props.question} fetchQuestions={props.fetchQuestions} />
      </div>
    </div>
  )
}

export default IndividualQuestion
