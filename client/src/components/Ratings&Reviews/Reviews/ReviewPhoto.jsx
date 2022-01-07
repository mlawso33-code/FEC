import React, { useState } from 'react';

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
      <img src={photo.url} className='reviewTilePhoto' onClick={showModal}/>

      {show &&
        <div className='photoModal'>
            <span className='photoModalHeader' onClick={closeModal}>&times;</span>
            <img src={photo.url} className='photoModalContent'/>
        </div>
      }
    </span>
  )
}

export default ReviewPhoto

