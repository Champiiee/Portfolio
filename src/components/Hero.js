import React from 'react';
import { Typography } from '@mui/material';

function Hero() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '2rem',
        gap: '2rem', // space between text and image
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" component="h2">
          I build amazing web experiences.
        </Typography>
      </div>

      <img 
        src="/path-to-your-image.jpg" 
        alt="My profile" 
        style={{ 
          width: '300px', 
          height: 'auto', 
          borderRadius: '10px' // optional: makes the image corners rounded
        }} 
      />
    </div>
  );
}

export default Hero;
