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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const MyMatches = () => {
  const navigate = useNavigate();
  const [userCard, setUserCard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 8;

  const handleModifyButton = () => {
    navigate("/user/profile");
  };
  const loggedUserId = localStorage.getItem("userId");

  // console.log("======", loggedUserId)

  const getData = async (page) => {
    try {
      const response = await axios.get("http://localhost:5000/api/users", {
        params: {
          page: page,
          limit: itemsPerPage,
        },
      });
      setUserCard(response.data.users); // Assuming API returns { users: [...] }
      setTotalItems(response.data.totalItems); // Assuming API returns totalItems
    } catch (error) {
      console.error("Error fetching data:", error);
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

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", marginBottom: "10px" }}>
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
          My Matches
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "#34495e", color: "#fff" }}
          onClick={handleModifyButton}
        >
          Modify
        </Button>
      </Box>
      <Divider />

      {/* Cards Section */}
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        justifyContent={"space-evenly"}
        sx={{ marginTop: 2, gap: 3 }}
      > {userCard
        .filter((card) => card.userId !== loggedUserId) // Filter out the logged-in user's card
        .map((card) => (
          <Card
            key={card.userId}
            sx={{
              width: "270px",
              marginBottom: "90px",
              height: "380px",
              borderRadius: 1,
              boxShadow: 3,
              textAlign: "center",
              padding: 1,
            }}
          >
            <CardMedia
              component="img"
              height="230px"
              image={card.profileImg || "/default-placeholder.png"} // Default image if profileImg is missing
              alt="user-dp"
              sx={{
                borderRadius: "2%",
             
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="#34495e" textTransform={'capitalize'}>
                {`${card.firstName} ${card.lastName || ""}`}
              </Typography>
              <Typography color="text.primary">{card.address || "N/A"}</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 0,
                }}
              >
                <Box>
                  <Typography variant="body1" fontWeight="bold"  sx={{color:'black'}}>
                    {card.parentPrefer?.toAge || "N/A"}
                  </Typography>
                  <Typography variant="caption" c sx={{color:'gray'}}>
                    Age
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" fontWeight="bold"  sx={{color:'black'}}>
                    {card.parentPrefer?.fromHeight || "N/A"}
                  </Typography>
                  <Typography variant="caption" sx={{color:'gray'}}>
                    Height
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" fontWeight="bold"  sx={{color:'black'}}>
                    {card.userId}
                
                  </Typography>
                  <Typography variant="caption" sx={{color:'gray'}}>
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
          justifyContent: "end",
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
        <Button variant="body1" sx={{ marginX: 2,border:1 }}>
           {currentPage}
        </Button>
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
