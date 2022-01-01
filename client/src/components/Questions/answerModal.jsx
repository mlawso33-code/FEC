import React, { useState, useEffect, useContext, useRef } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import IndividualQuestion from './individualQuestion.jsx';
import UploadPhoto from './uploadPhoto.jsx';


const AnswerModal = (props) => {
  const [answers, setAnswers] = useState([])
  const [name, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState('')
  const [image, setImage] = useState({ preview: "", raw: "" });
  const question_id = props.question_id

  function fetchAnswers() {
    axios
      .get(`/api/qa/questions/${question_id}/answers?page=1&count=100`)
      .then(res => setAnswers(res.data.results))

  }

  function handleSubmitAnswer(event) {
    event.preventDefault()
    var valueObj = {
      'body': body,
      'name': name,
      'email': email,
      'photos': [photos]
    }
    if (!valueObj.email || valueObj.name.length === 0 || valueObj.body.length === 0) {
      alert('One or more mandatory fields are missing!')
    } else {
      axios
        .post(`/api/qa/questions/${question_id}/answers`, valueObj)
        .then(res => alert('Answer submitted!'))
        //.then(res => fetchAnswers())
        .then(props.toggle)
    }
  }


  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };


  return (
    <div>
      <div style={modal_content}>
        <form onSubmit={handleSubmitAnswer}>
          <span style={close} onClick={props.toggle}>X</span>
          <h3>Ask a question!</h3>
          <label style={{ color: "grey", fontSize: "10px" }}>* are mandatory</label>
          <br />
          <span style={{ color: "red" }}>*</span><label>Username:
            <input type="text" value={name} placeholder="Example: jack543!" max="60" onChange={e => setUser(e.target.value)} /></label>
          <br />
          <span style={{ color: "red" }}>*</span><label>Email:
            <input type="email" value={email} placeholder="Example: jack@email.com" max="60" onChange={e => setEmail(e.target.value)} /> </label>
          <br />
          <span style={{ color: "red" }}>*</span><label>Answer:
            <input type="text" value={body} placeholder="Type question here..." max="1000" onChange={e => setBody(e.target.value)} /></label>
          <br />
          <UploadPhoto photo={photos} image={image} onChange={handleChange}/>
          <br />
          <input type="submit" value="Submit Answer" />
        </form>
      </div>
    </div>
  )
}

export default AnswerModal



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
