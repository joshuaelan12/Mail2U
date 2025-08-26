import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Sidebar from "./pages/Sidebar/Sidebar";
import Inbox from "./pages/Inbox/Inbox";
import Starred from "./pages/Starred/Starred";
import SendEmail from "./pages/SendEmail/SendEmail";
import Drafts from "./pages/Drafts/Drafts";
import AllMail from "./pages/AllMail/AllMail";
import Trash from "./pages/Trash/Trash";
import Spam from "./pages/Spam/Spam";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          handleSidebarOpen={() => setSidebarOpen(true)}
        />
        <Sidebar
          open={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <Routes>
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/all-mail" element={<AllMail />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/" element={<Typography sx={{ p: 3 }}>Welcome to the main page!</Typography>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
