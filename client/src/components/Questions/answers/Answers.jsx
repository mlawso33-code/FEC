import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

import AppContext from '../../App/AppContext.jsx';

import AnswersList from './AnswersList.jsx';
import AnswerPhoto from './AnswerPhoto.jsx';

const Answers = (props) => {
  const [helpful, setHelpful] = useState(props.answer.helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false)

  const { body, date, answerer_name, helpfulness, photos } = props.answer
  const { question_id } = props.question_id
  const answer_id = props.answer

  function incrementHelpful(event) {
    event.preventDefault()
    if (!helpfulClicked) {
      axios.put(`/api/qa/answers/${answer_id}/helpful`)
        .then(setHelpful(helpful + 1))
        .then(setHelpfulClicked(true))
    }
  }

  return (
    <div>
      <div><strong>A: </strong>{body}</div>
      <span style={{ marginLeft: "10px", fontSize: "15px", fontStyle: "italic" }}>
        by {answerer_name}, {moment(date).format('LL')} |
        Helpful? <a href='' style={{ color: "black" }} onClick={incrementHelpful}>Yes</a>
        <span>({helpful})</span>
      </span>
      <div>{photos.map(photo =>
        <AnswerPhoto key={photo.id} photo={photo} />
      )}</div>
    </div>
  )
}

export default Answers