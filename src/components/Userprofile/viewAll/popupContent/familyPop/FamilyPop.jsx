import React from "react";
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from "@mui/material";

const FamilyPop = () => {
  const data = [
    { label: "Mother", value: "Manjula" },
    { label: "Siblings", value: "No Siblings" },
    { label: "Religion", value: "Hindu" },
    { label: "Caste", value: "Brahmin Smartha" },
    { label: "Sub Caste", value: "Smartha badagnadu" },
    { label: "Nakshatra", value: "Vishakha 1st Pada" },
    { label: "Rashi", value: "Tula" },
    { label: "Gotra", value: "Bharadwaja" },
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Family Information
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

export default FamilyPop;
