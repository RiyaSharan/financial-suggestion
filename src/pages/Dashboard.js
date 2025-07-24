import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Container,
} from "@mui/material";
import { Link } from 'react-router-dom';

const options = [
  { 
    label: "Expense Management",
    data: "Here is some mock data about managing your expenses. Track your spending habits and categorize expenses."
  },
  { 
    label: "Investment Planning",
    data: "Mock data for Investment Planning: Diversify your portfolio with stocks, bonds, and mutual funds."
  },
  {
    label: "Retirement Planning",
    data: "Retirement Planning mock data: Plan your savings and investment to secure your future."
  },
  {
    label: "Credit/Debt mgmt",
    data: "Credit/Debt Management mock data: Learn how to manage your credit score and pay off debts efficiently."
  },
  {
    label: "Tax Planning",
    data: "Tax Planning mock data: Understand deductions, exemptions, and tax saving investments."
  },
];

export default function Dashboard() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDashboardClick = () => {
    setShowOptions((prev) => !prev);
    setSelectedOption(null); // reset selection on toggle
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Finance Planner
          </Typography>
          <Button color="inherit" onClick={handleDashboardClick}>
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/login">Logout</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {/* Show options when Dashboard clicked */}
        {showOptions && (
          <Paper elevation={3} sx={{ maxWidth: 400 }}>
            <List>
              {options.map((option) => (
                <ListItem key={option.label} disablePadding>
                  <ListItemButton onClick={() => handleOptionClick(option)}>
                    <ListItemText primary={option.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        )}

        {/* Show mock data for selected option */}
        {selectedOption && (
          <Paper elevation={2} sx={{ mt: 3, p: 3, maxWidth: 600 }}>
            <Typography variant="h6" gutterBottom>
              {selectedOption.label}
            </Typography>
            <Typography>{selectedOption.data}</Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}


// import React, { useEffect } from 'react';
// import {
//   Container, Typography, Button, Box, Paper, Grid
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// // import { Container, Grid } from '@mui/material';
// import InvestmentCard from '../components/InvestmentCard';

// export default function Dashboard() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (isLoggedIn !== 'true') {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     navigate('/login');
//   };

//   const investments = [
//     { name: "AAPL", price: 190, change: "+1.2%" },
//     { name: "GOOGL", price: 2800, change: "-0.5%" },
//   ];

//   return (
//     <>
//       <Navbar />
//       <Container sx={{ mt: 4 }}>
//         <Grid container spacing={2}>
//           {investments.map((inv, idx) => (
//             <Grid item xs={12} sm={6} md={4} key={idx}>
//               <InvestmentCard investment={inv} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </>
//   );






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

