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

const renderList = (items, counts = {}, onClose) => (
  <List>
    {items.map((item) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton
          component={RouterLink}
          to={item.path}
          onClick={onClose}
        >
          <ListItemIcon>
            <Badge
              badgeContent={counts[item.text] || 0}
              color="primary"
              invisible={(counts[item.text] || 0) === 0}
            >
              {item.icon}
            </Badge>
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

function Sidebar({ open, onClose, emails }) {

  const unreadCount = emails.filter((email) => !email.read).length;
  const starredCount = emails.filter((email) => email.starred).length;

  const counts = {
    Inbox: unreadCount,
    Starred: starredCount,
    "All mail": emails.length,
    Trash: 0, 
    Spam: 0,
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, display: "flex", flexDirection: "column", height: "100%" }}
      role="presentation"
    >
      <Box>
        {renderList(mainListItems, counts, onClose)}
        <Divider />
        {renderList(secondaryListItems, counts, onClose)}
      </Box>

      <Box sx={{ marginTop: "auto" }}>
        <Divider />
        {renderList(tertiaryListItems, {}, onClose)}
        <Divider />
        <Box sx={{ p: 1 }}>
          <SimpleDialogDemo />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;
