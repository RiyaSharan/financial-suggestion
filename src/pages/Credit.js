import React from "react";
import { Container, Typography, Paper } from "@mui/material";

export default function Credit() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Credit / Debt Management
        </Typography>
        <Typography>
          John has $3,500 in credit card debt and a student loan of $20,000.
          Monthly debt payments total $600. Credit score: 720. Paying down high-interest cards first.
        </Typography>
      </Paper>
    </Container>
  );
}

