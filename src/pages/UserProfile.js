import React from "react";
import { Container, Typography, Paper, Avatar, Box } from "@mui/material";

export default function UserProfile() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Avatar sx={{ width: 56, height: 56 }}>J</Avatar>
          <Typography variant="h5">John Doe</Typography>
        </Box>
        <Typography>Email: john.doe@example.com</Typography>
        <Typography>Location: New York, USA</Typography>
        <Typography>Joined: Jan 2023</Typography>
      </Paper>
    </Container>
  );
}

