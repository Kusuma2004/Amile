import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar'; // Ensure Sidebar is imported properly
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import StudentList from './components/StudentList';
import Assignments from './components/Assignments';
import Courses from './components/Courses';
import MentorProgress from './components/MentorProgress';
import Feedback from './components/Feedback';
import './components/styles.css'; // Ensure global styles are imported

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
        
        {/* Sidebar with toggle functionality */}
        <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: 'margin-left 0.3s ease',
          }}
        >
          <Toolbar /> {/* Adds space for the fixed NavBar */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/mentor-progress" element={<MentorProgress />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
