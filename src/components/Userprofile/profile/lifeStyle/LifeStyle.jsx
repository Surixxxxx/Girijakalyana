import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  MenuItem,
  Select,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import { FaEdit, FaTimes } from "react-icons/fa";
import jsondata from "../eduction/jsondata/data.json";

const LifeStyle = ({ render }) => {
  const values = jsondata;
  const [openDialog, setOpenDialog] = useState(false);
  const [drink, setDrink] = useState("No");
  const [smoke, setSmoke] = useState("No");
  const [diet, setDiet] = useState("Veg");
  const [sunsign, setSunsign] = useState("Aries");
  const [bloodgroup, setBloodgroup] = useState("A+");
  const [bodyType, setBodyType] = useState("Average");
  const [skinType, setSkinType] = useState("Fair");

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleAllDataSubmit = (e) => {
    e.preventDefault();
    setOpenDialog(false);
    render(true);
  };

  return (
    <Box sx={{ fontFamily: "Outfit, sans-serif", padding: "16px" }}>
      <Stack spacing={3}>
        {/* LifeStyle Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: "8px" }}
          >
            <Typography variant="h6" color='#34495e' fontWeight={700}>Life Style</Typography>
            <IconButton onClick={handleOpenDialog} sx={{ color: "#1976d2" }}>
              <FaEdit />
            </IconButton>
          </Box>
          <Table sx={{ border: "1px solid #ddd" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5",fontSize:'18px' }}>
                  Category
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" ,fontSize:'18px'}}>
                  Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Drink</TableCell>
                <TableCell>{drink}</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                <TableCell>Smoke</TableCell>
                <TableCell>{smoke}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Diet</TableCell>
                <TableCell>{diet}</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                <TableCell>Sunsign</TableCell>
                <TableCell>{sunsign}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Blood Group</TableCell>
                <TableCell>{bloodgroup}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        {/* Appearance Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: "8px" }}
          >
            <Typography variant="h6" color="#34495e" fontWeight={700}>Appearance</Typography>
            <IconButton onClick={handleOpenDialog} sx={{ color: "#1976d2" }}>
              <FaEdit />
            </IconButton>
          </Box>
          <Table sx={{ border: "1px solid #ddd" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5",fontSize:'18px' }}>
                  Category
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5",fontSize:'18px' }}>
                  Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Body Type</TableCell>
                <TableCell>{bodyType}</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                <TableCell>Skin Type</TableCell>
                <TableCell>{skinType}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Stack>

      {/* Dialog */}
      <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            width: "50%",
            position: "fixed",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <Box sx={{ padding: "16px", fontFamily: "Outfit, sans-serif" }}>
          <DialogContent>
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Life Style & Appearance
            </Typography>
            <DialogActions>
              <FaTimes
                onClick={handleCloseDialog}
                style={{ cursor: "pointer", fontSize: "20px", color: "#d32f2f" }}
              />
            </DialogActions>

            <form onSubmit={handleAllDataSubmit}>
              <Box sx={{ marginBottom: "16px" }}>
                <Typography>Drink</Typography>
                <Select
                  size="small"
                  fullWidth
                  value={drink}
                  onChange={(e) => setDrink(e.target.value)}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Occasionally">Occasionally</MenuItem>
                </Select>
              </Box>

              {/* Repeat similar structure for Smoke, Diet, Sunsign, Blood Group, Skin Type, Body Type */}
              <Divider sx={{ marginY: "16px" }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={handleCloseDialog}>
                  Close
                </Button>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
              </Box>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default LifeStyle;
