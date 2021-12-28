import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';

import AskQuestion from './askQuestion.jsx';
import IndividualQuestion from './individualQuestion.jsx';

const QuestionsList = () => {
  const { product } = useContext(AppContext)
  const product_id = product.id

  const [questions, setQuestions] = useState([])
  const [page, setPage] = useState(1)
  const [count, setCounter] = useState(2)
  const [sort, setSort] = useState('helpfulness')

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
    //console.log('triggered')
    setCounter(count + 2)
    //console.log('count:::', count)
    fetchQuestions()
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
      <AskQuestion />
      <div style={{ marginTop: "20px", maxHeight: "50vh", overflow: "scroll" }}>
        {questions.map((question => {
          return (<IndividualQuestion key={question.question_id} question={question} />)
        }))}
      </div>
      <span><button onClick={handleMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button>ADD A QUESTION +</button></span>
    </div>
  )
}

export default QuestionsList