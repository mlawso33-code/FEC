import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import QuestionsList from './questionsList.jsx';

const QuestionModal = (props) => {
  const [flag, setFlag] = useState(false)


  function showModal() {
    setFlag(true)
  }

  function handleSubmitQuestion() {
    console.log('submit triggered')
  }

  return (
    <div>
      <form>
        <label style={{color:"grey", fontSize:"10px"}}>* are mandatory</label>
        <label>Username<span style={{color:"red"}}>*</span>: <input type="text" name="name" defaultValue="Example: jack543!"></input></label>
        <label>Email: <input type="text" name="email" defaultValue="Example: jack@email.com"></input> </label>
        <label>Question: <input type="text" name="question" defaultValue="Type question here..." max="1000"></input></label>
        <button type="submit" onClick={handleSubmitQuestion}>Submit Question</button>
        </form>
    </div>
  )
}

export default QuestionModal