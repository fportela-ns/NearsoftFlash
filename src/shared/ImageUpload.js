import React from "react";

const ImageUpload = props => (
  <div>
    <input type="file" onChange={props.onImageChange} />
  </div>
);

export default ImageUpload;
