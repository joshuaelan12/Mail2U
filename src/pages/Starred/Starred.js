import React from "react";
import { Typography, Box } from "@mui/material";

function Starred() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Starred
      </Typography>
      <Typography>This is the starred page.</Typography>
    </Box>
  );
}

export default Starred;