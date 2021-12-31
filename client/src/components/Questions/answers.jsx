import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import AnswersList from './answersList.jsx';
import AnswerPhoto from './answerPhoto.jsx';

const Answers = (props) => {
  const { body, date, answerer_name, helpfulness, photos } = props.answer

  return (
    <div>
      <div>A: {body}</div>
      <span style={{ marginLeft: "10px", fontSize: "15px", fontStyle: "italic" }}>
        by {answerer_name}, {moment(date).format('LL')} | Helpful? Yes({helpfulness}) | Report
      </span>
      <div>{photos.map(photo =>
        <AnswerPhoto key={photo.id} photo={photo} />
      )}</div>
    </div>
  )
}

export default Answers