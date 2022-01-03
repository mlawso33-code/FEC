import React, { useState, useContext } from "react"
import AppContext from '../App/AppContext.jsx'
import Rating from "react-rating"

const NewReview = ({ closeModal }) => {
  const { product } = useContext(AppContext)
  const [rate, setRate] = useState(0)
  const [recommened, setRecommended] = useState()
  const [chartics, setChartics] = useState()
  const [summary, setSummary] = useState()
  const [photos, setPhotos] = useState()
  const [nickName, setNickName] = useState()
  const [email, setEmail] = useState()

  console.log(rate)

  function handleRatingChange(newRate) {
    setRate(newRate)
  }

  return(
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <div style={modalHeaderStyle} >
          <span style={modalCloseStyle} onClick={closeModal}>&times;</span>
          <h2>Write Your Review</h2>
          <h3>About the {product.name}</h3>
        </div>
        <form style={modalBodyStyle}>
          <div>Overall Rating
            <Rating
              emptySymbol="fa fa-star-o"
              fullSymbol="fa fa-star"
              initialRating={rate}
              onClick={newRate => handleRatingChange(newRate)}
            />
          </div>
          <div>Do you recommend this product?</div>
          <div>Characteristics</div>
          <div>Review Summary</div>
          <div>Upload your photos</div>
          <div>What is your nickname</div>
          <div>Your email</div>
          <input type="submit" value="Submit" />
        </form>
      </div>

    </div>
  )
}

export default NewReview

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
  position: 'relative',
  margin: "auto",
  display: "block",
  width: "80%",
  maxWidth: "1000px",
  backgroundColor: '#fff'
}

const modalHeaderStyle = {
  paddingTop: '15px',
  textAlign: 'center',
  borderBottom: '1px solid #ccc'
}

const modalBodyStyle = {
  fontSize: '20px',
}

const modalCloseStyle ={
  position: "absolute",
  top: "12px",
  right: "25px",
  color: "black",
  fontSize: "30px",
  fontWeight: "bold",
  cursor: "pointer"
}
