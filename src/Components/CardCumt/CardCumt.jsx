import * as React from 'react';
import fondoImage from "../../assets/Img_fondo.jpg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

const CardCumt = ({user}) => {
  return (
    <Card sx={{ minWidth: 265, maxWidth: 265,
        position: 'relative', overflow: 'visible',
        borderRadius: 2,
        boxShadow: '0px 4px 8px rgba(26, 27, 26, 0.83)',
        '&:hover': {
          boxShadow: '0px 4px 32px rgb(255, 255, 255)', 
        }}}>
        <CardActionArea>

          {/**
           * 
        <CardMedia
            component="img"
            height="440"
            image={user.image}
            alt={user.name}

            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              backgroundColor: 'rgb(159, 161, 163)',
              objectFit: 'contain',
              position: 'relative',
              overflow: 'visible', 
              zIndex: 2,
              '&:hover': {
                transform: 'scale(1.05)' // Aumenta un 5% el tamaño
              }
            }}
           
        />
           */}

        <Box sx={{
          position: 'relative',
          height: 440,
          overflow: 'visible',
          zIndex: 2,
          backgroundImage: `url(${fondoImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'

        }}>
          <Box
            component="img"
            src={user.image}
            alt={user.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: 'transparent',
              transition: 'transform 0.5s ease',
              '&:hover': {
                overflow: 'visible',
                transform: 'scale(1.1)',
                zIndex: 10 
              }
            }}
          />
        </Box>

        <CardContent sx={{ 
          position: 'relative',
          overflow: 'visible', 
          zIndex: 1, 
          backgroundColor: 'white',
          borderRadius: 2
        }}>
            <Typography gutterBottom variant="h5" component="div" 
            sx={{ fontSize: '1.5rem',  color: 'Black',  fontWeight: 700, fontFamily: 'cursive', mb: 1}}>
              {user.name}
            </Typography>
            <Typography variant="body2" 
            sx={{ fontSize: '1.1rem',  color: 'rgb(129, 131, 133)',fontWeight: 700, fontFamily: 'cursive', mb: 1}}>
              {user.race}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default CardCumt