import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../App/AppContext.jsx';
import QuestionsList from './questionsList.jsx';


const Questions = () => {
  //const [question, setQuestion] = useState({})

  // function fetchQuestions() {
  //   axios
  //     .get('/api/qa')
  //     .then(res => console.log(res))
  // }

  // useEffect(() => {
  //   fetchQuestions()
  // }, [])

  return (
    <div>
      <h1>Questions and Answers</h1>
      <QuestionsList />
    </div>
  )
}

export default Questions