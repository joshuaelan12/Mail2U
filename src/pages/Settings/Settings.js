import React from "react";
import { Typography, Box } from "@mui/material";

function Settings() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography>This is the settings page.</Typography>
    </Box>
  );
}

export default Settings;

