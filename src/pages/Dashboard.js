import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Container,
} from "@mui/material";

import ExpenseIcon from "@mui/icons-material/AttachMoney";
import InvestmentIcon from "@mui/icons-material/TrendingUp";
import RetirementIcon from "@mui/icons-material/Elderly";
import CreditIcon from "@mui/icons-material/CreditCard";
import TaxIcon from "@mui/icons-material/AccountBalance";

import { useNavigate } from "react-router-dom";

const dashboardOptions = [
  { label: "Expense Management", path: "/expense", icon: <ExpenseIcon /> },
  { label: "Investment Planning", path: "/investment", icon: <InvestmentIcon /> },
  { label: "Retirement Planning", path: "/retirement", icon: <RetirementIcon /> },
  { label: "Credit/Debt Management", path: "/credit", icon: <CreditIcon /> },
  { label: "Tax Planning", path: "/tax", icon: <TaxIcon /> },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ maxWidth: 500, mx: "auto" }}>
        <List>
          {dashboardOptions.map((option) => (
            <ListItem key={option.label} disablePadding>
              <ListItemButton onClick={() => navigate(option.path)}>
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText primary={option.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

