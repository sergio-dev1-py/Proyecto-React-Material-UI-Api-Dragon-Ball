import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';


const CardCusmDetail = ({user}) => {
  const [currentTransformation, setCurrentTransformation] = useState(-1);
  const [currentData, setCurrentData] = useState(user);

  // Verifica si el personaje tiene transformaciones
  const hasTransformations = user.transformations?.length > 0;

  const handleTransform = () => {
    if (!hasTransformations) return;

    if (currentTransformation === -1) {
      setCurrentTransformation(0);
      setCurrentData({
        ...user,
        name: user.transformations[0].name,
        image: user.transformations[0].image,
        ki: user.transformations[0].ki
      });
    } 
    // Si estamos en la última transformación, volvemos a la forma base
    else if (currentTransformation === user.transformations.length - 1) {
      setCurrentTransformation(-1);
      setCurrentData(user); // Restauramos los datos originales
    } 
    // Avanzamos a la siguiente transformación
    else {
      const nextIndex = currentTransformation + 1;
      setCurrentTransformation(nextIndex);
      setCurrentData({
        ...user,
        name: user.transformations[nextIndex].name,
        image: user.transformations[nextIndex].image,
        ki: user.transformations[nextIndex].ki
      });
    }
  };

  return (
    
    <Card sx={{ display: 'flex',
      flexDirection: 'row',
      width: 640, 
      height:700,
      backgroundColor: 'rgb(192, 187, 187)'
      }}>

      
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '50%' 
      }}>
      <CardContent sx={{ flex: '1 0 auto'}}>
        <Typography 
          component="div"

          sx={{ 
            fontSize: '3rem',
            fontWeight: 700,
            fontFamily: 'cursive',
            color: 'white',
            mb: 1}}>

            {currentData.name} 
            
        </Typography>

        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'Yellow', fontFamily: 'cursive', mb: -1}}
        >
          Raza
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'white', fontFamily: 'cursive', mb: 1 }}
        >
          {currentData.race}
        </Typography>


        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'Yellow', fontFamily: 'cursive', mb: -1}}
        >
          Género
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'white', fontFamily: 'cursive', mb: 1 }}
        >
          {user.gender}
        </Typography>
        


        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'Yellow', fontFamily: 'cursive', mb: -1}}
        >
          Ki Base
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'white', fontFamily: 'cursive', mb: 1 }}
        >
          {currentData.ki}
        </Typography>

        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'Yellow', fontFamily: 'cursive', mb: -1}}
        >
          Ki Total
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'white', fontFamily: 'cursive', mb: 1 }}
        >
          {user.maxKi}
        </Typography>


        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'Yellow', fontFamily: 'cursive', mb: -1}}
        >
          Afiliación
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: '1.4rem',  color: 'white', fontFamily: 'cursive', mb: 1 }}
        >
          {user.affiliation}
        </Typography>
        
      </CardContent>

      {hasTransformations && (
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            padding: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Tooltip arrow>
              <IconButton
                onClick={handleTransform}
                sx={{
                  width: 'auto',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    backgroundColor: 'Yellow',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ArrowUpwardIcon color="secundary" fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        )}

    </Box>


        <CardMedia
        component="img"
        image={currentData.image}
        alt={currentData.name}

        sx={{ 
          width: '60%',
          height: '100%',
          backgroundColor: 'rgb(159, 161, 163)',
          objectFit: 'contain'
          
        }}

        />
    </Card>
  )
}

export default CardCusmDetail