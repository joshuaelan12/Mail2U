import React from "react";
import { Typography, Box } from "@mui/material";

function Drafts() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Drafts
      </Typography>
      <Typography>This is the drafts page.</Typography>
    </Box>
  );
}

export default Drafts;