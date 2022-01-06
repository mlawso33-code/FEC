import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

import AppContext from '../../App/AppContext.jsx';

import IndividualQuestion from '../question/IndividualQuestion.jsx';
import Answers from './Answers.jsx';

const AnswersList = (props) => {
  const [page, setPage] = useState(1)
  const [numOfAnswers, setNumOfAnswers] = useState(2)

  const { question_id } = props.question
  const answers = props.answers
  const displayedAnswers = answers.slice(0, numOfAnswers)

  function increaseAnswers() {
    setNumOfAnswers(numOfAnswers === answers.length ? 2 : answers.length)
  }

  return (
    <span>
      <span className="answerList">
        {displayedAnswers.map((answer =>
          <Answers key={answer.answer_id} answer={answer} question_id={question_id} />
        ))}
      </span>
      {answers.length > 2 && (
        <div>
          <strong className="showHide" onClick={increaseAnswers}>
            {numOfAnswers === answers.length ? 'Hide' : 'Load More'} Answers({answers.length - numOfAnswers})</strong>
        </div>)}
      {answers.length === 0 &&
        <p className="noAnswer">No answers for this question. Click <span className="redText">Add Answer</span> button on the right!</p>}
    </span>
  )
}

export default AnswersList

/* Notes:::
  -need to make new answer render on submit
*/