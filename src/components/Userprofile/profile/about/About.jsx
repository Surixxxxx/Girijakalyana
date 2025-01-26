import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import toast from "react-hot-toast";

const About = ({ render }) => {
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [occupationCountry, setOccupationCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = sessionStorage.getItem("userId"); // Get the user ID from sessionStorage
        if (!userId) {
          toast.error("User ID not found. Please log in again.");
          return;
        }
  
        // Fetch the data from the API
        const response = await fetch(`http://localhost:5000/api/about/${userId}?cache_bust=${new Date().getTime()}`);
        
        if (!response.ok) {
          toast.error("Failed to fetch user data.");
          return;
        }
  
        const userData = await response.json();
  
        // Set the state with the fetched data
        setAddress(userData.address || "");
        setPincode(userData.pincode || "");
        setOccupationCountry(userData.occupationCountry || "");
        setLanguage(userData.language || "");
  
        // Fetch and set other data (email and mobile) from sessionStorage
        const storedMobile = sessionStorage.getItem("mobile");
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) setEmail(storedEmail);
        if (storedMobile) setMobile(storedMobile);
  
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("An error occurred while fetching data.");
      }
    };
  
    fetchData();
  }, []);
  
  const handleSave = async () => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      toast.error("User ID not found. Please login again.");
      return;
    }

    const updatedData = {
      pincode,
      address,
      occupationCountry,
      language,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/update/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        toast.success("User updated successfully!");
        setIsEditing(false); // Exit edit mode
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to update data.";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("An error occurred during the request.");
    }
  };

  const handleClear = () => {
    setPincode("");
    setAddress("");
    setOccupationCountry("");
    setLanguage("");
  };

  return (
    <Box
      padding={1}
      sx={{
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        width:'90%'
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end",  }}>
        <Button
          variant={isEditing ? "outlined" : "contained"}
          style={{
            cursor: "pointer",
            color: "#fff",
            fontSize: "16px",
            background: `${isEditing ? "red" : "#34495e"}`,
            textTransform: "capitalize",
            marginRight:'62px',
            border:'none'
          }}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </Box>

      <Stack >
        <Box sx={{ display: "flex", gap: "20px", justifyContent: "space-evenly" }}>
          <Box>
            <Typography variant="h5" fontWeight={700} color="#34495e" gutterBottom>
              Basic Information
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Email"
                value={email}
                disabled
                sx={{ width: "500px" }}
              />
              <TextField
                label="Phone No."
                value={mobile}
                disabled
                sx={{ width: "500px" }}
              />
              <TextField
                label="Address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={!isEditing}
                sx={{ width: "500px" }}
              />
              <TextField
                label="Pin Code"
                placeholder="Pin Code"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                disabled={!isEditing}
                sx={{ width: "500px" }}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" fontWeight={700} color="#34495e" gutterBottom>
              Personal Information
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Language"
                placeholder="Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={!isEditing}
                sx={{ width: "500px" }}
              />
              <TextField
                label="Occupation Country"
                placeholder="Occupation Country"
                value={occupationCountry}
                onChange={(e) => setOccupationCountry(e.target.value)}
                disabled={!isEditing}
                sx={{ width: "500px" }}
              />
            </Stack>
          </Box>
        </Box>
      </Stack>

      {isEditing && (
        <Box mt={3} display="flex" gap={2} sx={{marginRight:'62px'}} justifySelf="flex-end">
          <Button
            variant="contained"
            sx={{ background: "#34495e", textTransform: "capitalize" }}
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{ background: "#34495e", textTransform: "capitalize" }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default About;
