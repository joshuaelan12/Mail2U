import React, { useState, useMemo, useCallback } from "react";
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
  ButtonGroup,
} from "@mui/material";
import { Star, StarBorder, Close, Archive } from "@mui/icons-material";
import FilterButton from "../../Components/Filter Button/FilterButton";

function Starred ({ starredEmails }) {
  const [emailList, setEmailList] = useState(starredEmails);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [lastArchivedItem, setLastArchivedItem] = useState(null);
  const [filter, setFilter] = useState("Show All");

  const handleFilterChange = useCallback((selectedFilter) => {
    setFilter(selectedFilter);
  }, []);

  const displayedEmails = useMemo(() => {
    if (filter === "Unread Mails") {
      return emailList.filter((email) => !email.read);
    }
    return emailList;
  }, [emailList, filter]);

  const handleArchive = useCallback((email, event) => {
    event.stopPropagation();
    setEmailList((prev) => prev.filter((e) => e.id !== email.id));
    setLastArchivedItem(email);
    setSnackbarOpen(true);
  }, []);

  const handleUndoArchive = useCallback(() => {
    if (lastArchivedItem) {
      setEmailList((prev) =>
        [...prev, lastArchivedItem].sort((a, b) => a.id - b.id)
      );
      setLastArchivedItem(null);
    }
    setSnackbarOpen(false);
  }, [lastArchivedItem]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const handleToggleStar = useCallback((id, event) => {
    event.stopPropagation();
    setEmailList((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  }, []);

  const handleEmailClick = (id) => {
    setEmailList((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, read: true } : email
      )
    );
  };

  // Mark all emails as read/unread
  const markAllAsRead = () => {
    setEmailList((prev) => prev.map((email) => ({ ...email, read: true })));
  };

  const markAllAsUnread = () => {
    setEmailList((prev) => prev.map((email) => ({ ...email, read: false })));
  };

  const snackbarAction = (
    <>
      <Button color="secondary" size="small" onClick={handleUndoArchive}>
        UNDO
      </Button>
      <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4">Starred Mails</Typography>
        <FilterButton onFilterChange={handleFilterChange} />
      </Box>

      {/* Mark All as Read / Unread Buttons */}
      <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
        <ButtonGroup variant="outlined" size="small">
          <Button onClick={markAllAsRead}>Mark All as Read</Button>
          <Button onClick={markAllAsUnread}>Mark All as Unread</Button>
        </ButtonGroup>
      </Box>

      <Paper sx={{ width: "100%", bgcolor: "background.paper" }}>
        <List sx={{ p: 0 }}>
          {displayedEmails.map((email) => (
            <React.Fragment key={email.id}>
              <ListItem
                secondaryAction={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      edge="end"
                      onClick={(e) => handleToggleStar(email.id, e)}
                    >
                      {email.starred ? <Star color="warning" /> : <StarBorder />}
                    </IconButton>

                    <IconButton
                      onClick={(e) => handleArchive(email, e)}
                      sx={{ display: { xs: "none", sm: "inline-flex" } }}
                    >
                      <Archive />
                    </IconButton>

                    <Typography
                      variant="caption"
                      sx={{
                        ml: 2,
                        minWidth: { xs: "auto", sm: "60px" },
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {email.date}
                    </Typography>
                  </Box>
                }
                disablePadding
              >
                <ListItemButton dense onClick={() => handleEmailClick(email.id)}>
                  <ListItemIcon>
                    <Checkbox edge="start" tabIndex={-1} disableRipple />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: email.read ? "normal" : "bold",
                          width: { xs: "100px", sm: "150px" },
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {email.sender}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          sx={{ fontWeight: email.read ? "normal" : "bold" }}
                        >
                          {email.subject}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ display: { xs: "none", sm: "inline" } }}
                        >
                          {" — "}
                          {email.snippet}
                        </Typography>
                      </>
                    }
                    sx={{
                      "& .MuiListItemText-secondary": {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      },
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
        action={snackbarAction}
      />
    </Box>
  );
}

export default Starred;
