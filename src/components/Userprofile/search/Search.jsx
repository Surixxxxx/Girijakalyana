import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from "@mui/material";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import jsonData from "../../Userprofile/profile/eduction/jsondata/data.json";
import "./search.scss"; // Custom styling file for your CSS

const Search = () => {
  const datas = jsonData;
  const [caste, setCaste] = useState("");
  const [fromAge, setFromAge] = useState("");
  const [toAge, setToAge] = useState("");
  const [fromHeight, setFromHeight] = useState("");
  const [toHeight, setToHeight] = useState("");
  const [occupation, setOccupation] = useState("");
  const [marrital, setMarrital] = useState("");
  const [checkbox, setCheckbox] = useState(null);
  const [showMarrital, setShowMarrital] = useState(false);
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleCheckboxNo = () => {
    setShowMarrital(true);
    setCheckbox("No");
  };

  const handleCheckboxYes = () => {
    setShowMarrital(false);
    setCheckbox("Yes");
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    // Handle change in rows per page if needed
  };

  return (
    <>
      <Box className="search-main-container">
        <Box className="search-header-part">
          <h3 className="search-user-name">Profile Based On Preference</h3>
          <Box className="search-container" gap={1}>
            <TextField
              variant="outlined"
              placeholder="Enter Reg No"
              className="search-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment sx={{ marginRight: 2 }}>
                    <FaSearch />
                  </InputAdornment>
                ),
              }}
            />
             <Button variant="contained" sx={{height:'53px',textTransform:'capitalize',width:'100px',fontSize:'20px'}}>
            Search
          </Button>
          </Box>
         
        </Box>

        {/* Marital Status Section */}
        <Box className="radio-div">
          <label className="radio-heading" style={{ color: "#34495e", fontWeight: 600 }}>
            First Marriage *
          </label>
          <input
            type="radio"
            id="marriage-yes"
            name="marriage"
            value="Yes"
            onClick={handleCheckboxYes}
          />
          Yes
          <input
            type="radio"
            id="marriage-no"
            name="marriage"
            value="No"
            onClick={handleCheckboxNo}
          />
          No
          {showMarrital && (
            <FormControl sx={{ minWidth: 220 }} size="small">
              <InputLabel id="marrital-data-id">Marital Status</InputLabel>
              <Select
                labelId="marrital-data-label"
                id="marrital-data-id"
                value={marrital}
                onChange={(e) => setMarrital(e.target.value)}
                className="custom-select"
              >
                {datas[6].marritalStatus.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>

        {/* Form Fields */}
        <Stack spacing={3} direction="row" className="form-fields-container" style={{ gap: 10 }}>
          <Box style={{ gap: 10 }}>
            <Grid item xs={12} md={6}>
              <FormControl sx={{ width: 200, marginBottom: 2 }} size="small">
                <InputLabel id="caste-field-id">Caste Preference</InputLabel>
                <Select
                  labelId="caste-field-label"
                  id="caste-field-id"
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                  className="custom-select"
                >
                  {datas[0].casteValues.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl sx={{ width: 200, marginBottom: 2 }} size="small">
                <InputLabel id="age-from-id">Age Preference (From)</InputLabel>
                <Select
                  labelId="age-from-label"
                  id="age-from-id"
                  value={fromAge}
                  onChange={(e) => setFromAge(e.target.value)}
                  className="custom-select"
                >
                  {datas[9].minAge.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl sx={{ width: 200, marginBottom: 2 }} size="small">
                <InputLabel id="height-from-id">Height Preference (From)</InputLabel>
                <Select
                  labelId="height-from-label"
                  id="height-from-id"
                  value={fromHeight}
                  onChange={(e) => setFromHeight(e.target.value)}
                  className="custom-select"
                >
                  {datas[5].heightValues.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Box>

          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <FormControl sx={{ width: 200, marginBottom: 1 }} size="small">
                  <InputLabel id="education-id">Education Preference</InputLabel>
                  <Select
                    labelId="education-label"
                    id="education-id"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="custom-select"
                  >
                    {datas[4].qualificationValues.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl sx={{ width: 200, marginBottom: 1 }} size="small">
                  <InputLabel id="age-to-id">Age Preference (To)</InputLabel>
                  <Select
                    labelId="age-to-label"
                    id="age-to-id"
                    value={toAge}
                    onChange={(e) => setToAge(e.target.value)}
                    className="custom-select"
                  >
                    {datas[9].minAge.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl sx={{ width: 200 }} size="small">
                  <InputLabel id="height-to-id">Height Preference (To)</InputLabel>
                  <Select
                    labelId="height-to-label"
                    id="height-to-id"
                    value={toHeight}
                    onChange={(e) => setToHeight(e.target.value)}
                    className="custom-select"
                  >
                    {datas[5].heightValues.map((item, index) => (
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
        <Box className="search-buttons-container" sx={{ mt: 3 }}>
          <Button variant="contained" sx={{background:"#34495e",textTransform:'capitalize',fontSize:'18px'}}>Submit</Button>
          <Button variant="outlined" color="secondary" sx={{textTransform:'capitalize',fontSize:'18px'}}>Reset</Button>
        </Box>
      </Box>
    </>
  );
};

export default Search;
