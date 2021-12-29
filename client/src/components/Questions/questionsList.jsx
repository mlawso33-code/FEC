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
  const [page, setPage] = useState(1)
  const [count, setCounter] = useState(4)
  const [sort, setSort] = useState('helpfulness')
  const [flag, setFlag] = useState(false)

  function fetchQuestions() {
    axios
      .get(`/api/qa/questions/?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`)
      .then(res => setQuestions(res.data.results))

  }

  useEffect(() => {
    if (JSON.stringify(product) !== '{}') {
      fetchQuestions()
    }
  }, [product])



  const handleMoreQuestions = () => {
    setCounter(count + 2)
    fetchQuestions()
  }

  function addQuestion() {
    console.log('add question triggered')
    setFlag(true)
  }

  function handleSort() {
    setSort(event.target.value)
    fetchQuestions()
  }
  const flexRow = {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  }
  return (
    <div>
      <SearchQuestion />
      <div style={{ marginTop: "20px", maxHeight: "50vh", overflow: "scroll" }}>
        {questions.map((question => {
          return (<IndividualQuestion key={question.question_id} question={question} />)
        }))}
      </div>
      <span><button onClick={handleMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button onClick={addQuestion}>{flag ? <QuestionModal toggle={flag} />: null} ADD A QUESTION + </button></span>
    </div>
  )
}

export default QuestionsList