import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';

import AppContext from '../../App/AppContext.jsx';
import IndividualQuestion from '../question/IndividualQuestion.jsx';
import UploadPhoto from './UploadPhoto.jsx';


const AnswerModal = (props) => {
  const [name, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('');
  const [photos, setPhotos] = useState([])

  const question_id = props.question_id

  function handleSubmitAnswer(event) {
    event.preventDefault()
    var valueObj = {
      'body': body,
      'name': name,
      'email': email,
      'photos': photos,
    }
    if (!valueObj.email || valueObj.name.length === 0 || valueObj.body.length === 0) {
      alert('One or more mandatory fields are missing!')
    } else {
      axios
        .post(`/api/qa/questions/${question_id}/answers`, valueObj)
        .then(res => alert('Answer submitted!'))
        .then(res => props.fetchAnswers)
        .then(props.toggle)

    }
  }


  function handleChange(e) {
    setImage(e.target.value)
  };

  function handleUpload(e) {
    setPhotos(prevState => ([...prevState, e]))
  }

  return (
    <div>
      <div style={modal_content}>
        <form onSubmit={handleSubmitAnswer}>
          <span style={close} onClick={props.toggle}>X</span>
          <u><h3>Add your answer!</h3></u>
          <small style={{ color: "grey"}}><span style={{ color: "red" }}>*</span> are required</small>
          <br />
          <br />
          <span style={{ color: "red" }}>*</span><label>Username
            <br />
            <input style={{width:"50%"}} type="text" value={name} placeholder="Example: jack543!" max="60" onChange={e => setUser(e.target.value)} /></label>
          <br />
          <br />
          <span style={{ color: "red" }}>*</span><label>Email
            <br />
            <input style={{width:"50%"}} type="email" value={email} placeholder="Example: jack@email.com" max="60" onChange={e => setEmail(e.target.value)} /> </label>
          <br />
          <br />
          <span style={{ color: "red" }}>*</span><label>Answer
            <br />
            <textarea rows="5" cols="33" value={body} placeholder="Type answer here..." maxLength="1000" onChange={e => setBody(e.target.value)} /></label>
          <br />
          <br />
          <input type="submit" value="Submit Answer" />
        </form>
        <br />
        <strong>Image Upload</strong>
        <UploadPhoto photos={photos} image={image} onChange={handleChange} upload={handleUpload} />
      </div>
    </div>
  )
}

export default AnswerModal

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
