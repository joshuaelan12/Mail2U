import React from "react";
import { Typography, Box } from "@mui/material";

function SendEmail() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Send Email
      </Typography>
      <Typography>This is the send email page.</Typography>
    </Box>
  );
}

export default SendEmail;