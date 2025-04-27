import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function InfoCard() {
  return (
    <Card sx={{ maxWidth: 600, margin: '2rem auto', padding: 2, boxShadow: 5 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Your Name
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Passionate web developer with skills in React, Node.js, and UI/UX design.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
