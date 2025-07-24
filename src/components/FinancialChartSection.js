import React, { useState } from "react";
import {
  Typography, TextField, Button, Box, Grid, IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  BarChart, Bar
} from "recharts";

const COLORS = ["#82ca9d", "#ffc658", "#8884d8", "#ff8042", "#a4de6c", "#FF6666"];

export default function FinancialChartSection({
  title,
  pieDataInitial = [],
  trendData = [],
  pieLabel = "Category"
}) {
  const [data, setData] = useState(pieDataInitial);
  const [newItem, setNewItem] = useState({ name: "", value: "" });

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newItem.name || isNaN(newItem.value)) return;
    setData([...data, { ...newItem, value: +newItem.value }]);
    setNewItem({ name: "", value: "" });
  };

  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };

  return (
    <Box mt={4}>
      <Typography variant="h6">{title}</Typography>

      {/* Pie Chart */}
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" label cx="50%" cy="50%" outerRadius={100}>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      {/* Line Chart */}
      <Typography variant="subtitle1" mt={3}>Trend (Line)</Typography>
      <LineChart width={600} height={250} data={trendData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
      </LineChart>

      {/* Bar Chart */}
      <Typography variant="subtitle1" mt={3}>Trend (Bar)</Typography>
      <BarChart width={600} height={250} data={trendData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#82ca9d" />
      </BarChart>

      {/* Input Form */}
      <Box mt={3}>
        <Typography variant="subtitle1">Add New {pieLabel}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label={`${pieLabel} Name`}
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Amount"
              name="value"
              type="number"
              value={newItem.value}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={handleAdd}>Add</Button>
          </Grid>
        </Grid>
      </Box>

      {/* Item List */}
      <Box mt={2}>
        {data.map((item, idx) => (
          <Box key={idx} display="flex" justifyContent="space-between" alignItems="center" my={1}>
            <Typography>{item.name}: ${item.value}</Typography>
            <IconButton color="error" onClick={() => handleDelete(idx)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

