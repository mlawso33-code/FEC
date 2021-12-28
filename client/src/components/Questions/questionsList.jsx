import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';

import AskQuestion from './askQuestion.jsx';
import IndividualQuestion from './individualQuestion.jsx';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([])
  const { product } = useContext(AppContext)
  const { id } = product

  function fetchQuestions(product_id) {
    axios
      .get(`/api/qa/questions?product_id=${product_id}`)
      .then(res => setQuestions(res.data.results))
  }

  useEffect(() => {
    if (JSON.stringify(product) !== '{}') {
      fetchQuestions(id)
    }
  }, [id])

  const flexRow = {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  }
  return (
    <div>
      <AskQuestion />
      <div style={{ marginTop: "20px" }}>
        {questions.map((question => {
          return (<IndividualQuestion key={question.question_id} question={question} />)
        }))}
      </div>
    </div>
  )
}

export default QuestionsList