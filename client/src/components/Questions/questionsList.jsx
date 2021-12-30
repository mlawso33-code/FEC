import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';
import { HelpfulContext } from './QuestionContext.jsx';

import SearchQuestion from './searchQuestion.jsx';
import IndividualQuestion from './individualQuestion.jsx';
import QuestionModal from './questionModal.jsx';

const QuestionsList = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id

  const [questions, setQuestions] = useState([])
  const [sort, setSort] = useState('helpfulness')
  const [flag, setFlag] = useState(false)
  const [numOfQuestions, setNumOfQuestions] = useState(4)

  const displayedQuestions = questions.slice(0, numOfQuestions)

  function fetchQuestions() {
    axios
      .get(`/api/qa/questions/?page=1&count=100&sort=${sort}&product_id=${product_id}`)
      .then(res => setQuestions(res.data.results))

  }

  useEffect(() => {
    if (JSON.stringify(product) !== '{}') {
      fetchQuestions()
    }
  }, [product])



  const handleMoreQuestions = () => {
    setNumOfQuestions(numOfQuestions + 2)
  }

  function addQuestion() {
    setFlag(!flag)
  }

  function handleSort() {
    setSort(event.target.value)
    fetchQuestions()
  }

  return (
    <div>
      <SearchQuestion />
      <div style={{ marginTop: "20px", maxHeight: "50vh", overflow: "scroll" }}>
        {displayedQuestions.map((question => {
          return (<IndividualQuestion key={question.question_id} question={question} />)
        }))}
      </div>
      <span>
        {numOfQuestions < questions.length &&
          <button onClick={handleMoreQuestions}>MORE ANSWERED QUESTIONS</button>}
        <button onClick={addQuestion}> ADD A QUESTION + </button>
        <div>{flag ? <QuestionModal toggle={addQuestion} product_id={product_id} /> : null}</div></span>
    </div>
  )
}

export default QuestionsList

const flexRow = {
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",
}
