import DeleteIcon from "@mui/icons-material/Delete";
const PreviewImage = ({ preview, setPreview }) => {
  return (
    <div className="preview-col">
      {preview && (
        <>
          <img src={preview} alt="" />
          <DeleteIcon
            sx={{
              cursor: "pointer",
              color: "#5B7DB1",
              height: "50px",
              width: "50px",
              marginTop: "10px",
              "&:hover": {
                color: "#D82148",
              },
            }}
            onClick={() => {
              setPreview(null);
            }}
          />
        </>
      )}
      {!preview && <p>No image selected</p>}
    </div>
  );
};

export default PreviewImage;
