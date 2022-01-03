import React, { useState } from "react"

const CharacteristicInReview = ({ charticName, charticId, changeCharticRating }) => {
  const [selected, setSelected] = useState(null)

  function changeSelected(e) {
    changeCharticRating(e, charticId)
    setSelected(e.target.id)
  }

  return (
    <div>
      <div>{charticName}: {selected}</div>

      <div style={{marginLeft: 10}}>
        <input type='radio' name={charticName} value='1' id='too small' onClick={changeSelected}/>
      </div>

      <div>
        <span>1</span>
        <span>5</span>
      </div>
    </div>
  )
}

export default CharacteristicInReview