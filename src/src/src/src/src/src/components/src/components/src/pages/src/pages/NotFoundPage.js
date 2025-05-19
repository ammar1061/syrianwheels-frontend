import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function NotFoundPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          404 - الصفحة غير موجودة
        </Typography>
        <Typography variant="body1" paragraph align="center">
          عذراً، الصفحة التي تبحث عنها غير موجودة.
        </Typography>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
