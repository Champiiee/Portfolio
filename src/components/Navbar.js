import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ zIndex: 1100 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          gap: 2,
        }}>
          <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ textTransform: 'none' }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects" sx={{ textTransform: 'none' }}>
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ textTransform: 'none' }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
