import React from "react";
import { Typography, Button, Box, Paper, Grid } from "@mui/material";

const PaymentReceipt = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // Set to 100% of viewport height
      padding={4}
    >
      <Paper elevation={3} style={{ padding: "1rem", width: "300px" }}>
        <Typography variant="h6" align="center">
          Payment Receipt
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>Reference Number: REF123456789</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Transfer ID: TRF987654321</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Account Type: Savings Account</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Account Number: 1234567890</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Account Name: ABC</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Transfer From: SCB</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Amount: $100.00</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Transfer When: August 6, 2023</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Purpose: Payment for Services</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ fontWeight: "bold", color: "green" }}>
              Note: Payment Successful
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "1rem" }}>
            <Button variant="contained" color="primary" fullWidth>
              Download Receipt
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PaymentReceipt;
