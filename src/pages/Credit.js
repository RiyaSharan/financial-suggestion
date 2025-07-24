import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import FinancialChartSection from "../components/FinancialChartSection";

const debts = [
  { name: "Credit Card", value: 3500 },
  { name: "Student Loan", value: 20000 },
];

const debtTrend = [
  { month: "Jan", total: 23500 },
  { month: "Feb", total: 22500 },
  { month: "Mar", total: 21500 },
  { month: "Apr", total: 20500 },
  { month: "May", total: 19000 },
  { month: "Jun", total: 17500 },
];

export default function Credit() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5">Credit & Debt Management</Typography>
        <Typography>
          Track your debts and see how they decrease over time.
        </Typography>

        <FinancialChartSection
          title="Debt Overview"
          pieDataInitial={debts}
          trendData={debtTrend}
          pieLabel="Debt Type"
        />
      </Paper>
    </Container>
  );
}

