import React from "react";
import {
  Container,
  Typography,
  Paper,
  FormControlLabel,
  Switch,
  Box,
} from "@mui/material";

export default function Settings() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Settings
        </Typography>
        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Enable Notifications"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Switch />}
            label="Dark Mode (Coming Soon)"
          />
        </Box>
      </Paper>
    </Container>
  );
}

