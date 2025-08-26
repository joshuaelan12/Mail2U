import React from "react";
import { Typography, Box } from "@mui/material";

function Profile() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography>This is your profile page.</Typography>
    </Box>
  );
}

export default Profile;

