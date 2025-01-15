import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActions,
  TextField,
} from "@mui/material";
import { FaUpload } from "react-icons/fa";
// import userProfile from "../../../../../../images/user_page_images/profile-pic.jpg";
// import uploadPic from "../../../../../../images/user_page_images/uploadimg.png";
// import card1 from '../../../../assets/wallpaper/card1.jpg';

const Photos = () => {
  const [file, setFile] = useState("");
  const fileInputRef = useRef(null);

  const chooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.type.startsWith("") &&
        selectedFile.size <= 2 * 1024 * 1024
      ) {
        setFile(selectedFile);
      } else {
        setFile("");
        alert("Please select a valid image file (max size: 2 MB).");
      }
    }
  };

  return (
    <Box
      sx={{
        padding: "24px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Grid Layout */}
      <Grid container spacing={4}>
        {/* Profile Picture Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <CardMedia
              component="img"
              height="200"
            //   image={card1}
            //   alt="User Profile"
              sx={{ borderRadius: "12px 12px 0 0" }}
            />
            <CardActions sx={{ justifyContent: "center", padding: "16px" }}>
              <Typography variant="subtitle1" color="text.secondary">
                Current Profile Picture
              </Typography>
            </CardActions>
          </Card>
        </Grid>

        {/* Upload Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                // src={uploadPic}
                // alt="Upload"
                style={{ width: "100px", marginBottom: "16px" }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "16px", textAlign: "center" }}
              >
                * Please upload high-resolution images only
              </Typography>

              <TextField
                disabled
                placeholder="Choose File"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ marginBottom: "16px" }}
              />
              <Button
                variant="outlined"
                startIcon={<FaUpload />}
                onClick={chooseFile}
                sx={{
                  marginBottom: "16px",
                  color: "#1976d2",
                  borderColor: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#f0f7ff",
                  },
                }}
              >
                Choose File
              </Button>

              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
              />

              <Button
                variant="contained"
                onClick={() => alert("Image saved!")}
                sx={{
                  backgroundColor: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#115293",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Photos;
