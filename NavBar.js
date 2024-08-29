import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
    // Clear user session or authentication tokens if needed
    handleClose(); // Close the dialog
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'linear-gradient(to right, #000000, #434343)', // Black gradient background
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow for better separation
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'left',
              background: 'linear-gradient(45deg, #FF8A00, #FF005E)',// Orange to pink gradient
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Amile
          </Typography>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', mr: 2 }}>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ ml: 1, color: 'inherit' }}
            />
          </Box>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <Button color="inherit" onClick={handleClickOpen}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Log Out</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to log out?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogout} color="primary" autoFocus>
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NavBar;
