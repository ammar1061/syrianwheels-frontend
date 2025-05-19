import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          مرحباً بك في Syrianwheels
        </Typography>
        <Typography variant="body1" paragraph align="center">
          خدمة تأجير السيارات الأفضل في سوريا
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
