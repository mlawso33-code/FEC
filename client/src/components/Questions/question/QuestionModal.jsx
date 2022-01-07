import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';

import AppContext from '../../App/AppContext.jsx';
import QuestionsList from './QuestionsList.jsx';

const QuestionModal = (props) => {
  const [name, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const product_id = props.product_id

  function handleSubmitQuestion(event) {
    event.preventDefault()
    var valueObj = {
      'body': body,
      'name': name,
      'email': email,
      'product_id': product_id
    }
    if (!valueObj.email || valueObj.name.length === 0 || valueObj.body.length === 0) {
      alert('One or more mandatory fields are missing!')
    } else {
      axios
        .post('/api/qa/questions', valueObj)
        .then(res => alert('Question submitted!'))
        .then(res => props.fetchQuestions)
        .then(props.toggle)
    }
  }

  return (
    <div className="questionModal">
      <div className="questionModalContent">
        <div className="questionModalHeader">
          <span className="closeX" onClick={props.toggle}>X</span>
          <h3>Ask a question!</h3>
        </div>
        <form className="questionModalBody" onSubmit={handleSubmitQuestion}>
          <small className="greyText"><span className="redText">* </span> required</small>
          <br />
          <br />
          <span className="redText">*</span><label>Username:
            <br />
            <input className="width50" type="text" value={name} placeholder="Example: jack543!" max="60" onChange={e => setUser(e.target.value)} /></label>
          <br />
          <br />
          <span className="redText">* </span><label>Email:
            <br />
            <input className="width50" type="email" value={email} placeholder="Example: jack@email.com" max="60" onChange={e => setEmail(e.target.value)} /> </label>
          <br />
          <br />
          <span className="redText">* </span><label>Question:
            <br />
            <textarea rows="5" cols="65" value={body} placeholder="Type question here..." max="1000" onChange={e => setBody(e.target.value)} /></label>
          <br />
          <br />
          <input className="questionButton" type="submit" value="Submit Question" />
        </form>
      </div>
    </div>
  )
}

export default QuestionModal