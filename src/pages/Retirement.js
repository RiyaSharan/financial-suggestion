import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import FinancialChartSection from "../components/FinancialChartSection";

const savingsInitial = [
  { name: "401(k)", value: 10000 },
  { name: "IRA", value: 5000 },
];

const retirementTrendData = [
  { month: "Jan", total: 15000 },
  { month: "Feb", total: 16000 },
  { month: "Mar", total: 17000 },
  { month: "Apr", total: 18000 },
  { month: "May", total: 19000 },
  { month: "Jun", total: 20000 },
];

export default function Retirement() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5">Retirement Planning</Typography>
        <Typography>
          Track your retirement savings and visualize growth over time.
        </Typography>

        <FinancialChartSection
          title="Retirement Savings Breakdown"
          pieDataInitial={savingsInitial}
          trendData={retirementTrendData}
          pieLabel="Account"
        />
      </Paper>
    </Container>
  );
}


