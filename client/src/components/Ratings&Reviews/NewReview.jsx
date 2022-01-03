import React, { useState, useContext } from "react"
import AppContext from '../App/AppContext.jsx'
import RatingsAndReviewsContext from "./RatingsandReviewsContext.jsx"
import Rating from "react-rating"
import CharacteristicInReview from "./CharacteristicInReview.jsx"

const NewReview = ({ closeModal }) => {
  const { product } = useContext(AppContext)
  const { metaData } = useContext(RatingsAndReviewsContext)
  const characteristics = getCharacteristics(metaData.characteristics)
  const [rate, setRate] = useState(0)
  const [recommened, setRecommended] = useState('Yes')
  const [charticsRating, setCharticsRating] = useState({})
  const [summary, setSummary] = useState()
  const [photos, setPhotos] = useState()
  const [nickName, setNickName] = useState()
  const [email, setEmail] = useState()

  function handleRatingChange(newRate) {
    setRate(newRate)
  }

  function handleRecommended(e) {
    setRecommended(e.target.value)
  }

  function changeCharticRating(e, charticId) {
    setCharticsRating({...charticsRating, [charticId]: e.target.value})
  }

  function getCharacteristics(chartics) {
    let results = []
    if (chartics) {
      for (let chartic in chartics) {
        results.push(
          <CharacteristicInReview key={chartics[chartic].id}
            charticName={chartic}
            charticId={chartics[chartic].id}
            changeCharticRating={changeCharticRating}/>
        )
      }
      return results
    }
  }

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <div style={modalHeaderStyle} >
          <span style={modalCloseStyle} onClick={closeModal}>&times;</span>
          <h2>Write Your Review</h2>
          <h3>About the {product.name}</h3>
        </div>

        <form style={modalBodyStyle}>
          <div><b>Overall Rating</b>
            <Rating
              emptySymbol="fa fa-star-o"
              fullSymbol="fa fa-star"
              initialRating={rate}
              onClick={newRate => handleRatingChange(newRate)}
            />
            {rate === 1 &&
              <span>Poor</span>
            }
            {rate === 2 &&
              <span>Fair</span>
            }
            {rate === 3 &&
              <span>Average</span>
            }
            {rate === 4 &&
              <span>Good</span>
            }
            {rate === 5 &&
              <span>Great</span>
            }
          </div>

          <div><b>Do you recommend this product?</b>
            <label>Yes</label>
            <input type='radio' name='recommend' value='Yes' defaultChecked onClick={handleRecommended}/>
            <label>No</label>
            <input type='radio' name='recommend' value='No' onClick={handleRecommended}/>
          </div>

          <div><b>Characteristics</b>
            {characteristics}
          </div>
          <div><b>Review Summary</b></div>
          <div><b>Upload your photos</b></div>
          <div><b>What is your nickname</b></div>
          <div><b>Your email</b></div>
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
