import React from 'react'
import bgImg from '../assets/bg.png'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

function Home() {
  return (<Box
    component="section"
    sx={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100',
      "&::before": {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }
    }}
  >
    <Container sx={{
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
    }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '4rem',
        }}
      >
        Welcome to the Movie App
      </Typography>
      <Button
        to="/movies"
        component={Link}
        variant="contained"
        size="large"
      > Go to Movies </Button>
    </Container>

  </Box>)
};

export default Home;