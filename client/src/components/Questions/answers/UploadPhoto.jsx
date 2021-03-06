import React, { useState, useEffect } from "react";


const UploadPhoto = (props) => {
  const photos = props.photos
  const image = props.image
  const [counter, setCount] = useState(5)
  const [disabled, setDisabled] = useState(false)

  function handleChange(e) {
    props.onChange(e)
  };

  function handleUpload(e) {
    if (counter > 0) {
      props.upload(e)
    } else {
      alert(`You've reached maximum image uploads!`)
      setDisabled(true)
    }
  }

  useEffect(() => {
    setCount(5 - photos.length)
  }, [photos])

  return (
    <div>
      <div>
        <br />
        <input
          className="urlInput"
          type="text"
          defaultValue=''
          placeholder='Insert image URL here'
          onChange={handleChange}
        />
        <br />
        <br />
        <small>Preview :</small>
        <div>{image ? <img src={image} alt="test" width="150" height="100" /> : null}</div>
        <br />
        <button className= "questionButton" onClick={e => handleUpload(image)} disabled={disabled}>Upload</button>
      </div>
      <br />
      <span>Remaining uploads: {counter}</span>
      <br />
      <small>Uploaded photos: </small>
      <div className="photoRow">
        <span>{photos.length > 0 && photos.map((img, i) => <img className="eachPhotoRow" src={img} alt={`photo ${i}`} width="100" height="50" key={i} /> )} </span>
      </div>
    </div>
  );
}

export default UploadPhoto