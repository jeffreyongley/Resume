import React from 'react';
import { Typography, Paper, Box, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ProfileHeader = () => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        mb: 4, 
        backgroundColor: 'background.paper',
        borderTop: '4px solid',
        borderColor: 'primary.main'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        alignItems: 'center',
        gap: 3
      }}>
        <Avatar 
          alt="Jeffrey Ongley" 
          src="/resources/self_portrait.jpeg"
          sx={{ 
            width: { xs: 120, md: 150 }, 
            height: { xs: 120, md: 150 },
            border: '3px solid',
            borderColor: 'secondary.main',
            bgcolor: 'primary.dark',
            fontSize: '4rem'
          }}
        >
          <PersonIcon sx={{ fontSize: '5rem' }} />
        </Avatar>
        
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Jeffrey Ongley
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Full-Stack Software Developer
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, maxWidth: '800px' }}>
            Experienced software developer with expertise in PHP, JavaScript, Python, and a variety of 
            frameworks including Laravel, React, and Flask. Passionate about creating efficient solutions 
            that streamline workflows and improve business processes.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProfileHeader;
