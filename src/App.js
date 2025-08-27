import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Toolbar } from "@mui/material";
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

import { Box } from "@mui/material";

import BottomAppBar from "./Components/BottomAppBar/BottomAppBar";

const emails = [
  {
    id: 1,
    sender: "TechKnow237",
    subject: "Website Review! ",
    snippet: "Check out our website and give reviews.https://techknow237.netlify.app",
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
  {
    id: 7,
    sender: "LinkedIn",
    subject: "New connection request",
    snippet: "You have a new connection request from John Smith.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 8,
    sender: "GitHub",
    subject: "Pull Request Review",
    snippet: "Your pull request has been approved.",
    read: true,
    starred: true,
    date: "Today",
  },
  {
    id: 9,
    sender: "Medium",
    subject: "New article recommendations",
    snippet: "Based on your interests, here are some articles you may like.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 10,
    sender: "Amazon",
    subject: "Order Shipped",
    snippet: "Your order #12345 has been shipped and is on its way.",
    read: true,
    starred: false,
    date: "Oct 27",
  },
  {
    id: 11,
    sender: "Slack",
    subject: "Channel Invitation",
    snippet: "You’ve been invited to join the #tech-updates channel.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 12,
    sender: "Twitter",
    subject: "New Followers",
    snippet: "You have 5 new followers on Twitter.",
    read: true,
    starred: false,
    date: "Oct 26",
  },
  {
    id: 13,
    sender: "Spotify",
    subject: "Discover Weekly",
    snippet: "Your new Discover Weekly playlist is ready.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 14,
    sender: "Apple",
    subject: "iCloud Storage Almost Full",
    snippet: "Upgrade your iCloud storage to keep your files safe.",
    read: true,
    starred: true,
    date: "Oct 25",
  },
  {
    id: 15,
    sender: "Google Drive",
    subject: "Shared Document Updated",
    snippet: "The document 'Marketing Plan' has been updated by Alice.",
    read: false,
    starred: false,
    date: "Yesterday",
  },
  {
    id: 16,
    sender: "Netflix",
    subject: "New Season Available",
    snippet: "Season 4 of 'TechWorld' is now streaming.",
    read: true,
    starred: false,
    date: "Oct 24",
  },
  {
    id: 17,
    sender: "Udemy",
    subject: "Course Recommendation",
    snippet: "New courses you might like: React, Node.js, and more.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 18,
    sender: "Dropbox",
    subject: "File Shared With You",
    snippet: "Alice shared 'Project Assets.zip' with you.",
    read: true,
    starred: false,
    date: "Oct 23",
  },
  {
    id: 19,
    sender: "Facebook",
    subject: "Friend Request",
    snippet: "You have a new friend request from Sarah Lee.",
    read: false,
    starred: true,
    date: "Today",
  },
  {
    id: 20,
    sender: "Reddit",
    subject: "New Comments",
    snippet: "You have 8 new comments on your posts.",
    read: true,
    starred: false,
    date: "Yesterday",
  },
  {
    id: 21,
    sender: "Zoom",
    subject: "Meeting Reminder",
    snippet: "Your meeting 'Project Sync' starts in 30 minutes.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 22,
    sender: "Pinterest",
    subject: "New Pins For You",
    snippet: "Check out the new pins based on your boards.",
    read: true,
    starred: false,
    date: "Oct 22",
  },
  {
    id: 23,
    sender: "Airbnb",
    subject: "Booking Confirmation",
    snippet: "Your stay at 'Seaside Villa' is confirmed.",
    read: true,
    starred: true,
    date: "Oct 21",
  },
  {
    id: 24,
    sender: "Stripe",
    subject: "Payment Received",
    snippet: "You received a payment of $250 from Alice.",
    read: false,
    starred: false,
    date: "Oct 20",
  },
  {
    id: 25,
    sender: "PayPal",
    subject: "Account Update",
    snippet: "Your account has been successfully updated.",
    read: true,
    starred: false,
    date: "Oct 19",
  },
  {
    id: 26,
    sender: "Coursera",
    subject: "New Certificate Earned",
    snippet: "Congratulations! You completed 'AI Basics'.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 27,
    sender: "Microsoft",
    subject: "Security Alert",
    snippet: "Suspicious login attempt detected on your account.",
    read: true,
    starred: true,
    date: "Yesterday",
  },
  {
    id: 28,
    sender: "Instagram",
    subject: "New Likes",
    snippet: "Your post got 15 new likes.",
    read: false,
    starred: false,
    date: "Today",
  },
  {
    id: 29,
    sender: "Trello",
    subject: "Board Activity",
    snippet: "New tasks were added to 'Project Sprint'.",
    read: true,
    starred: false,
    date: "Oct 18",
  },
  {
    id: 30,
    sender: "Medium",
    subject: "Your Story Published",
    snippet: "Your story 'Tech Trends 2025' has been published.",
    read: false,
    starred: true,
    date: "Today",
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
        <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 'appBar' }} elevation={3}>
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          handleSidebarOpen={() => setSidebarOpen(true)}
        /></Box>
        <Sidebar
          open={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          badgeCount={badgeCount}
          unreadCount={unreadCount}
          emails={emails} 
        />
        <Box component="main" sx={{ flexGrow: 1, pb: { xs: '56px', md: 0 } }}>
          <Toolbar />
          <Routes>
            <Route path="/inbox" element={<Inbox emails={emails} setEmailList={setEmailList} handleToggleStar={handleToggleStar} starred={starred} setStarred={setStarred}/>} />
            <Route path="/starred" element={<Starred starredEmails={starredEmails} starred={starred} handleToggleStar={handleToggleStar}/>} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/all-mail" element={<AllMail emails={emails} setEmailList={setEmailList} handleToggleStar={handleToggleStar} starred={starred} setStarred={setStarred}/>} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Inbox  emails={emails} setEmails={setEmailList} handleToggleStar={handleToggleStar} starred={starred} setStarred={setStarred}/>} />
          </Routes>
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <BottomAppBar />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
