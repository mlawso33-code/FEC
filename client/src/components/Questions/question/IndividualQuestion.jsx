import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../../App/AppContext.jsx';

import AnswersList from '../answers/AnswersList.jsx';
import AnswerModal from '../answers/AnswerModal.jsx';

const IndividualQuestion = (props) => {
  const { question_helpfulness, question_body, question_id, reported } = props.question
  const [helpful, setHelpful] = useState(question_helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)
  const [add_answer, setAdd] = useState(false)
  const [reportedQuestion, setReportedQuestion] = useState(reported)
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

  function reportQuestion(event) {
    event.preventDefault()
    if (!reportedQuestion) {
      axios.put(`/api/qa/questions/${question_id}/report`)
        .then(setReportedQuestion(true))
    }
  }

  return (
    <div>
      <div style={eachQuestion}>
        <div style={questionRow}>
          <strong style={qLabel}>Q: </strong> {question_body}
          <div style={questionExtras}>
            <span>Helpful? | </span>
            <a href='' style={blackText} onClick={incrementHelpful}>Yes</a>
            <span>({helpful})</span> | <a href='' style={blackText} onClick={reportQuestion}>{reportedQuestion ? 'Reported' : 'Report'}</a> |
            <strong style={addButton} onClick={addAnswer}> Add Answer</strong>
            <div>{add_answer ? <AnswerModal toggle={addAnswer} question_id={question_id} fetchAnswers={fetchAnswers} /> : null}</div>
          </div>
        </div>
        <AnswersList question_id={question_id} question={props.question}
          fetchQuestions={props.fetchQuestions} fetchAnswers={fetchAnswers} answers={answers} />
      </div>
    </div>
  )
}

export default IndividualQuestion

const eachQuestion = {
  border: "solid"
}
const questionRow = {
  display: "flex",
  flexDirection: "row"
}
const qLabel = {
  marginRight: "5px"
}
const questionExtras = {
  marginLeft: "auto"
}
const blackText = {
  color: "black"
}

const addButton = {
  cursor: "pointer"
}