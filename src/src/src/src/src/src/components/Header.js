import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Syrianwheels
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">الرئيسية</Button>
          <Button color="inherit" component={Link} to="/cars">السيارات</Button>
          <Button color="inherit" component={Link} to="/login">تسجيل الدخول</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
