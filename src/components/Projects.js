import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';

function Projects() {
  const projectList = [
    { title: "Portfolio Website", description: "Built with React and GSAP animations." },
    { title: "E-commerce App", description: "Fullstack app with Node.js backend." },
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Typography variant="h3">Projects</Typography>
      </Box>
      {projectList.map((project, index) => (
        <Card 
          key={index} 
          sx={{ 
            marginBottom: 2, 
            border: '2px solid #00000', 
            borderRadius: '8px', 
            boxShadow: 3 
          }}
        >
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography>{project.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
