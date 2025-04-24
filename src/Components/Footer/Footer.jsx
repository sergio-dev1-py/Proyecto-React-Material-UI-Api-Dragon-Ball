import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Typography component="div" variant="body1" sx={{ 
        fontSize: '1.5rem',
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link 
          href="https://github.com/sergio-dev1-py"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'black',
            textDecoration: 'none',
            fontFamily: 'cursive',
            '&:hover': { 
              textDecoration: 'underline', 
              color: "primary.main" 
            }
          }}
        >
          <GitHubIcon fontSize="large" />
        </Link>
        
        <Link 
          href="https://www.instagram.com/sergiomosquer69/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'black',
            textDecoration: 'none',
            fontFamily: 'cursive',
            '&:hover': { 
              textDecoration: 'underline', 
              color: "secondary.main" 
            }
          }}
        >
          <InstagramIcon fontSize="large" />
        </Link>
      </Typography>

      <Typography variant="body2" sx={{ 
        mt: 2,
        color: 'white',
        fontFamily: 'cursive'
      }}>
        Construido por: Sergio Mosquera © {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}

export default Footer