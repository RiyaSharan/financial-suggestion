import React from "react";
import { Container, Typography, Paper } from "@mui/material";

export default function Retirement() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Retirement Planning
        </Typography>
        <Typography>
          Dummy user data: John plans to retire at 60 with a savings goal of $500,000. Currently,
          he's saving $1,000/month towards a retirement account with a 7% expected annual return.
        </Typography>
      </Paper>
    </Container>
  );
}

