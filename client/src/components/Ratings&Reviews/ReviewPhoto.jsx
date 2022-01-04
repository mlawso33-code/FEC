import React, {useState} from "react";

const ReviewPhoto = ({ photo }) => {
  const [show, setShow] = useState(false)

  function showModal() {
    setShow(true)
  }

  function closeModal() {
    setShow(false)
  }

  return (
    <span>
      <img src={photo.url} style={photoStyle} onClick={showModal}/>

      {show &&
        <div style={modalStyle}>
            <span style={modalHeaderStyle} onClick={closeModal}>&times;</span>
            <img src={photo.url} style={modalContentStyle}/>
        </div>
      }
    </span>
  )
}

export default ReviewPhoto

const photoStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "5px",
  width: "125px",
  height: "125px",
  cursor: "pointer"
}

const modalStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  paddingTop: "100px",
  background: "rgba(0, 0, 0, 0.6)"
}

const modalContentStyle = {
  margin: "auto",
  display: "block",
  width: "80%",
  maxWidth: "1000px"
}

const modalHeaderStyle ={
  position: "absolute",
  top: "15px",
  right: "35px",
  color: "#fff",
  fontSize: "40px",
  fontWeight: "bold",
  cursor: "pointer"
}

