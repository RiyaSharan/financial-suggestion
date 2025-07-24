import React from "react";
import { Container, Typography, Paper } from "@mui/material";

export default function Expense() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Expense Management
        </Typography>
        <Typography>
          Dummy user data: John has monthly expenses of $2,500. Categories include Rent ($1,000),
          Groceries ($400), Utilities ($200), and Entertainment ($200).
        </Typography>
      </Paper>
    </Container>
  );
}

