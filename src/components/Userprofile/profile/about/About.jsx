import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";

const About = ({ render }) => {
  const [pincode, setPincode] = useState("583115");
  const [address, setAddress] = useState("Bengalore");
  const [occupationCountry, setOccupationCountry] = useState("India");
  const [language, setLanguage] = useState("Kannada");

  const [dialog, setDialog] = useState({ open: false, type: "" });

  const handleOpenDialog = (type) => setDialog({ open: true, type });
  const handleCloseDialog = () => setDialog({ open: false, type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { type } = dialog;

    if (type === "address") {
      setAddress(e.target.elements.address.value);
      setPincode(e.target.elements.pincode.value);
    } else if (type === "occupationCountry") {
      setOccupationCountry(e.target.elements.occupationCountry.value);
    } else if (type === "language") {
      setLanguage(e.target.elements.language.value);
    }

    handleCloseDialog();
    render(true);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
      <Stack spacing={5}>
        {/* Basic Information */}
        <Box>
          <Typography variant="h5" gutterBottom sx={{ color: "#2c3e50", fontWeight: 600 }}>
            Basic Information
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "1rem", color: "#34495e" }}>Email Id</TableCell>
                  <TableCell sx={{ fontSize: "1rem" }}>malli@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "1rem", color: "#34495e" }}>Phone No.</TableCell>
                  <TableCell sx={{ fontSize: "1rem" }}>9986362636</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "1rem", color: "#34495e" }}>Address</TableCell>
                  <TableCell sx={{ fontSize: "1rem" }}>
                    {address}
                    <IconButton
                      onClick={() => handleOpenDialog("address")}
                      sx={{ ml: 1 }}
                    >
                      <FaEdit style={{ color: "#3498db",fontSize:'18px' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "1rem", color: "#34495e" }}>Pin Code</TableCell>
                  <TableCell sx={{ fontSize: "1rem" }}>{pincode}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Personal Information */}
        <Box>
          <Typography variant="h5" gutterBottom sx={{ color: "#2c3e50", fontWeight: 600 }}>
            Personal Information
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "1rem", color: "#34495e" }}>Language</TableCell>
                  <TableCell sx={{ fontSize: "1rem" }}>
                    {language}
                    <IconButton
                      onClick={() => handleOpenDialog("language")}
                      sx={{ ml: 1 }}
                    >
                      <FaEdit style={{ color: "#3498db",fontSize:'18px' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "1rem", color: "#34495e" }}>Occupation Country</TableCell>
                  <TableCell sx={{ fontSize: "1rem" }}>
                    {occupationCountry}
                    <IconButton
                      onClick={() => handleOpenDialog("occupationCountry")}
                      sx={{ ml: 1 }}
                    >
                      <FaEdit style={{ color: "#3498db",fontSize:'18px' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>

      {/* Dialog for Editing */}
      <Dialog open={dialog.open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <DialogContent>
            {dialog.type === "address" && (
              <>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Edit Address
                </Typography>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  defaultValue={address}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Pin Code"
                  name="pincode"
                  defaultValue={pincode}
                  margin="normal"
                />
              </>
            )}
            {dialog.type === "occupationCountry" && (
              <>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Edit Occupation Country
                </Typography>
                <TextField
                  fullWidth
                  label="Occupation Country"
                  name="occupationCountry"
                  defaultValue={occupationCountry}
                  margin="normal"
                />
              </>
            )}
            {dialog.type === "language" && (
              <>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Edit Language
                </Typography>
                <TextField
                  fullWidth
                  label="Language"
                  name="language"
                  defaultValue={language}
                  margin="normal"
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} sx={{ fontWeight: 600 }}>
              Cancel
            </Button>
            <Button type="submit"  color="primary" sx={{ fontWeight: 600 }}>
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default About;
