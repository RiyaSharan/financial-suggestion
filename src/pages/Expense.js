import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c", "#FF6666"];

// Trend over time (monthly)
const expenseTrendData = [
  { month: "Jan", total: 2200 },
  { month: "Feb", total: 2400 },
  { month: "Mar", total: 2300 },
  { month: "Apr", total: 2500 },
  { month: "May", total: 2600 },
  { month: "Jun", total: 2550 },
];

export default function Expense() {
  const [categories, setCategories] = useState([
    { name: "Rent", value: 1000 },
    { name: "Groceries", value: 400 },
    { name: "Utilities", value: 200 },
    { name: "Entertainment", value: 200 },
  ]);

  const [newCategory, setNewCategory] = useState({ name: "", value: "" });

  const handleInputChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleAddCategory = () => {
    if (!newCategory.name || isNaN(newCategory.value)) return;
    setCategories([...categories, { ...newCategory, value: +newCategory.value }]);
    setNewCategory({ name: "", value: "" });
  };

  const handleDelete = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Expense Management
        </Typography>
        <Typography gutterBottom>
          Track and categorize your monthly expenses. Add or remove categories below.
        </Typography>

        {/* Pie Chart */}
        <PieChart width={400} height={300}>
          <Pie
            data={categories}
            cx="50%"
            cy="50%"
            label
            outerRadius={100}
            dataKey="value"
          >
            {categories.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        {/* Line Chart for Trends */}
        <Box mt={5}>
          <Typography variant="h6" gutterBottom>
            Monthly Expense Trend (Line Chart)
          </Typography>
          <LineChart width={600} height={250} data={expenseTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
          </LineChart>
        </Box>

        {/* Bar Chart as Alternative */}
        <Box mt={5}>
          <Typography variant="h6" gutterBottom>
            Monthly Expense Trend (Bar Chart)
          </Typography>
          <BarChart width={600} height={250} data={expenseTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#82ca9d" />
          </BarChart>
        </Box>

        {/* Input Form */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Add New Expense Category
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Category"
                name="name"
                value={newCategory.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Amount"
                name="value"
                type="number"
                value={newCategory.value}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleAddCategory}>
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Category List with Delete */}
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            Current Categories
          </Typography>
          {categories.map((cat, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 1 }}
            >
              <Typography>
                {cat.name}: ${cat.value}
              </Typography>
              <IconButton onClick={() => handleDelete(index)} size="small" color="error">
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
