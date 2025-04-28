import React from 'react';
import { Typography } from '@mui/material';
import profileImage from '../assets/aa.png';

function Hero() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '2rem',
        gap: '2rem',
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white' }}>
          Hello there! I'm Kimi!
        </Typography>
        <Typography variant="h5" component="h2" sx={{ color: 'white' }}>
          I build amazing web experiences.
        </Typography>
      </div>

      <img 
        src={profileImage}
        alt="My profile" 
        style={{ 
          width: '500px', 
          height: 'auto', 
          borderRadius: '10px'
        }} 
      />
    </div>
  );
}

export default Hero;
