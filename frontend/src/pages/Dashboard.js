import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import AddUserForm from '../components/AddUserForm';
import UserList from '../components/UserList';

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Add New User
          </Typography>
          <AddUserForm />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            User List
          </Typography>
          <UserList />
        </Paper>
      </Grid>
    </Grid>
  );
}