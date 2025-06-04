import React from 'react';
import { Typography, Paper, Box, Link, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactsIcon from '@mui/icons-material/Contacts';

const Contact = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <ContactsIcon sx={{ fontSize: 28, mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h2">
          Contact Information
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Link href="mailto:ongleyjeffrey@gmail.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              <Typography variant="body1">
                ongleyjeffrey@gmail.com
              </Typography>
            </Link>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Link href="tel:9517339537" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              <Typography variant="body1">
                951-733-9537
              </Typography>
            </Link>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LinkedInIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Link 
              href="https://www.linkedin.com/in/jeffreyongley/" 
              target="_blank" 
              rel="noopener noreferrer"
              color="inherit" 
              sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              <Typography variant="body1">
                LinkedIn Profile
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;
