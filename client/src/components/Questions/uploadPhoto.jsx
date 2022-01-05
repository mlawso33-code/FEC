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
          style={{ width: '50%' }}
          type="text"
          defaultValue=''
          placeholder='Insert image URL here'
          onChange={handleChange}
        />
        <br />
        <small>Preview :</small>
        <div>{image ? <img src={image} alt="test" width="150" height="100" /> : null}</div>
        <br />
        <button onClick={e => handleUpload(image)} disabled={disabled}>Upload</button>
      </div>
      <br />
      <span>Remaining uploads: {counter}</span>
      <br />
      <small>Uploaded photos: </small>
      <div>
        <span>{photos.length > 0 && photos.map((img, i) => <img src={img} alt={`photo ${i}`} width="50" height="25" key={i} />)} </span>
      </div>
    </div>
  );
}

export default UploadPhoto


/* Notes:::

*/
