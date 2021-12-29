import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import AnswersList from './answersList.jsx';

const Answers = (props) => {
  const { body, date, answerer_name, helpfulness } = props.answer

  return (
    <div>
      <div>A: {body}</div>
      <span style={{ marginLeft: "10px", fontSize: "15px", fontStyle: "italic" }}>
        by {answerer_name}, {moment(date).format('LL')} | Helpful? Yes({helpfulness}) | Report
      </span>
    </div>
  )
}

export default Answers