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
    <div>
      <div style={modal_content}>
        <form onSubmit={handleSubmitQuestion}>
          <span style={close} onClick={props.toggle}>X</span>
          <h3>Ask a question!</h3>
          <small style={greyText}><span style={redText}>*</span> are required</small>
          <br />
          <br />
          <span style={redText}>*</span><label>Username:
            <br />
            <input style={width50} type="text" value={name} placeholder="Example: jack543!" max="60" onChange={e => setUser(e.target.value)} /></label>
          <br />
          <br />
          <span style={redText}>*</span><label>Email:
            <br />
            <input style={width50} type="email" value={email} placeholder="Example: jack@email.com" max="60" onChange={e => setEmail(e.target.value)} /> </label>
          <br />
          <br />
          <span style={redText}>*</span><label>Question:
            <br />
            <textarea rows="5" cols="33" value={body} placeholder="Type question here..." max="1000" onChange={e => setBody(e.target.value)} /></label>
          <br />
          <br />
          <input type="submit" value="Submit Question" />
        </form>
      </div>
    </div>
  )
}

export default QuestionModal

const redText = {
  color:"red"
}
const greyText = {
  color:"grey"
}
const width50 = {
  width:"50%"
}

const modal_content = {
  backgroundColor: "white",
  position: "fixed",
  top: "20%",
  left: "30%",
  width: "40%",
  padding: "20px",
  borderRadius: "5px",
  border: "2px solid black"
}

const close = {
  color: "Black",
  float: "right",
  cursor: "pointer"
}
