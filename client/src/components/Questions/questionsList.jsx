import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../App/AppContext.jsx';

const Questions = () => {
  return (
    <div>
      <h1>Questions & Answers</h1>
      <div>
        <QuestionsList />
      </div>
    </div>
  )
}

export default Questions