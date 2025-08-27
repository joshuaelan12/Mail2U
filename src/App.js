import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
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
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";


const emails = [
  {
    id: 1,
    sender: "TechKnow237",
    subject:
      "Website Review! ",
    snippet:
      "Check out our website and give reviews.https://techknow237.netlify.app",
    read: true,
    starred: false,
    date: "3:45 PM",
  },
  {
    id: 2,
    sender: "Captivator Technologies",
    subject: "Internship Application Review",
    snippet: "You have been accepted to our internship program.",
    read: false,
    starred: true,
    date: "2:10 PM",
  },
  {
    id: 3,
    sender: "Figma",
    subject: "Your weekly Figma summary",
    snippet: "See what's new in your team's design files.",
    read: false,
    starred: false,
    date: "11:30 AM",
  },
  {
    id: 4,
    sender: "Vercel",
    subject: "Deployment Notification",
    snippet: "Your project `material-ui-demo` was deployed successfully.",
    read: true,
    starred: false,
    date: "Yesterday",
  },
  {
    id: 5,
    sender: "Notion",
    subject: "New comments on your page",
    snippet: "You have 3 new comments on 'Project Planning'.",
    read: true,
    starred: true,
    date: "Yesterday",
  },
  {
    id: 6,
    sender: "Jane Doe",
    subject: "Meeting Follow-up",
    snippet: "Here are the notes from our meeting this morning.",
    read: false,
    starred: false,
    date: "Oct 28",
  },
];

const starredEmails = emails.filter((email) => email.starred);


const badgeCount = emails.filter((email) => !email.read).length;



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [emailList, setEmailList] = useState(emails);


  const [starred, setStarred] = React.useState(
    emails.reduce((acc, email) => {
      acc[email.id] = email.starred;
      return acc;
    }, {})
  );
  
  const handleToggleStar = (id, event) => {
    event.stopPropagation();
    setStarred((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const unreadCount = emailList.filter((email) => !email.read).length;


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
          badgeCount={badgeCount}
          unreadCount={unreadCount}
          emails={emails} 
        />
        <Routes>
          <Route path="/inbox" element={<Inbox emails={emails} setEmailList={setEmailList} handleToggleStar={handleToggleStar} starred={starred} setStarred={setStarred}/>} />
          <Route path="/starred" element={<Starred starredEmails={starredEmails} starred={starred} handleToggleStar={handleToggleStar}/>} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/all-mail" element={<AllMail />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Inbox  emails={emails} setEmails={setEmailList} handleToggleStar={handleToggleStar} starred={starred} setStarred={setStarred}/>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
