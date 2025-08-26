import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  ListItemButton,
  Badge,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

import SimpleDialogDemo from "../../Components/AccountsDialog/SimpleDialog";



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




const mainListItems = [
  { text: "Inbox", path: "/inbox", icon: <InboxIcon /> },
  { text: "Starred", path: "/starred", icon: <MailIcon /> },
  { text: "Send email", path: "/send-email", icon: <InboxIcon /> },
  { text: "Drafts", path: "/drafts", icon: <MailIcon /> },
];

const secondaryListItems = [
  { text: "All mail", path: "/all-mail", icon: <InboxIcon /> },
  { text: "Trash", path: "/trash", icon: <MailIcon /> },
  { text: "Spam", path: "/spam", icon: <InboxIcon /> },
];

const tertiaryListItems = [
    { text: "Profile", path: "/profile", icon: <AccountCircleIcon /> },
    { text: "Settings", path: "/settings", icon: <SettingsIcon /> },
  ];

function Sidebar({ open, onClose }) {
  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        {mainListItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} onClick={onClose}>
              
              <ListItemIcon>
                <Badge badgeContent={0} color="primary">
                {item.icon}
              </Badge>
              </ListItemIcon>
              
              <ListItemText primary={item.text} />
              
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryListItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} onClick={onClose}>
              <ListItemIcon>
                <Badge badgeContent={0} color="primary">
                {item.icon}
                </Badge>
                </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ marginTop: "auto" }}>
        <Divider />
        {tertiaryListItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} onClick={onClose}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ padding:"10px" }}>
        <Divider />
        <SimpleDialogDemo />
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;