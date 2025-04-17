
import { Card, Typography, Box, Avatar } from '@mui/material';
import myPhoto from './assets/img_perfil.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material'; 

const CardAbout = () => {
  return (

    <Card sx={{ 
        maxWidth: 800, 
        mx: 'auto', 
        p: 4,
        mt: 4,
        textAlign: 'center',
        backgroundColor: 'rgb(159, 161, 163)'
      }}>
        <Avatar
          src={myPhoto}
          sx={{
            width: 250,
            height: 250,
            mx: 'auto',
            mb: 1,
            border: '4px solid black'
          }}
        />
        

        <Typography component="h2" sx={{ fontSize: '1.7rem', fontWeight: 700, fontFamily: 'cursive', color: 'black', mb: 1}}>
            Sergio Mosquera
        </Typography>
        

        <Typography component="div" variant="body1" paragraph sx={{ fontSize: '1.5rem', mb: 4  }}>
        
        <Link 
            href="https://github.com/sergio-dev1-py"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
                color: 'black',
                textDecoration: 'none',
                fontFamily: 'cursive',
                '&:hover': { textDecoration: 'underline' },
                mr: 3
            }}
        >
            <GitHubIcon /> sergio-dev1-py
        </Link>
        
        <Link 
            href="https://www.instagram.com/sergiomosquer69/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
                color: 'black',
                textDecoration: 'none',
                fontFamily: 'cursive',
                '&:hover': { textDecoration: 'underline' }
            }}
        >
            <InstagramIcon /> sergiomosquer69
        </Link>
        </Typography>

        <Typography component="h2" sx={{ fontSize: '1.7rem', fontWeight: 700, fontFamily: 'cursive', 
            color: 'black', mb: 1}}>
            Sobre mí
        </Typography>

        <Typography component="div" variant="body1" paragraph sx={{ fontSize: '1.2rem', 
            fontFamily: 'cursive', textAlign: 'justify', mb: 3 }}>
         Hola, Soy Sergio Andres Mosquera Saavedra, estudiante de Ingeniería de Sistemas de la Univerdidad
           de la Amazonia, actualmente curso la materia de programación Web.
        </Typography>

        <Typography component="h2" sx={{ fontSize: '1.7rem', fontWeight: 700, fontFamily: 'cursive', color: 'black', mb: 1}}>
            Acerca del proyecto
        </Typography>
        
        <Typography component="div" variant="body1" paragraph sx={{ fontSize: '1.2rem', 
            fontFamily: 'cursive', textAlign: 'justify', mb: 3 }}>
         Este proyecto fue creado con React, el cual consume la API de Dragon Ball, mostrando personajes
          con información como nombre, imagen, raza, etc. Usa Material UI para un diseño moderno, 
          limpio y rápido, ademas es reponsive.
        </Typography>
        
    </Card>   
  );
}

export default CardAbout