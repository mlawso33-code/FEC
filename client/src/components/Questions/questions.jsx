import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';
import QuestionContext from './question/QuestionContext.jsx';

import QuestionsList from './question/QuestionsList.jsx';


const Questions = () => {
  return (
    <div className="qaa">
      <h1 className="questionsTitle">Questions &amp; Answers</h1>
      <div>
        <QuestionsList />
      </div>
    </div>
  )
}

export default Questions