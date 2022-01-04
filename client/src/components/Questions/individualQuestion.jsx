import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';

import AnswersList from './answersList.jsx';
import AnswerModal from './answerModal.jsx';


const IndividualQuestion = (props) => {
  const { question_helpfulness, question_body, question_id } = props.question
  const [helpful, setHelpful] = useState(question_helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)
  const [add_answer, setAdd] = useState(false)
  const [check, setCheck] = useState(false)
  const [answers, setAnswers] = useState([])

  function incrementHelpful(event) {
    event.preventDefault()
    if (!helpfulClicked) {
      axios.put(`/api/qa/questions/${question_id}/helpful`)
        .then(setHelpful(helpful + 1))
        .then(setHelpfulClicked(true))
    }
  }

  function fetchAnswers() {
    axios
      .get(`/api/qa/questions/${question_id}/answers?page=1&count=100`)
      .then(res => setAnswers(res.data.results))

  }

  useEffect(() => {
    fetchAnswers()
  }, [])

  function addAnswer() {
    setAdd(!add_answer)
  }

  function sellerCheck() {
    setCheck(!check)
  }

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
            {/* need to change button back to text*/}
            <button style={{ color: "black" }} onClick={addAnswer}>Add Answer</button>
            <div>{add_answer ? <AnswerModal toggle={addAnswer} question_id={question_id} fetchAnswers={fetchAnswers} check={check} sellerCheck={sellerCheck}/> : null}</div>
          </div>
        </div>
        <AnswersList question_id={question_id} question={props.question} fetchQuestions={props.fetchQuestions} fetchAnswers={fetchAnswers} answers={answers} check={check}/>
      </div>
    </div>
  )
}

export default IndividualQuestion
