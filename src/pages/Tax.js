import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import FinancialChartSection from "../components/FinancialChartSection";

const taxInitial = [
  { name: "Federal", value: 8000 },
  { name: "State", value: 2500 },
];

const taxTrendData = [
  { month: "2020", total: 9000 },
  { month: "2021", total: 9500 },
  { month: "2022", total: 9800 },
  { month: "2023", total: 10200 },
  { month: "2024", total: 11000 },
];

export default function Tax() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5">Tax Planning</Typography>
        <Typography>
          Monitor your annual tax liability and identify deductions.
        </Typography>

        <FinancialChartSection
          title="Tax Breakdown"
          pieDataInitial={taxInitial}
          trendData={taxTrendData}
          pieLabel="Tax Type"
        />
      </Paper>
    </Container>
  );
}

