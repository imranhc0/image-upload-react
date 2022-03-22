import React, { useRef, useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useSnackbar } from "notistack";

import UploadImage from "./UploadImage";
import PreviewImage from "./PreviewImage";
import "./app.css";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileTypes = ["JPG", "PNG", "GIF"];
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleDragChange = (file) => {
    setImage(file);
  };

  const handleSnackBar = () => {
    enqueueSnackbar("Your Image is Uploaded Successfully", {
      variant: "success",
      autoHideDuration: 1000,
    });
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
      handleSnackBar();
    }
  }, [image]);

  return (
    <div className="App">
      <h3 className="header">Image Upload with React</h3>
      <div className="appContainer">
        <div className="upload-col">
          <FileUploader
            handleChange={handleDragChange}
            name="file"
            types={fileTypes}
            hoverTitle="Drag and drop your image here"
          />
          <UploadImage
            handleChange={handleChange}
            fileInputRef={fileInputRef}
            handleClick={handleClick}
          />
        </div>
        <PreviewImage preview={preview} setPreview={setPreview} />
      </div>
    </div>
  );
}

export default App;
