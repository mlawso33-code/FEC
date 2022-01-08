import React, { useState } from 'react'

const CharacteristicInReview = ({ charticName, charticId, changeCharticRating }) => {
  const [selected, setSelected] = useState('none selected')

  function changeSelected(e) {
    let rating = Number(e.target.value)
    changeCharticRating(rating, charticId)
    setSelected(e.target.id)
  }

  if (charticName === 'Comfort' || charticName === 'Quality') {
    return (
      <div className='formChartics'>
        <div>{charticName}: <span className='charticSelected'>{selected}</span></div>

        <div className='charRadios'>
          <input type='radio' name={charticName} className='recRadio' value='1' id='Poor' onClick={changeSelected}/>
          <input type='radio' name={charticName} className='recRadio' value='2' id='Fair' onClick={changeSelected}/>
          <input type='radio' name={charticName} className='recRadio' value='3' id='Average' onClick={changeSelected}/>
          <input type='radio' name={charticName} className='recRadio' value='4' id='Good' onClick={changeSelected}/>
          <input type='radio' name={charticName} className='recRadio' value='5' id='Great' onClick={changeSelected}/>
        </div>

        <div className='charticMeaning'>
          <span className='charticPoor'>Poor</span>
          <span className='charticGreat'>Great</span>
        </div>
      </div>
    )
  }

  return (
    <div className='formChartics'>
      <div>{charticName}: <span className='charticSelected'>{selected}</span></div>

      <div className='charRadios'>
        <input type='radio' name={charticName} className='recRadio'value='1' id='Too small' onClick={changeSelected}/>
        <input type='radio' name={charticName} className='recRadio'value='2' id='Slightly small' onClick={changeSelected}/>
        <input type='radio' name={charticName} className='recRadio'value='3' id='Perfect' onClick={changeSelected}/>
        <input type='radio' name={charticName} className='recRadio'value='4' id='Slightly large' onClick={changeSelected}/>
        <input type='radio' name={charticName} className='recRadio'value='5' id='Too large' onClick={changeSelected}/>
      </div>

      <div className='charticMeaning'>
        <span>Too small</span>
        <span className='charticLarge'>Too large</span>
      </div>
    </div>
  )
}

export default CharacteristicInReview