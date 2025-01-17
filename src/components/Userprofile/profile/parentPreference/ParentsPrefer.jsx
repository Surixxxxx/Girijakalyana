import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import { FaCheck, FaRedo } from "react-icons/fa";
import jsonData from "../eduction/jsondata/data.json";

const ParentsPrefer = () => {
  const datas = jsonData;

  const [caste, setCaste] = useState(null);
  const [fromAge, setFromAge] = useState(null);
  const [toAge, setToAge] = useState(null);
  const [fromHeight, setFromHeight] = useState(null);
  const [toHeight, setToHeight] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [marrital, setMarrital] = useState(null);
  const [education, setEducation] = useState(null);

  const handleReset = () => {
    setCaste(null);
    setFromAge(null);
    setToAge(null);
    setFromHeight(null);
    setToHeight(null);
    setOccupation(null);
    setMarrital(null);
    setEducation(null);
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
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight:700,
          fontSize:'22px',
          color: "#34495e",
          marginBottom: "24px",
        }}
      >
        Parents' Preference
      </Typography>

      {/* Form Section */}
      <Stack direction="row" spacing={4}>
        {/* Left Column */}
        <Box flex={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="caste-field-label">Caste Preference</InputLabel>
                <Select
                  labelId="caste-field-label"
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                >
                  {datas[0].casteValues.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="from-age-label">
                  Age Preference (From)
                </InputLabel>
                <Select
                  labelId="from-age-label"
                  value={fromAge}
                  onChange={(e) => setFromAge(e.target.value)}
                >
                  {datas[9].minAge.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="from-height-label">
                  Height Preference (From)
                </InputLabel>
                <Select
                  labelId="from-height-label"
                  value={fromHeight}
                  onChange={(e) => setFromHeight(e.target.value)}
                >
                  {datas[5].heightValues.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="occupation-label">Occupation Country</InputLabel>
                <Select
                  labelId="occupation-label"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="China">China</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Right Column */}
        <Box flex={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="education-label">
                  Education Preference
                </InputLabel>
                <Select
                  labelId="education-label"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                >
                  {datas[4].qualificationValues.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="to-age-label">Age Preference (To)</InputLabel>
                <Select
                  labelId="to-age-label"
                  value={toAge}
                  onChange={(e) => setToAge(e.target.value)}
                >
                  {datas[9].minAge.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="to-height-label">
                  Height Preference (To)
                </InputLabel>
                <Select
                  labelId="to-height-label"
                  value={toHeight}
                  onChange={(e) => setToHeight(e.target.value)}
                >
                  {datas[5].heightValues.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="marrital-label">Marital Status</InputLabel>
                <Select
                  labelId="marrital-label"
                  value={marrital}
                  onChange={(e) => setMarrital(e.target.value)}
                >
                  {datas[6].marritalStatus.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      {/* Buttons */}
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Button
          variant="contained"
      
          onClick={() => alert("Preferences Submitted!")}
          sx={{
            backgroundColor: "#34495e",
            "&:hover": { backgroundColor: "#115293" },
             textTransform:'capitalize'
          }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
       
          onClick={handleReset}
          sx={{
            borderColor: "#1976d2",
            color: "#1976d2",
            "&:hover": { backgroundColor: "#f0f7ff" },
            textTransform:'capitalize'
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default ParentsPrefer;
