import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useTheme } from '@aws-amplify/ui-react';

const HomeCard = ({ card }) => {
  const [hovering, setHovering] = useState(null);
  const navigate = useNavigate();
  const { tokens } = useTheme();
  const background = `linear-gradient(35deg, ${tokens.colors.brand.primary[100]} 40%,${tokens.colors.brand.primary[80]} 70%, ${tokens.colors.brand.primary[40]} 100%`;
  return (
    <Card
      sx={{
        borderRadius: '15px',
        boxShadow: 3,
        width: '100%',
        opacity: hovering === card.id ? 0.5 : 1,
      }}
      style={{
        background: background,
      }}
      onMouseEnter={() => setHovering(card.id)}
      onMouseLeave={() => setHovering(null)}
    >
      <CardActionArea
        style={{ padding: 5 }}
        onClick={() => {
          navigate(`${card.link}`);
        }}
      >
        {/* <CardMedia
          component='img'
          height='140'
          image={card.image}
          alt={card.name}
        /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            style={{
              color: tokens.colors.font.inverse,
            }}
          >
            {card.name}
          </Typography>
          <Typography
            variant='body2'
            style={{
              color: tokens.colors.font.inverse,
            }}
          >
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeCard;
