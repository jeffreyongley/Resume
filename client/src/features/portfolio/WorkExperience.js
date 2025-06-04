import React from 'react';
import { Typography, Paper, Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CircleIcon from '@mui/icons-material/Circle';

const experienceData = [
  {
    title: "Full-Stack Software Developer",
    company: "Empire Cooperative",
    location: "Ontario, CA",
    period: "May 2024 – Jan 2025",
    achievements: [
      "Automated imports of complex financial data into MySQL databases with Python and Flask, streamlining workflows and saving the development team 10 hours per week of manual work.",
      "Enhanced the internal data management platform, ARC, using PHP, Laravel, and JavaScript, improving functionality and enabling users to track clients and generate revenue more efficiently.",
      "Developed code-based solutions for key processes like calling and screening clients, streamlining workflows, increasing revenue for the company's IT team from $100K to $200K monthly.",
      "Designed and built several data analytics tools with PHP and MySQL to analyze employee performance over time that were used for encouragement and calculating bonuses.",
      "Implemented unit tests and integration tests with PyUnit and Pest to reduce deployment errors resulting in fewer hotfixes.",
      "Spearheaded the adoption of Git best practices by implementing merge requests, code reviews, and a structured branching strategy, shifting the team from direct commits on master to a development branch workflow. This enhanced code quality and minimized unnecessary commits and hotfixes to nearly zero."
    ]
  },
  {
    title: "Jr. Software Developer",
    company: "AltusLearn",
    location: "Madison, WI (Remote)",
    period: "Jan 2022 – May 2024",
    achievements: [
      "Deployed the Shared Decision Making Chatbot utilizing Twilio, Node.js and React, improving patient support by providing easy access to information and resources for various medical conditions.",
      "Enhanced the Altus Campus and Altus Mentorship platforms by leveraging PHP, JavaScript, and React, improving functionality and increasing user engagement among medical professionals.",
      "Designed and built a reporting system for the SDM Interactive Chat Technology, with Node.js and Airtable enabling comprehensive tracking and analysis of user interactions, significantly boosting platform functionality and engagement.",
      "Enhanced and expanded SDMCentral software by developing the SDM validation platform, empowering medical professionals to ensure the accuracy and quality of SDM tools during their design process; reduced the time from initial tool design to launch by 50%.",
      "Set up and managed development servers on Amazon Lightsail, enabling junior developers to work more efficiently by providing a stable and collaborative environment for testing and development."
    ]
  }
];

const WorkExperience = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <WorkIcon sx={{ fontSize: 28, mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h2">
          Work Experience
        </Typography>
      </Box>
      
      {experienceData.map((job, index) => (
        <Box key={index} sx={{ mb: index < experienceData.length - 1 ? 4 : 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 1 }}>
            <Typography variant="h6" color="primary">
              {job.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ minWidth: '140px', textAlign: { xs: 'left', sm: 'right' } }}>
              {job.period}
            </Typography>
          </Box>
          
          <Typography variant="subtitle1" gutterBottom>
            {job.company} — {job.location}
          </Typography>
          
          <List dense sx={{ mt: 1 }}>
            {job.achievements.map((achievement, i) => (
              <ListItem key={i} alignItems="flex-start" sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <CircleIcon sx={{ fontSize: 8, color: 'secondary.main', mt: 1.5 }} />
                </ListItemIcon>
                <ListItemText primary={achievement} />
              </ListItem>
            ))}
          </List>
          
          {index < experienceData.length - 1 && (
            <Divider sx={{ my: 3 }} />
          )}
        </Box>
      ))}
    </Paper>
  );
};

export default WorkExperience;
