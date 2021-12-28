import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AppContext from '../App/AppContext.jsx';
import QuestionContext from './QuestionContext.jsx';

import QuestionsList from './questionsList.jsx';


const Questions = () => {
  return (
    <div>
      <h1>Questions and Answers</h1>
      <QuestionsList />
    </div>
  )
}

export default Questions