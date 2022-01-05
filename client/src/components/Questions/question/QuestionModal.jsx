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
          <small style={{ color: "grey" }}><span style={{ color: "red" }}>*</span> are required</small>
          <br />
          <br />
          <span style={{ color: "red" }}>*</span><label>Username:
            <br />
            <input style={{ width: "50%" }} type="text" value={name} placeholder="Example: jack543!" max="60" onChange={e => setUser(e.target.value)} /></label>
          <br />
          <br />
          <span style={{ color: "red" }}>*</span><label>Email:
            <br />
            <input style={{ width: "50%" }} type="email" value={email} placeholder="Example: jack@email.com" max="60" onChange={e => setEmail(e.target.value)} /> </label>
          <br />
          <br />
          <span style={{ color: "red" }}>*</span><label>Question:
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



// const modal = {
//   position: "relative",
//   zIndex: "1",
//   width: "100%",
//   height: "100%",
//   top:"10px",
//   backgroundColor: "rgba(0, 0, 0, 0.25)"
// }

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
