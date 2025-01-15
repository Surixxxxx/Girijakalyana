import React, { useState } from "react";
import {
  Box,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  Divider,
  Select,
  MenuItem,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaEdit, FaTimes } from "react-icons/fa";
import json from "../eduction/jsondata/data.json";

const Education = ({ render }) => {
  const Data = json;
  const [degree, setDegree] = useState("B.E/B.Tech");
  const [occupation, setOccupation] = useState("Software Engg");
  const [income, setIncome] = useState("16Lakh-18Lakh");
  const [occupationCountry, setOccupationCountry] = useState("India");
  const [openDialog, setOpenDialog] = useState(null); // Keeps track of which dialog is open

  const handleOpenDialog = (type) => setOpenDialog(type);
  const handleCloseDialog = () => setOpenDialog(null);

  const tableHeaderStyle = {
    fontWeight: "bold",
    backgroundColor: "#f4f6f8",
    color: "#34495e",
    fontSize:'18px',
  };

  const handleSubmit = (setter) => (e) => {
    e.preventDefault();
    setter(e.target.value);
    handleCloseDialog();
    render(true);
  };

  const DialogForm = ({ title, value, setValue, options }) => (
    <Dialog open={openDialog === title} onClose={handleCloseDialog}>
      <DialogContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6">{`Edit ${title}`}</Typography>
          <IconButton onClick={handleCloseDialog}>
            <FaTimes />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit(setValue)}>
          <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            size="small"
          >
            {options.map((option, index) => (
              <MenuItem value={option} key={index}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button onClick={handleCloseDialog} variant="outlined">
              Close
            </Button>
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{ p: 3, backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <Stack spacing={3}>
        <Typography variant="h5"  gutterBottom sx={{ color: "#34495e" }}>
          Education & Occupation
        </Typography>
        <TableContainer
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#2c3e50",
                    fontSize: "18px",
                    backgroundColor: "#ecf0f1",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#2c3e50",
                    fontSize: "18px",
                    backgroundColor: "#ecf0f1",
                  }}
                >
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={tableHeaderStyle} sx={{ fontWeight: "bold", color: "#34495e" }}>
                  Qualification
                </TableCell>
                <TableCell sx={{fontStyle:'18px'}}>
                  {degree}
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => handleOpenDialog("Qualification")}
                  >
                    <FaEdit style={{ color: "#3498db",fontSize:'18px' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={tableHeaderStyle} sx={{ fontWeight: "bold", color: "#34495e" }}>
                  Occupation
                </TableCell>
                <TableCell sx={{fontStyle:'18px'}}>
                  {occupation}
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => handleOpenDialog("Occupation")}
                  >
                    <FaEdit style={{ color: "#3498db",fontSize:'18px' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={tableHeaderStyle} sx={{ fontWeight: "bold", color: "#34495e" }}>
                  Income Per Annum
                </TableCell>
                <TableCell sx={{fontStyle:'18px'}} >
                  {income}
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => handleOpenDialog("Income")}
                  >
                    <FaEdit style={{ color: "#3498db",fontSize:'18px' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell  style={tableHeaderStyle} sx={{ fontWeight: "bold", color: "#34495e" }}>
                  Occupation Country
                </TableCell>
                <TableCell sx={{fontStyle:'18px'}} >
                  {occupationCountry}
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => handleOpenDialog("Occupation Country")}
                  >
                    <FaEdit style={{ color: "#3498db",fontSize:'18px' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      {/* Dialogs */}
      <DialogForm
        title="Qualification"
        value={degree}
        setValue={setDegree}
        options={Data[4].qualificationValues}
      />
      <DialogForm
        title="Occupation"
        value={occupation}
        setValue={setOccupation}
        options={Data[3].occupationValues}
      />
      <DialogForm
        title="Income"
        value={income}
        setValue={setIncome}
        options={Data[2].incomeValues}
      />
      <DialogForm
        title="Occupation Country"
        value={occupationCountry}
        setValue={setOccupationCountry}
        options={Data[4].qualificationValues}
      />
    </Box>
  );
};

export default Education;
