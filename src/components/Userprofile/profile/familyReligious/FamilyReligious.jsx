import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Stack,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";

const FamilyReligious = ({ render }) => {
  const [fatherName, setFatherName] = useState("Rama");
  const [motherName, setMotherName] = useState("Sita");
  const [selectParentType, setSelectParentType] = useState("Father");
  const [subCaste, setSubCaste] = useState("Brahmin");
  const [nakshatra, setNakshatra] = useState("Anuradha");
  const [rashi, setRashi] = useState("Mesha");
  const [gotra, setGotra] = useState("Mallig");

  // Dialog states
  const [openFatherName, setOpenFatherName] = useState(false);
  const [openMotherName, setOpenMotherName] = useState(false);
  const [openSubCaste, setOpenSubCaste] = useState(false);
  const [openNakshatra, setOpenNakshatra] = useState(false);
  const [openRashi, setOpenRashi] = useState(false);
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
    fontSize: '18px',
  };

  return (
    <Box
      padding={3}
      sx={{
        maxWidth: "800px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      {/* Family and Religious Background Content */}
      <Stack spacing={4}>
        {/* Family Table */}
        <Box>
          <Typography variant="h6" color="#34495e" gutterBottom>
            Family
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Father</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    {fatherName}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db", fontSize: '18px' }}
                      onClick={() => handleDialogToggle(setOpenFatherName, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Mother</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    {motherName}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db", fontSize: '18px' }}
                      onClick={() => handleDialogToggle(setOpenMotherName, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Sibling</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>No Sibling</TableCell>
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
                  <TableCell sx={{ fontSize: '18px' }}>Hindu</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Caste</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>Brahmin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Sub Caste</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    {subCaste}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db", fontSize: '18px' }}
                      onClick={() => handleDialogToggle(setOpenSubCaste, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Nakshatra</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    {nakshatra}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db", fontSize: '18px' }}
                      onClick={() => handleDialogToggle(setOpenNakshatra, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Rashi</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    {rashi}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db", fontSize: '18px' }}
                      onClick={() => handleDialogToggle(setOpenRashi, true)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableHeaderStyle}>Gotra</TableCell>
                  <TableCell sx={{ fontSize: '18px' }}>
                    {gotra}
                    <FaEdit
                      style={{ marginLeft: "10px", cursor: "pointer", color: "#3498db", fontSize: '18px' }}
                      onClick={() => handleDialogToggle(setOpenGotra, true)}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>

      {/* Dialog for Father Name */}
      <Dialog
        maxWidth="sm"
        open={openFatherName}
        onClose={() => handleDialogToggle(setOpenFatherName, false)}
      >
        <DialogContent>
          <Typography variant="h6" color="#34495e" marginBottom={2}>
            Edit Father Name
          </Typography>
          <form onSubmit={(e) => handleDialogSubmit(e, setFatherName, "fatherName")}>
            <Box marginBottom={2}>
              <input
                type="text"
                id="fatherName"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => handleDialogToggle(setOpenFatherName, false)}
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ backgroundColor: "#34495e", color: "#fff", textTransform: "capitalize" }}>
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog for Mother Name */}
      <Dialog
        maxWidth="sm"
        open={openMotherName}
        onClose={() => handleDialogToggle(setOpenMotherName, false)}
      >
        <DialogContent>
          <Typography variant="h6" color="#34495e" marginBottom={2}>
            Edit Mother Name
          </Typography>
          <form onSubmit={(e) => handleDialogSubmit(e, setMotherName, "motherName")}>
            <Box marginBottom={2}>
              <input
                type="text"
                id="motherName"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => handleDialogToggle(setOpenMotherName, false)}
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ backgroundColor: "#34495e", color: "#fff", textTransform: "capitalize" }}>
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog for Sub Caste */}
      <Dialog
        maxWidth="sm"
        open={openSubCaste}
        onClose={() => handleDialogToggle(setOpenSubCaste, false)}
      >
        <DialogContent>
          <Typography variant="h6" color="#34495e" marginBottom={2}>
            Edit Sub Caste
          </Typography>
          <form onSubmit={(e) => handleDialogSubmit(e, setSubCaste, "subCaste")}>
            <Box marginBottom={2}>
              <input
                type="text"
                id="subCaste"
                value={subCaste}
                onChange={(e) => setSubCaste(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => handleDialogToggle(setOpenSubCaste, false)}
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ backgroundColor: "#34495e", color: "#fff", textTransform: "capitalize" }}>
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog for Nakshatra */}
      <Dialog
        maxWidth="sm"
        open={openNakshatra}
        onClose={() => handleDialogToggle(setOpenNakshatra, false)}
      >
        <DialogContent>
          <Typography variant="h6" color="#34495e" marginBottom={2}>
            Edit Nakshatra
          </Typography>
          <form onSubmit={(e) => handleDialogSubmit(e, setNakshatra, "nakshatra")}>
            <Box marginBottom={2}>
              <input
                type="text"
                id="nakshatra"
                value={nakshatra}
                onChange={(e) => setNakshatra(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => handleDialogToggle(setOpenNakshatra, false)}
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ backgroundColor: "#34495e", color: "#fff", textTransform: "capitalize" }}>
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog for Rashi */}
      <Dialog
        maxWidth="sm"
        open={openRashi}
        onClose={() => handleDialogToggle(setOpenRashi, false)}
      >
        <DialogContent>
          <Typography variant="h6" color="#34495e" marginBottom={2}>
            Edit Rashi
          </Typography>
          <form onSubmit={(e) => handleDialogSubmit(e, setRashi, "rashi")}>
            <Box marginBottom={2}>
              <input
                type="text"
                id="rashi"
                value={rashi}
                onChange={(e) => setRashi(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => handleDialogToggle(setOpenRashi, false)}
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ backgroundColor: "#34495e", color: "#fff", textTransform: "capitalize" }}>
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog for Gotra */}
      <Dialog
        maxWidth="sm"
        open={openGotra}
        onClose={() => handleDialogToggle(setOpenGotra, false)}
      >
        <DialogContent>
          <Typography variant="h6" color="#34495e" marginBottom={2}>
            Edit Gotra
          </Typography>
          <form onSubmit={(e) => handleDialogSubmit(e, setGotra, "gotra")}>
            <Box marginBottom={2}>
              <input
                type="text"
                id="gotra"
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
              />
            </Box>
            <DialogActions>
              <Button
                onClick={() => handleDialogToggle(setOpenGotra, false)}
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ backgroundColor: "#34495e", color: "#fff", textTransform: "capitalize" }}>
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
