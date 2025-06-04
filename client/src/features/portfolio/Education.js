import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  // CSUSB logo from a reliable public source
  const csusbLogoUrl = "/resources/csusb_logo.jpeg";
  
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <SchoolIcon sx={{ fontSize: 28, mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h2">
          Education
        </Typography>
      </Box>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: '100%',
              height: '140px',
              borderRadius: 2,
              mb: { xs: 2, md: 0 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1E1E2F',
              color: 'white',
              border: '3px solid',
              borderColor: 'primary.main'
            }}
          >
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 1,
              }}
              src={csusbLogoUrl}
              alt="CSUSB Logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; font-weight: bold; font-size: 1.2rem;">CSUSB</div>';
              }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={9}>
          <Typography variant="h6" gutterBottom color="primary">
            California State University - San Bernardino
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            B.S. in Computer Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Graduation Date: May 2021
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              Completed a comprehensive computer science program with coursework in algorithms, 
              data structures, software engineering, database systems, and web development.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Education;
