import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface FullPageLayoutProps {
  children: React.ReactNode;
}

export default function FullPageLayout({ children }: FullPageLayoutProps) {
  return (
    <Box
      sx={{
        border: '5px solid #007FFF', // Dynamic border
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures it occupies full height if content is small
        width: 'auto', // Adjusts based on content width
        margin: 'auto', // Centers the layout
      }}
    >
      {/* Navigation Menu */}
      <AppBar position="static" sx={{ bgcolor: '#007FFF' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Draft
          </Typography>
          <Button color="inherit" component={Link} to="/">Player Search</Button>
          <Button color="inherit" component={Link} to="/DraftTable" >Draft Board</Button>
          <Button color="inherit" component={Link} to="/admin">Admin</Button>
        </Toolbar>
      </AppBar>

      {/* Content Area */}
      <Box
        sx={{
          flex: 1, // Fills the remaining space
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
