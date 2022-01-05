import React, {useState} from "react";

const AnswerPhoto = ({photo}) => {
  const [show, setShow] = useState(false)

  function showModal() {
    setShow(true)
  }

  function closeModal() {
    setShow(false)
  }

  return (
    <span>
      <img src={photo.url} className="photoStyle" onClick={showModal}/>

      {show &&
        <div className="modalStyle">
            <span className="modalHeaderStyle" onClick={closeModal}>&times;</span>
            <img src={photo.url} className="modalContentStyle"/>
        </div>
      }
    </span>
  )
}

export default AnswerPhoto

