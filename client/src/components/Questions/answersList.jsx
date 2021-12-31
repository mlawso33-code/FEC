import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import IndividualQuestion from './individualQuestion.jsx';
import Answers from './answers.jsx';



const AnswersList = (props) => {
  const [answers, setAnswers] = useState([])
  const [page, setPage] = useState(1)
  const [numOfAnswers, setNumOfAnswers] = useState(2)

  const { question_id } = props.question

  const displayedAnswers = answers.slice(0, numOfAnswers)

  function fetchAnswers() {
    axios
      .get(`/api/qa/questions/${question_id}/answers?page=1&count=100`)
      .then(res => setAnswers(res.data.results))

  }

  useEffect(() => {
    fetchAnswers()
  }, [])

  function increaseAnswers() {
    setNumOfAnswers(numOfAnswers + 1)
  }

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        {displayedAnswers.map((answer =>
          <Answers key={answer.answer_id} answer={answer} />
        ))}
      </div>
      {(numOfAnswers < answers.length || numOfAnswers > 1) &&
        <button style={{ cursor: "pointer" }} onClick={increaseAnswers}>Load More Answers</button>}
    </div>
  )
}

export default AnswersList
