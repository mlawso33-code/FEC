import React, { useState, useEffect, useContext, useRef } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import IndividualQuestion from './individualQuestion.jsx';
import UploadPhoto from './uploadPhoto.jsx';


const AnswerModal = (props) => {
  //const [answers, setAnswers] = useState([])
  const [name, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('');
  const [photos, setPhotos] = useState([])

  const question_id = props.question_id
  const check = props.check
  const sellerCheck = props.sellerCheck

  console.log('check::::', check)

  function handleSubmitAnswer(event) {
    event.preventDefault()
    var valueObj = {
      'body': body,
      'name': name,
      //'seller': check,
      'email': email,
      'photos': photos

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
          <label style={{ color: "grey", fontSize: "15px", fontWeight: "bold" }}><span style={{ color: "red" }}>*</span> are required</label>
          <br />
          {/* <input type="checkbox" name="seller" id="seller" onClick={sellerCheck}/>
          <label for="seller">Seller?</label> */}
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
            <textarea rows="5" cols="33" value={body} placeholder="Type question here..." maxLength="1000" onChange={e => setBody(e.target.value)} /></label>
          <br />
          <input type="submit" value="Submit Answer" />
        </form>
        <br />
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
