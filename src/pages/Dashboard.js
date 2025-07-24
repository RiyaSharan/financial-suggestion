import React, { useEffect } from 'react';
import {
  Container, Typography, Button, Box, Paper, Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import { Container, Grid } from '@mui/material';
import InvestmentCard from '../components/InvestmentCard';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const investments = [
    { name: "AAPL", price: 190, change: "+1.2%" },
    { name: "GOOGL", price: 2800, change: "-0.5%" },
  ];

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {investments.map((inv, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <InvestmentCard investment={inv} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );

//   return (
//     <Container maxWidth="md">
//       <Paper elevation={2} sx={{ p: 4, mt: 6 }}>
//         <Typography variant="h4" gutterBottom>Welcome to your Dashboard</Typography>
//         <Typography variant="body1" gutterBottom>
//           This is where you can view your investment summary, charts, and recent activity.
//         </Typography>
//         <Box sx={{ mt: 4 }}>
//           <Button variant="contained" color="secondary" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
}
