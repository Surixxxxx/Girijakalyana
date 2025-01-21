import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  Stack,
  Pagination,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import mathes from "../../../assets/mathes.jpeg";
// import premium from '../../../assets/premium.jpg'
import AboutPop from "./popupContent/abouPop/AboutPop";
import "./viewall.scss";
import EducationPop from "./popupContent/educationPop/EducationPop";
import FamilyPop from "./popupContent/familyPop/FamilyPop";
import LifeStylePop from "./popupContent/lifeStylePop/LifeStylePop";
import PreferencePop from "./popupContent/preferencePop/PreferencePop";

const ViewAll = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userCard, setUserCard] = useState([]);
  const [selectedCardDetails, setSelectedCardDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [details, setDetails] = useState(0);
  const totalItems = 30; // Example total items count
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event, newValue) => {
    setDetails(newValue);
  };

  const handleCardClick = (index) => {
    const selectedCard = userCard[index];
    setSelectedCardDetails(selectedCard);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getData = (page) => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserCard(data.slice(0, 20));
      })
      .catch((error) => console.log(error));
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    getData(page);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  const renderContent = () => {
    switch (details) {
      case 0:
        return <AboutPop />;
      case 1:
        return <FamilyPop />;
      case 2:
        return <EducationPop />;
      case 3:
        return <LifeStylePop />;
      case 4:
        return <PreferencePop />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box className="viewall-main-container">
        <Box className="viewall-header-part">
          <h3
            className="viewall-user-name"
            style={{
              color: "#34495e",
              fontWeight: 700,
              // background: "rgba(0,0,0,0.1)",
              padding: "5px",
              borderRadius: 5,
            }}
          >
            View All
          </h3>
        </Box>
        <Box className="viewall-card-stack-div">
          {userCard.map((card, index) => (
            <Box
              key={index}
              className="viewall-div-card1"
              onClick={() => handleCardClick(index)}
            >
              <Box className="viewall-img-div">
                <Box className="viewall-sub-img-div">
                  <figure>
                    <img
                      style={{ borderRadius: "5px" }}
                      className="viewall-card-user-dp"
                      src={mathes}
                      alt="user-dp"
                    />
                  </figure>
                </Box>
              </Box>
              <Box
                className="viewall-sub-div1-card1"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link className="viewall-sub-div1-link">
                  <h2
                    className="viewall-sub-div1-heading"
                    style={{ color: "#34495e", fontWeight: 600 }}
                  >
                    Naveen
                  </h2>
                </Link>
                <p
                  className="viewall-sub-div1-para"
                  style={{ color: "#34495e", fontWeight: 600 }}
                >
                  Bangalore
                </p>
              </Box>
              <Box className="viewall-sub-div2-card1">
                <Box className="viewall-sub-div3-card1">
                  <span className="viewall-sub-div3-age">{card.id}</span>
                  <span className="viewall-sub-div3-text">Age</span>
                </Box>
                <Box className="viewall-sub-div4-card1">
                  <span className="viewall-sub-div4-age">5.4</span>
                  <span className="viewall-sub-div4-text">Height</span>
                </Box>
                <Box className="viewall-sub-div5-card1">
                  <span className="viewall-sub-div5-age">SGM333</span>
                  <span className="viewall-sub-div5-text">Reg No</span>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>


        <Dialog
      maxWidth="md"
      open={openDialog}
      onClose={handleCloseDialog}
      PaperProps={{
        style: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "5px",
          width:'900px',
          borderRadius: "8px",
          backgroundColor: "#34495e", 
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          overflowX:'auto',
          overflowY:"hidden",
          minHeight: "80vh",
        },
      }}
    >
      <DialogContent sx={{ padding: "0px", backgroundColor: "#34495e" }}>
        <Box className="user-name-age" >
          <DialogActions />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap',backgroundColor: "#34495e", }}>
          {/* User Profile Picture */}
          <Box sx={{ flex: 1, maxWidth: '250px',justifySelf:'center' }}>
            <img
              className="user-profile-pic"
              src={mathes}
              alt="user-dp"
              style={{
                width: "260px",
                height: "200px",
           
                marginTop:'26%',
                borderRadius: "8px",
                // border: "2px solid #1976d2",
              }}
            />
          </Box>

          {/* Tabs Section */}
          <Box sx={{ flex: 2, minWidth: '300px' }}>
            <Tabs
              value={details}
              onChange={handleChange}
              centered
              // textColor="primary"
              // indicatorColor="primary"
              sx={{ mb: 2 }}
            >
              <Tab label="About" sx={{color:'#fff'}} />
              <Tab label="Family" sx={{color:'#fff'}}/>
              <Tab label="Education" sx={{color:'#fff'}}/>
              <Tab label="LifeStyle" sx={{color:'#fff'}}/>
              <Tab label="Preference" sx={{color:'#fff'}}/>
            </Tabs>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                backdropFilter: 'none', 
                minHeight: '200px', 
              }}
            >
              {renderContent()}
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex",justifyContent:'start', alignItems: "center",gap:'60px',marginLeft:'15px' }}>
          {/* Verified Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ color: "#28a745", fontWeight: 600 }}>Verified</h2>
           
          </Box>
          <Box>
            <Button
             variant="contained"
             sx={{
              backgroundColor:'#fff',
              textTransform:'capitalize',
              color:'#34495e',
              fontWeight:700,
              fontSize:'20px'
             }}
            >
              Express Interest
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>


        <Box
          className="viewall-pagination-div"
          sx={{
            display: "flex",
            justifySelf:'end',
            // alignItems: "center",
            marginTop:'15px',
            marginLeft:'900px',
            padding: "1rem",
            gap: "1rem",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            
              shape="rounded"
              color="primary"
              siblingCount={1}
              boundaryCount={1}
           
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "14px",
                  fontWeight: "500",
                  "&.Mui-selected": {
                    backgroundColor: "#2575fc",
                    color: "#fff",
                    fontWeight: "700",
                  },
                },
              }}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ViewAll;
