// src/pages/Profile.js
import React, { useContext } from 'react';
import { Container, Typography, Avatar, Paper } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <>
        <Navbar />
        <Container sx={{ mt: 8 }}>
          <Typography variant="h5" color="error">
            You need to be logged in to view this page.
          </Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}>
            {user.name?.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h4" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user.email}
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Profile;

