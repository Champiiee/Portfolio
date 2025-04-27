import React from 'react';
import { Typography, Box } from '@mui/material';

function About() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '2rem',
      }}
    >
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="body1">
        I'm a frontend developer with a knack for animation, clean UI, and solid backend experience.
      </Typography>
    </Box>
  );
}

export default About;
