import React, { useState } from "react";

const AnswerPhoto = ({ photo }) => {
  const [show, setShow] = useState(false)

  function showModal() {
    setShow(true)
  }

  function closeModal() {
    setShow(false)
  }

  return (
    <div>
      <br />
      <span>
        <img src={photo.url} className="photoStyle" onClick={showModal} width="150" height="100" />
        {show &&
          <div className="modalStyle">
            <span className="modalHeaderStyle" onClick={closeModal}>&times;</span>
            <img src={photo.url} className="modalContentStyle" />
          </div>
        }
      </span>
    </div>
  )
}

export default AnswerPhoto

