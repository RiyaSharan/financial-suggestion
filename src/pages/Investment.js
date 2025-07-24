import React from "react";
import { Container, Typography, Paper } from "@mui/material";

export default function Investment() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Investment Planning
        </Typography>
        <Typography>
          John has invested $10,000 in stocks, $5,000 in mutual funds, and $3,000 in
          a fixed deposit. Annual return is estimated at 8%.
        </Typography>
      </Paper>
    </Container>
  );
}

