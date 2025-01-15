import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleLeft, FaAngleRight, FaRegEdit, FaSearch } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, InputAdornment, Pagination, Stack, FormControl, Select, MenuItem, InputLabel, Typography } from "@mui/material";
import './Resetpassword.scss';

const ResetPassword = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredRecords = records.filter((record) =>
    [record.name, record.username, record.email, record.phone, record.address.city]
      .some((field) => field.toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredRecords.length / rowsPerPage);
  const displayedRecords = filteredRecords.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSearch = (e) => setSearch(e.target.value);
  const handlePageChange = (page) => setCurrentPage(page);
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="reset-password-user">
      <div className="firsthead">
        <Typography style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Typography variant="h4" gutterBottom color="#34495e" fontWeight={600} marginBottom={2} fontFamily={"Outfit sans-serif"}>Reset Password</Typography>

        {/* Rows per page */}
        <div className="rows-per-page">
          {/* <label>Show </label> */}
          <FormControl sx={{ width: 100 }}>
            <InputLabel>Rows</InputLabel>
            <Select value={rowsPerPage} onChange={handleRowsPerPageChange} label="Rows">
              {[6, 10, 15, 20].map((num) => (
                <MenuItem key={num} value={num}>{num}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <label> Entries</label> */}
        </div>
        </Typography>
        {/* Search input */}
        <div className="search-div">
          {/* <label htmlFor="search" className="serachLabel">Search:</label> */}
          <TextField
            id="search"
            label='search'
            variant="outlined"
            onChange={handleSearch}
            placeholder="Search records"
            autoComplete="off"
            // sx={{ width: 300 }}
            InputProps={{
                       startAdornment: (
                         <InputAdornment position="start" style={{ marginRight: "8px" }}>
                           <FaSearch />
                         </InputAdornment>
                       ),
                     }}
          />
        </div>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>Registration No</TableCell>
              <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>Name</TableCell>
              <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>Username</TableCell>
              <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>Password</TableCell>
              <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>Status</TableCell>
              <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRecords.map((record, index) => (
              <TableRow key={record.id}>
                <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>-</TableCell>
                <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'18px'}}>{record.name}</TableCell>
                <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'17px'}}>{record.username}</TableCell>
                <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'17px'}}>-</TableCell>
                <TableCell sx={{fontFamily:"Outfit sans-serif",fontSize:'17px'}}>
                  <span className={index % 2 === 0 ? "" : ""}>
                    {index % 2 === 0 ? "Active" : "Pending"}
                  </span>
                </TableCell>
                <TableCell>
                  <button style={{padding:'7px',borderRadius:'5px',border:'none',cursor:'pointer',fontFamily:'Outfit sans-serif',fontSize:'15px'}}>
                     Change Password
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack spacing={2} direction="row" justifySelf={'end'} mt={3}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => handlePageChange(page)}
          shape="rounded"
          color="primary"
          siblingCount={1}
          boundaryCount={1}
        />
      </Stack>
    </div>
  );
};

export default ResetPassword;
