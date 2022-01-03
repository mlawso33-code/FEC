import React, { useState } from "react";


const UploadPhoto = (props) => {
  const photos = props.photos
  const image = props.image

  function handleChange(e) {
    props.onChange(e)
  };

  function handleUpload(e) {

  }

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="200" height="200" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <h5 className="text-center">Click image to upload a photo</h5>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadPhoto


/* Notes:::
- need to send URL back answermodal to insert into photos array
- user shoud be able to add up to 5 photos
*/

{/* <label>Upload Photo<span style={{ color: "red" }}>*</span>:
<input type="text" value='' placeholder="Type question here..." max="1000" onChange={handleSubmitAnswer} /></label> */}