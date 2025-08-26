import React from "react";
import { Typography, Box } from "@mui/material";

function Spam() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Spam
      </Typography>
      <Typography>This is the spam page.</Typography>
    </Box>
  );
}

export default Spam;