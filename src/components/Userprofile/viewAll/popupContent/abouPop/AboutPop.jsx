import React from "react";
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from "@mui/material";

const AboutPop = () => {
  const data = [
    { label: "Date of Birth", value: "01 - Aug - 1998" },
    { label: "Marital Status", value: "Unmarried" },
    { label: "Height", value: "5' 2'' - 157cm" },
    { label: "Language", value: "Kannada" },
    { label: "Country", value: "India" },
    { label: "State", value: "Karnataka" },
    { label: "City", value: "Bangalore" },
    { label: "Contact No", value: "9008717293" },
    { label: "Email Id", value: "manjulaprabhakar68@gmail.com" },
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          About Information
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold", width: "40%", backgroundColor: "#f9f9f9" }}
                  >
                    {row.label}
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
};

export default AboutPop;
