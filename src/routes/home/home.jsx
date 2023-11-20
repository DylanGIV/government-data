import {
  Flex,
  SearchField,
  SelectField,
  useTheme,
} from "@aws-amplify/ui-react";
import React, { useContext } from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import HomeCard from "../../components/homeCard/homeCard";
import { UserContext } from "../../context/user.context";
import SearchNSN from "../../components/searchNSN/searchNSN";
const Home = () => {
  // Sample aerospace parts data
  const HomeCardInformation = [
    {
      id: 1,
      name: "Inventory",
      description: "Manage your inventory",
      image: "image-url",
      link: "inventory",
    },
    {
      id: 2,
      name: "RFQs",
      description: "View and manage your RFQs",
      image: "image-url",
      link: "rfq",
    },
  ];

  const { tokens } = useTheme();
  const { docWidth, mobile } = useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "35px",
        height: "100vh",
        width: "100%",
        backgroundColor: tokens.colors.background.primary,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{
            marginTop: 25,
            fontWeight: "bold",
          }}
        >
          Data Control
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            marginBottom: 30,
          }}
        >
          Find NSN details, procurement history, and more!
        </Typography>
      </div>

      <SearchNSN />

      {/* <Grid container spacing={HomeCardInformation.length - 1}>
          {HomeCardInformation.map((card) => (
            <Grid item key={card.id} width='100%'>
              <HomeCard card={card} />
            </Grid>
          ))}
        </Grid> */}
    </div>
  );
};

export default Home;
