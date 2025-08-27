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
import Star from "@mui/icons-material/Star";
import CloseIcon from '@mui/icons-material/Close';
import { Archive } from "@mui/icons-material";



function Starred({starredEmails, starred, handleToggleStar}) {
  const [emailList, setEmailList] = React.useState(starredEmails);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [lastArchivedItem, setLastArchivedItem] = React.useState(null);
  

  const handleArchive = (itemToArchive, event) => {
    event.stopPropagation();
    setEmailList((prev) => prev.filter((email) => email.id !== itemToArchive.id));
    setLastArchivedItem(itemToArchive);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleUndoArchive = () => {
    if (lastArchivedItem) {
      setEmailList((prev) => [...prev, lastArchivedItem].sort((a, b) => a.id - b.id));
      setLastArchivedItem(null);
    }
    setSnackbarOpen(false);
  };


  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleUndoArchive}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, width: "100%" }}>
      <Typography variant="h4" gutterBottom>
        Starred Mails
      </Typography>
      <Paper sx={{ width: "100%", bgcolor: "background.paper" }}>
        <List sx={{ p: 0 }}>
          {emailList.map((email) => (
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
                        <Star color="warning" />
                      ) : (
                        <StarBorderIcon />
                      )}
                    </IconButton>

                    <IconButton onClick={(e) => handleArchive(email, e)} 
                    sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                      <Archive />
                    </IconButton>

                    <Typography variant="caption" 
                    sx={{ ml: 2, minWidth: { xs: 'auto', sm: '60px' }, 
                    textAlign: 'right', whiteSpace: 'wrap' 

                    }}>

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
                          width: { xs: '100px', sm: '150px' },
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          verticalAlign: 'middle',
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
                          sx={{ display: { xs: 'none', sm: 'inline' } }}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Conversation archived"
        action={action}
      />
    </Box>
  );
}

export default Starred;
