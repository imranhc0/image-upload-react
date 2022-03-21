import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const UploadImage = ({ handleClick, handleChange, fileInputRef }) => {
  return (
    <div className="upload-col">
      <form>
        <p>
          <CloudUploadIcon
            className="upload-icon"
            onClick={handleClick}
            sx={{
              cursor: "pointer",
              color: "#5B7DB1",
              height: "100px",
              width: "100px",
              // backgroundColor: "green",
              "&:hover": {
                color: "#1A132F",
              },
            }}
          />
          {""}
        </p>
        {/*  */}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleChange}
          accept="image/*"
        />
      </form>
    </div>
  );
};

export default UploadImage;
