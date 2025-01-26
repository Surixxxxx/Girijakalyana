import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mathes from "../../Userprofile/myMatches/mathes.jpeg";

const MyMatches = () => {
  const navigate = useNavigate();
  const [userCard, setUserCard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = 38; // Total number of items (assume 50 for example)

  const handleModifyButton = () => {
    navigate("/user/profile");
  };

  const getData = async (page) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${itemsPerPage}`
      );
      const data = await response.json();
      setUserCard(data.slice(0, 20));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(page);
      getData(page);
    }
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  const renderPagination = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const visiblePages = [];
    const maxVisible = 5; // Max visible pages around the current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        visiblePages.push(i);
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        visiblePages.push("...");
      }
    }

    return visiblePages.map((page, index) =>
      page === "..." ? (
        <Typography key={index} variant="body1" sx={{ marginX: 1 }}>
          ...
        </Typography>
      ) : (
        <Button
          key={page}
          variant={page === currentPage ? "contained" : "outlined"}
          color="primary"
        
          sx={{ marginX: 1,padding:1,width:'40px',height:'35px',border:'none' }}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      )
    );
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f9f9f9",marginBottom:'10px',paddingLeft:0 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#34495e">
          My Partner Preferences
        </Typography>
        <Button variant="contained" sx={{background:'#34495e',color:'#fff'}} onClick={handleModifyButton}>
          Modify
        </Button>
      </Box>
      <Divider />

      {/* Cards Section */}
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        justifyContent={'space-evenly'}
        sx={{  marginTop: 2,gap:3,paddingLeft:0 }}
      >
        {userCard.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: "220px",
              marginBottom: "90px",
              height:'380px',
              borderRadius: 2,
              boxShadow: 3,
              textAlign: "center",
              padding: 2,
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={mathes}
              alt="user-dp"
              sx={{
                borderRadius: "3%",
                margin: "0 auto",
                marginBottom: 2,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="#34495e">
                Naveen
              </Typography>
              <Typography color="text.primary">Bangalore</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 1,
                }}
              >
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    {card.id}
                  </Typography>
                  <Typography variant="caption" color="text.primary">
                    Age
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    5.4
                  </Typography>
                  <Typography variant="caption" color="text.primary">
                    Height
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    SGM333
                  </Typography>
                  <Typography variant="caption" color="text.primary">
                    Reg No
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Pagination Section */}
      <Box
        sx={{
          display: "flex",
          justifySelf:'end',
          alignItems: "center",
          margin: 2,

        }}
      >
        <IconButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          color="primary"
          
        >
          <FaChevronLeft />
        </IconButton>
        {renderPagination()}
        <IconButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
          color="primary"
        >
          <FaChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MyMatches;
