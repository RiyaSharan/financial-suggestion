import React from "react";
import { Container, Typography, Paper } from "@mui/material";

export default function Tax() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Tax Planning
        </Typography>
        <Typography>
          Dummy user data: John earns $75,000/year. Using deductions for home office and 401(k)
          contributions, his effective tax rate is reduced to 18%. Plans to invest more in tax-saving
          instruments.
        </Typography>
      </Paper>
    </Container>
  );
}

