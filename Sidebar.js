import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <HomeIcon />, path: '/' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Student List', icon: <AssignmentIcon />, path: '/student-list' },
    { text: 'Assignments', icon: <AssignmentIcon />, path: '/assignments' },
    { text: 'Courses', icon: <SchoolIcon />, path: '/courses' },
    { text: 'Mentor Progress', icon: <TrendingUpIcon />, path: '/mentor-progress' },
    { text: 'Feedback', icon: <FeedbackIcon />, path: '/feedback' },
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 60,
        transition: 'width 0.3s ease',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
          backgroundColor: '#000000',
          color: 'white',
          marginTop:'20px'
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.path}>
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;