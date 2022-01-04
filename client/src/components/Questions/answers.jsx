import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import AnswersList from './answersList.jsx';
import AnswerPhoto from './answerPhoto.jsx';

const Answers = (props) => {
  const { body, date, answerer_name, helpfulness, photos } = props.answer
  const {question_id} = props.question_id

  const [reported, setReported] = useState(false)
  const [helpful, setHelpful] = useState(helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)

  function incrementHelpful(event) {
    event.preventDefault()
    if (!helpfulClicked) {
      axios.put(`/api/qa/questions/${question_id}/helpful`)
        .then(setHelpful(helpful + 1))
        .then(setHelpfulClicked(true))
    }
  }

  function reportReview(event) {
    event.preventDefault()
    if (!reported) {
      axios.put(`/api/qa/questions/${question_id}/report`)
        .then(setReported(true))
    }
  }

  return (
    <div>
      <div>A: {body}</div>
      <span style={{ marginLeft: "10px", fontSize: "15px", fontStyle: "italic" }}>
        by {answerer_name}, {moment(date).format('LL')} |
        Helpful? <a href='' style={{ color: "black" }} onClick={incrementHelpful}>Yes</a>
        <span>({helpful})</span> | <a href='' style={{ color: "black" }} onClick={reportReview}>{reported ? 'Reported' : 'Report'}</a>

      </span>
      <div>{photos.map(photo =>
        <AnswerPhoto key={photo.id} photo={photo} />
      )}</div>
    </div>
  )
}

export default Answers