import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Divider,
  Stack,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { FaEdit, FaTimes } from "react-icons/fa";

const FamilyReligious = ({ render }) => {
  const [fatherName, setFatherName] = useState("Rama");
  const [openFatherName, setOpenFatherName] = useState(false);
  const [selectParentType, setSelectParentType] = useState("Father");
  const [subCaste, setSubCaste] = useState("Brahmin");
  const [openSubCaste, setOpenSubCaste] = useState(false);
  const [nakshatra, setNakshatra] = useState("Anuradha");
  const [openNakshatra, setOpenNakshatra] = useState(false);
  const [rashi, setRashi] = useState("Mesha");
  const [openRashi, setOpenRashi] = useState(false);
  const [gotra, setGotra] = useState("Mallig");
  const [openGotra, setOpenGotra] = useState(false);

  const handleDialogToggle = (dialogSetter, state) => {
    dialogSetter(state);
  };

  const handleDialogSubmit = (e, setter, valueSetter) => {
    e.preventDefault();
    const newValue = e.target.elements[valueSetter].value;
    setter(newValue);
    render(true);
  };

  const tableHeaderStyle = {
    fontWeight: "bold",
    backgroundColor: "#f4f6f8",
    color: "#34495e",
    fontSize:'18px',
  };

  return (
    <Box padding={3}>
      <Stack
        direction="row"
        spacing={5}
        // justifyContent="center"
        alignItems="flex-start"
      >
        {/* Family Table */}
        <Box>
          <Typography variant="h6" color="#34495e" gutterBottom>
            Family
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>{selectParentType}</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>
                    {fatherName}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db",fontSize:'18px' }}
                      onClick={() => handleDialogToggle(setOpenFatherName, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Sibling</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>
                    No Sibling
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db",fontSize:'18px' }}
                      onClick={() => handleDialogToggle(setOpenFatherName, true)}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Religious Background Table */}
        <Box>
          <Typography variant="h6" color="#34495e" gutterBottom>
            Religious Background
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Religion</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>Hindu</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Caste</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>Brahmin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Sub Caste</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>
                    {subCaste}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db",fontSize:'18px' }}
                      onClick={() => handleDialogToggle(setOpenSubCaste, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Nakshatra</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>
                    {nakshatra}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db",fontSize:'18px' }}
                      onClick={() => handleDialogToggle(setOpenNakshatra, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Rashi</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>
                    {rashi}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db",fontStyle:'18px' }}
                      onClick={() => handleDialogToggle(setOpenRashi, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Gotra</TableCell>
                  <TableCell sx={{fontSize:'18px'}}>
                    {gotra}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db",fontStyle:'18px' }}
                      onClick={() => handleDialogToggle(setOpenGotra, true)}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>

      {/* Dialog Component Example */}
      <Dialog
        maxWidth="sm"
        open={openFatherName}
        onClose={() => handleDialogToggle(setOpenFatherName, false)}
      >
        <DialogContent>
          <Typography variant="h6" color="#34495e" marginBottom={2}>
            Edit Family Details
          </Typography>
          <form
            onSubmit={(e) => handleDialogSubmit(e, setFatherName, "fatherName")}
          >
            <Box marginBottom={2}>
              <Select
                size="small"
                value={selectParentType}
                onChange={(e) => setSelectParentType(e.target.value)}
                fullWidth
              >
                <MenuItem value="Father">Father</MenuItem>
                <MenuItem value="Mother">Mother</MenuItem>
                <MenuItem value="Guardian">Guardian</MenuItem>
              </Select>
              <input
                type="text"
                id="fatherName"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                style={{ width: "100%", marginTop: "10px", padding: "8px" }}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => handleDialogToggle(setOpenFatherName, false)}
                color="secondary"
              >
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default FamilyReligious;
