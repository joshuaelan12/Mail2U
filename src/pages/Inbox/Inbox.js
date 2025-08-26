import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  Paper,
  Divider,
  Button,
  Snackbar,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from '@mui/icons-material/Close';
import { Archive } from "@mui/icons-material";

const emails = [
  {
    id: 1,
    sender: "TechKnow237",
    subject:
      "Hi, Check this out! https://techknow237.netlify.app",
    snippet:
      "Check out our website and give reviews.",
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

function Inbox() {

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

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Typography variant="h4" gutterBottom>
        Inbox
      </Typography>
      <Paper sx={{ width: "100%", bgcolor: "background.paper" }}>
        <List sx={{ p: 0 }}>
          {emails.map((email) => (
            <React.Fragment key={email.id}>
              <ListItem
                secondaryAction={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      edge="end"
                      aria-label="star"
                      onClick={(e) => handleToggleStar(email.id, e)}
                    >
                      {starred[email.id] ? (
                        <StarIcon color="warning" />
                      ) : (
                        <StarBorderIcon />
                      )}
                    </IconButton>

                    <Archive  onClick={handleClick}/>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Note archived"
                            action={action}
                    />


                    <Typography variant="caption" sx={{ ml: 2, minWidth: '60px', textAlign: 'right' }}>
                      {email.date}
                    </Typography>
                  </Box>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox edge="start" tabIndex={-1} disableRipple />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        variant="body1"
                        sx={{
                          fontWeight: email.read ? "normal" : "bold",
                          width: '150px',
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {email.sender}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          sx={{
                            fontWeight: email.read ? "normal" : "bold",
                            display: "inline",
                          }}
                        >
                          {email.subject}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          {" — "}
                          {email.snippet}
                        </Typography>
                      </React.Fragment>
                    }
                    sx={{
                        '& .MuiListItemText-secondary': {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Inbox;
