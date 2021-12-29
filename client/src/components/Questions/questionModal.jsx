import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import QuestionsList from './questionsList.jsx';

const QuestionModal = (props) => {
  const [question, setQuestion] = useState({})
  const [username, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  function handleSubmitQuestion() {
    console.log('submit triggered')
  }

  return (
    <div>
      <div style={modal_content}>
        <form>
          <span style={close} onClick={props.toggle}>X</span>
          <h3>Ask a question!</h3>
          <label style={{ color: "grey", fontSize: "10px" }}>* are mandatory</label>
          <br />
          <label>Username<span style={{ color: "red" }}>*</span>: <input type="text" name="name" defaultValue="Example: jack543!"></input></label>
          <br />
          <label>Email<span style={{ color: "red" }}>*</span>: <input type="text" name="email" defaultValue="Example: jack@email.com"></input> </label>
          <br />
          <label>Question<span style={{ color: "red" }}>*</span>: <input type="text" name="question" defaultValue="Type question here..." max="1000"></input></label>
          <br />
          <button onClick={handleSubmitQuestion}>Submit Question</button>
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
