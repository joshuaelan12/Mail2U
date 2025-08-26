import React from "react";
import { Typography, Box } from "@mui/material";

function Trash() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Trash
      </Typography>
      <Typography>This is the trash page.</Typography>
    </Box>
  );
}

export default Trash;