import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';

const navItems = [
  { label: 'Inbox', value: '/inbox', icon: <InboxIcon /> },
  { label: 'Starred', value: '/starred', icon: <StarIcon /> },
  { label: 'Send', value: '/send-email', icon: <SendIcon /> },
];

export default function BottomAppBar() {
  const { pathname } = useLocation();

  // Find the value that best matches the current pathname to set the active state
  const currentValue = navItems.find(item => pathname.startsWith(item.value))?.value || '/inbox';

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 'appBar' }} elevation={3}>
      <BottomNavigation
        showLabels
        value={currentValue}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            value={item.value}
            icon={item.icon}
            component={RouterLink}
            to={item.value}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

