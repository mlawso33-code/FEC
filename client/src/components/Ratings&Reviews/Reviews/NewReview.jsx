import React, { useState, useContext } from "react"
import AppContext from '../../App/AppContext.jsx'
import RatingsAndReviewsContext from "../RatingsandReviewsContext.jsx"
import Rating from "react-rating"
import CharacteristicInReview from "./CharacteristicInReview.jsx"
import NewReviewPhoto from "./NewReviewPhoto.jsx"
import axios from "axios"

const NewReview = ({ closeModal }) => {
  const { product, metaData } = useContext(AppContext)
  const { product_id } = useContext(RatingsAndReviewsContext)
  const characteristics = getCharacteristics(metaData.characteristics)
  const [rate, setRate] = useState(0)
  const [recommened, setRecommended] = useState(true)
  const [charticsRating, setCharticsRating] = useState({})
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState([])
  const [currentPhoto, setCurrentPhoto] = useState('')
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')

  function handleRatingChange(newRate) {
    setRate(newRate)
  }

  function handleRecommended(e) {
    setRecommended(e.target.value)
  }

  function changeCharticRating(rating, charticId) {
    setCharticsRating({...charticsRating, [charticId]: rating})
  }

  function handleSummaryChange(e) {
    setSummary(e.target.value)
  }

  function handleBodyChange(e) {
    setBody(e.target.value)
  }

  function handleNameChange(e) {
    setNickName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePhotoChange(e) {
    setCurrentPhoto(e.target.value)
  }

  function handleImgUpload(e) {
    e.preventDefault()
    setPhotos([...photos, currentPhoto])
    setCurrentPhoto('')
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

  function handleSubmit(e) {
    e.preventDefault();
    // Do all the manditory checks
    let areErrors = false
    let errors = 'You must enter the following:\n'

    if (rate === 0) {
      errors += ('Overall Rating\n')
      areErrors = true
    }
    if (Object.keys(charticsRating).length !== Object.keys(metaData.characteristics).length) {
      errors += ('A rating for each characteristic\n')
      areErrors = true
    }
    if (body.length < 50) {
      errors += ('Minimum review length of 50 characters\n')
      areErrors = true
    }
    if (nickName === '') {
      errors += ('A nick name\n')
      areErrors = true
    }
    if (email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1){
      errors += ('An email address\n')
      areErrors = true
    }
    if (areErrors) {
      alert(errors)
      return
    }

    let formSubmission = {
      "product_id": product_id,
      "rating": rate,
      "summary": summary,
      "body": body,
      "recommend": recommened,
      "name": nickName,
      "email": email,
      "photos": photos,
      "characteristics": charticsRating
    }

    axios.post('/api/reviews', formSubmission)
      .then(closeModal)
      .then(alert('Thank you for your feedback, your review has been submitted!'))
  }

  return (
    <div className="reviewModal">
      <div className="reviewModalContent">
        <div className="reviewModalHeader">
          <span className="reviewModalClose" onClick={closeModal}>&times;</span>
          <div>Write Your Review About the {product.name}</div>
        </div>

        <form className="reviewModalBody" onSubmit={handleSubmit}>
          <div className="formSectionTitle"><b>Overall Rating<span className="astrics">*</span></b>
            <div>
              <Rating
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
                initialRating={rate}
                onClick={newRate => handleRatingChange(newRate)}
              />
              {rate === 1 &&
                <span className="starMeaning">Poor</span>
              }
              {rate === 2 &&
                <span className="starMeaning">Fair</span>
              }
              {rate === 3 &&
                <span className="starMeaning">Average</span>
              }
              {rate === 4 &&
                <span className="starMeaning">Good</span>
              }
              {rate === 5 &&
                <span className="starMeaning">Great</span>
              }
            </div>
          </div>

          <div className="formSectionTitle"><b>Do you recommend this product?<span className="astrics">*</span></b>
            <div>
              <label>Yes</label>
              <input type="radio" name="recommend" className="recRadio" value={true} defaultChecked onClick={handleRecommended}/>
              <label>No</label>
              <input type="radio" name="recommend" className="recRadio" value={false} onClick={handleRecommended}/>
            </div>
          </div>

          <div className="formSectionTitle"><b>Characteristics<span className="astrics">*</span></b>
            {characteristics}
          </div>

          <div className="formSectionTitle"><b>Review Summary</b>
            <div>
              <input type="text"
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                onChange={handleSummaryChange}
                className="reviewInput"
                />
            </div>
          </div>

          <div className="formSectionTitle"><b>Review Body<span className="astrics">*</span></b>
            <div>
              <textarea
                placeholder="Why did you like the product or not?"
                minLength="50"
                maxLength="1000"
                onChange={handleBodyChange}
                className="reviewInput"
              />
            </div>

            {body.length >= 50
              ? <div className="subFiledTxt">Minimum reached</div>
              : <div className="subFiledTxt">Minimum required characters left: {50 - body.length}</div>
            }
          </div>

          <div className="formSectionTitle"><b>Upload your photos</b>
            <div>
              {photos.map(photo => <NewReviewPhoto photo={photo}/>)}
            </div>

            {photos.length < 5 &&
              <div>
                <input type="text"
                  placeholder="Past URL here"
                  onChange={handlePhotoChange}
                  value={currentPhoto}
                  className="reviewInput"
                  />
                <button className="addReviewPhotoButton" onClick={handleImgUpload}>Add Photo</button>
              </div>
            }
          </div>

          <div className="formSectionTitle"><b>What is your nickname?<span className="astrics">*</span></b>
            <div>
              <input type="text"
                maxLength="60"
                placeholder="Example: jackson11!"
                onChange={handleNameChange}
                className="reviewInput"
                />
            </div>
            <div className="subFiledTxt"><i>For privacy reasons, do not use your full name or email address.</i></div>
          </div>

          <div className="formSectionTitle"><b>Your email<span className="astrics">*</span></b>
            <div>
              <input type="text"
                maxLength="60"
                placeholder="Example: jackson11@email.com"
                onChange={handleEmailChange}
                className="reviewInput"
                />
            </div>
            <div className="subFiledTxt"><i>For authentication reasons, you will not be emailed.</i></div>
          </div>

          <input type="submit" value="Submit" className="submitReviewButton" />
        </form>
      </div>

    </div>
  )
}

export default NewReview
