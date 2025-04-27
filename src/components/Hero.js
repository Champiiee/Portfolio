import React from 'react';
import { Typography } from '@mui/material';

function Hero() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" component="h2">
        I build amazing web experiences.
      </Typography>
    </div>
  );
}

export default Hero;
