import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
// import wall1 from "../../assets/wallpaper/wall1.jpg";
// import wall2 from "../../assets/wallpaper/wall2.jpg";
// import card4 from "../../assets/card4.jpg";

const UserDashboard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedCardDetails, setSelectedCardDetails] = useState({});
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [userCard, setUserCard] = useState([]);

  const handleCardClick = (index) => {
    const selectedCard = userCard[index];
    setSelectedCardDetails(selectedCard);
    setSelectedCardIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedCardIndex(null);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUserCard(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const renderCards = () => {
    const cardSets = [];
    const numberOfCardsPerRow = 3;
    // const images = [];

    for (let i = 0; i < userCard.length; i += numberOfCardsPerRow) {
      const cards = userCard.slice(i, i + numberOfCardsPerRow);

      cardSets.push(
        <Stack direction="row" spacing={2} key={i} justifyContent="center">
          {cards.map((card, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(i + index)}
              sx={{
                width: "300px",
                cursor: "pointer",
                boxShadow: 3,
                transition: "0.3s",
                '&:hover': { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                // image={images[(i + index) % images.length]}
                alt="Profile"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.address.street}
                </Typography>
                <Stack direction="row" justifyContent="space-between" mt={2}>
                  <Box>
                    <Typography variant="body2">Age</Typography>
                    <Typography variant="h6">{card.id}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">Height</Typography>
                    <Typography variant="h6">5.4</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">Reg No</Typography>
                    <Typography variant="h6">SGM333</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      );
    }
    return cardSets;
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, Rama S
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Top Stats Section */}
      <Stack direction="row" spacing={3} justifyContent="space-around" mb={5}>
        {[
        //   { icon: wall1, count: 1, label: "Interested Profiles" },
        //   { icon: wall2, count: 4, label: "Request Sent" },
        //   { icon: , count: 599, label: "Recent Registers" },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "300px",
              textAlign: "center",
              p: 2,
              boxShadow: 3,
            }}
          >
            <img src={item.icon} alt={item.label} style={{ height: "50px" }} />
            <Typography variant="h3" mt={2}>
              {item.count}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {item.label}
            </Typography>
          </Card>
        ))}
      </Stack>

      {/* Interested Profiles Section */}
      <Typography variant="h5" gutterBottom>
        Interested Profiles
      </Typography>
      <Stack spacing={4} mt={2}>
        {renderCards()}
      </Stack>

      {/* Popup Modal */}
      {isPopupOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card sx={{ p: 3, width: "400px" }}>
            <Typography variant="h5" gutterBottom>
              {selectedCardDetails.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              ID: {selectedCardDetails.id}
            </Typography>
            <Button variant="contained" color="primary" onClick={closePopup}>
              Close
            </Button>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default UserDashboard;
