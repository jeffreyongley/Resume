import React from 'react';
import { Container } from '@mui/material';
import ProfileHeader from '../features/portfolio/ProfileHeader';
import Contact from '../features/portfolio/Contact';
import Education from '../features/portfolio/Education';
import WorkExperience from '../features/portfolio/WorkExperience';
import Skills from '../features/portfolio/Skills';

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ProfileHeader />
      <Contact />
      <Education />
      <WorkExperience />
      <Skills />
    </Container>
  );
};

export default Portfolio;
