import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Switch } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ darkMode, toggleDarkMode, handleSidebarOpen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleSidebarOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mail2U
        </Typography>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
