import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';
import QuestionContext from './question/QuestionContext.jsx';

import QuestionsList from './question/QuestionsList.jsx';


const Questions = () => {
  return (
    <div className="questionBorder">
      <h2>Questions and Answers</h2>
      <QuestionsList />
    </div>
  )
}

export default Questions