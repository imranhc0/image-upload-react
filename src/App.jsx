import React, { useRef, useState, useEffect } from "react";

import UploadImage from "./UploadImage";
import PreviewImage from "./PreviewImage";
import "./app.css";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  return (
    <div className="App">
      <h3 className="header">Image Upload with React</h3>
      <div className="appContainer">
        <UploadImage
          handleClick={handleClick}
          handleChange={handleChange}
          fileInputRef={fileInputRef}
        />
        <PreviewImage preview={preview} setPreview={setPreview} />
      </div>
    </div>
  );
}

export default App;
