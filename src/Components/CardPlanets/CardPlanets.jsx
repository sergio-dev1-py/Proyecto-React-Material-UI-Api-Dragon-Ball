import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const CardPlanets = ({planeta}) => {

    if (!planeta) return null; 
  return (
    
    <Card sx={{ 
        maxWidth: 410,
        maxHeight: 900,
        margin: '0px 10px',
        backgroundColor: 'rgb(159, 161, 163)',
        color: 'white',
      }}>
        <CardMedia
          component="img"
          width="auto"
          height="auto"
          image={planeta.image}
          alt={`Planeta ${planeta.name}`}
          sx={{    
            objectFit: 'contain' }}
        />
        <CardContent >
          <Typography gutterBottom component="div" sx={{ fontSize: '1.9rem', 
            fontFamily: 'cursive',  mb: 1 }}>
            {planeta.name} {planeta.isDestroyed && "(Destruido)"}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'cursive',
             fontSize: '1.1rem', textAlign: 'justify', color: 'black' }}>
            {planeta.description}
          </Typography>
        </CardContent>
      </Card>
  )
}

export default CardPlanets