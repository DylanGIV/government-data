import {
  Flex,
  SearchField,
  SelectField,
  useTheme,
} from '@aws-amplify/ui-react';
import React, { useContext } from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import HomeCard from '../../components/homeCard/homeCard.component';
import { UserContext } from '../../context/user.context.tsx';
import SearchNSN from '../../components/searchNSN/searchNSN.component';
const Home = () => {
  // Sample aerospace parts data
  const HomeCardInformation = [
    {
      id: 1,
      name: 'Inventory',
      description: 'Manage your inventory',
      image: 'image-url',
      link: 'inventory',
    },
    {
      id: 2,
      name: 'RFQs',
      description: 'View and manage your RFQs',
      image: 'image-url',
      link: 'rfq',
    },
  ];

  const { tokens } = useTheme();
  const { docWidth, mobile } = useContext(UserContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '35px',
        height: '100%',
      }}
    >
      <Flex
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: tokens.colors.background.primary,
          marginBottom: 15,
          borderRadius: 15,
          rowGap: '40px',
          width: mobile ? '100%' : docWidth / 1.1,
          maxWidth: '1075px',
          padding: '15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h3'
            align='center'
            gutterBottom
            style={{
              marginTop: 25,
              fontWeight: 'bold',
            }}
          >
            Data Control
          </Typography>
          <Typography
            variant='h5'
            align='center'
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
      </Flex>
    </div>
  );
};

export default Home;
