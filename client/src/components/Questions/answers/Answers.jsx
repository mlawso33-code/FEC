import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

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
    <div className="eachAnswer">
      <strong className="qLabel">A: </strong>{body}
      <div>{photos.map(photo =>
        <AnswerPhoto key={photo.id} photo={photo} />
      )}</div>
      <span className="answererDetails">
        by <span className="bolder">{answerer_name}</span>, {moment(date).format('LL')} |
        Helpful? <a href='' className="blackText" onClick={incrementHelpful}>Yes</a>
        <span className="helpfulNum"> ({helpful})</span>
      </span>
    </div>
  )
}

export default Answers