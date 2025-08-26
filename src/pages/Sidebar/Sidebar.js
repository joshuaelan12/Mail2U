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
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;