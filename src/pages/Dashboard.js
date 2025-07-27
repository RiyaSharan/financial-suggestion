import React from "react";
import { Box, Typography, Avatar, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SavingsIcon from "@mui/icons-material/Savings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const tools = [
  { name: "Expense Management", icon: <ReceiptLongIcon />, route: "/expense", bg: "#3f51b5" },
  { name: "Investment Planning", icon: <TrendingUpIcon />, route: "/investment", bg: "#4caf50" },
  { name: "Retirement Planning", icon: <SavingsIcon />, route: "/retirement", bg: "#fbc02d" },
  { name: "Credit/Debt Management", icon: <CreditCardIcon />, route: "/credit", bg: "#f44336" },
  { name: "Tax Planning", icon: <AccountBalanceIcon />, route: "/tax", bg: "#9c27b0" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  // Manual layout coordinates for 3 top, 2 bottom in circular shape
  const positions = [
    { top: "25%", left: "30%" },
    { top: "25%", left: "50%" },
    { top: "25%", left: "70%" },
    { top: "60%", left: "40%" },
    { top: "60%", left: "60%" },
  ];

  return (
    <Box
      sx={{
        height: "80vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tools.map((tool, index) => (
        <Box
          key={tool.name}
          sx={{
            position: "absolute",
            top: positions[index].top,
            left: positions[index].left,
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
          onClick={() => navigate(tool.route)}
        >
          <Tooltip title={tool.name}>
            <Avatar
              sx={{
                bgcolor: tool.bg,
                width: 100,
                height: 100,
                margin: "auto",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: 3,
                },
              }}
            >
              {tool.icon}
            </Avatar>
          </Tooltip>
          <Typography variant="body2" mt={1}>
            {tool.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
