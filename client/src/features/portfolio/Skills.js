import React from 'react';
import { Typography, Paper, Box, Chip, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const skillsData = {
  "Languages": ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Git", "Python"],
  "Frameworks": ["Laravel", "Flask", "Django", "React", "jQuery", "Bootstrap"],
  "Technologies": ["AWS Cloud (EC-2, ELB, Lightsail, S3)", "Redis", "Laravel Forge", "Twilio SDK", "GitLab CI/CD", "Node.js"]
};

const Skills = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <CodeIcon sx={{ fontSize: 28, mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h2">
          Skills
        </Typography>
      </Box>
      
      {Object.entries(skillsData).map(([category, skills]) => (
        <Box key={category} sx={{ mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={1}>
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip 
                  label={skill} 
                  variant="outlined" 
                  sx={{ 
                    borderColor: 'secondary.main',
                    '&:hover': { backgroundColor: 'secondary.dark', color: 'white' },
                    transition: 'all 0.3s'
                  }} 
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Paper>
  );
};

export default Skills;
