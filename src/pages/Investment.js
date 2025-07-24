import React, { useState } from "react";
import {
  Container, Typography, Paper, TextField, Button,
  Box, Grid, IconButton
} from "@mui/material";
// import FinancialChartSection from "../components/FinancialChartSection";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar
} from "recharts";

const COLORS = ["#82ca9d", "#ffc658", "#8884d8", "#ff8042"];

const investmentTrendData = [
  { month: "Jan", total: 16000 },
  { month: "Feb", total: 16500 },
  { month: "Mar", total: 17200 },
  { month: "Apr", total: 18000 },
  { month: "May", total: 19000 },
  { month: "Jun", total: 20000 },
];

export default function Investment() {
  const [investments, setInvestments] = useState([
    { name: "Stocks", value: 10000 },
    { name: "Mutual Funds", value: 5000 },
    { name: "Fixed Deposit", value: 3000 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", value: "" });

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newItem.name || isNaN(newItem.value)) return;
    setInvestments([...investments, { ...newItem, value: +newItem.value }]);
    setNewItem({ name: "", value: "" });
  };

  const handleDelete = (index) => {
    const updated = [...investments];
    updated.splice(index, 1);
    setInvestments(updated);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5">Investment Planning</Typography>
        <Typography gutterBottom>
          Track your investments by type and view growth trends.
        </Typography>
        
        {/* Pie Chart */}
        <PieChart width={400} height={300}>
          <Pie data={investments} dataKey="value" label cx="50%" cy="50%" outerRadius={100}>
            {investments.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        {/* Line Chart */}
        <Box mt={4}>
          <Typography variant="h6">Investment Growth Over Time</Typography>
          <LineChart width={600} height={250} data={investmentTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
        </Box>

        {/* Bar Chart */}
        <Box mt={4}>
          <Typography variant="h6">Growth (Bar View)</Typography>
          <BarChart width={600} height={250} data={investmentTrendData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </Box>

        {/* Input */}
        <Box mt={4}>
          <Typography variant="h6">Add Investment</Typography>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TextField label="Type" name="name" fullWidth value={newItem.name} onChange={handleInputChange} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Amount" name="value" type="number" fullWidth value={newItem.value} onChange={handleInputChange} />
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleAdd}>Add</Button>
            </Grid>
          </Grid>
        </Box>

        {/* List */}
        <Box mt={2}>
          {investments.map((item, idx) => (
            <Box key={idx} display="flex" justifyContent="space-between" alignItems="center">
              <Typography>{item.name}: ${item.value}</Typography>
              <IconButton color="error" onClick={() => handleDelete(idx)}><DeleteIcon /></IconButton>
            </Box>
          ))}
        </Box> 
      </Paper>
    </Container>
  );
}
