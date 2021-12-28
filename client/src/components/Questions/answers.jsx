import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';

import IndividualQuestion from './individualQuestion.jsx';

const Answers = (props) => {
  const [user, setUser] = useState('')
  const [date, setDate] = useState('')

  const answerObj = props.answer
  function eachAnswer(obj) {
    for (var i in obj) {
      useEffect(() => {
        setUser(props.answer[`${i}`].answerer_name)
        setDate(props.answer[`${i}`].date)
      }, [user, date])
      return props.answer[`${i}`].body
    }
  }


  console.log('answers::::', props.answer)
  return (
    <div>
      <div style={{ marginTop: "10px" }}>A: {eachAnswer(answerObj)}
      </div>
       <span style={{marginLeft:"10px", fontSize:"15px", fontStyle:"italic"}}> by {user}, {date}</span>
    </div>
  )
}

export default Answers

/*
Need to fix answer list for each answer - possibly component
*/