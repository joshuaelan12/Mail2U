import React from "react";
import { Typography, Box } from "@mui/material";

function Inbox() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Inbox
      </Typography>
      <Typography>
        This is the inbox page. Your emails would be displayed here.
      </Typography>
    </Box>
  );
}

export default Inbox;