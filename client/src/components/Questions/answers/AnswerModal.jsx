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
    <div className="answerModal">
      <div className="answerModalContent">
        <div className="answerModalHeader">
          <span className="closeX" onClick={props.toggle}>X</span>
          <div>Add your answer!</div>
        </div>
        <form className="answerModalBody" onSubmit={handleSubmitAnswer}>
          <small className="greyText"><span className="redText">* </span>required</small>
          <br />
          <br />
          <span className="redText">* </span><label>Username
            <br />
            <input className="width50" type="text" value={name} placeholder="Example: jack543!" max="60" onChange={e => setUser(e.target.value)} /></label>
          <br />
          <br />
          <span className="redText">* </span><label>Email
            <br />
            <input className="width50" type="email" value={email} placeholder="Example: jack@email.com" max="60" onChange={e => setEmail(e.target.value)} /> </label>
          <br />
          <br />
          <span className="redText">* </span><label>Answer
            <br />
            <textarea rows="5" cols="33" value={body} placeholder="Type answer here..." maxLength="1000" onChange={e => setBody(e.target.value)} /></label>
          <br />
          <br />
          <input className="questionButton" type="submit" value="Submit Answer" />
        </form>
        <br />
        <div className="answerModalPhoto">
          <strong>Image Upload</strong>
          <UploadPhoto photos={photos} image={image} onChange={handleChange} upload={handleUpload} />
        </div>
      </div>
    </div>
  )
}

export default AnswerModal
