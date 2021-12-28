import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';

import IndividualQuestion from './individualQuestion.jsx';


//need to refactor answers to use API request for each answer
const Answers = (props) => {
  const [user, setUser] = useState('')
  const [date, setDate] = useState('')


  const answerObj = props.answer
  //const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  function eachAnswer(obj) {
    for (var i in obj) {
      useEffect(() => {
        setUser(props.answer[`${i}`].answerer_name)
        setDate(props.answer[`${i}`].date)
      }, [])
      return props.answer[`${i}`].body
    }
  }

  function dateFormat(date) {
    if (date.length > 1) {
      const MONTHS = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
      }
      date = date.split('-')
      let day = date[2].slice(0, 2)
      let year = date[0]
      let month = Object.keys(MONTHS)[0]
      for (var key in MONTHS) {
        if (date[1] === key) {
          month = MONTHS[key]
        }
        date = date.concat(`${month} ${day}, ${year}`)
        console.log('day::::', day)
        console.log('date::::', date)
      }
    }
    return date
  }


  //console.log('answers::::', props.answer)
  return (
    <div>
      <div style={{ marginTop: "10px" }}>A: {eachAnswer(answerObj)}
      </div>
      <span style={{ marginLeft: "10px", fontSize: "15px", fontStyle: "italic" }}> by {user}, {dateFormat(date)}</span>
    </div>
  )
}

export default Answers

/*
Need to fix answer list for each answer - possibly component
*/