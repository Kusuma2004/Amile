import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Tabs, Tab } from '@mui/material';
import MentorProgress from './MentorProgress';

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const students = [
    { name: 'John Doe', progress: '75%' },
    { name: 'Jane Smith', progress: '85%' },
    { name: 'Alice Johnson', progress: '95%' },
  ];

  const feedback = [
    { date: '2024-08-01', comment: 'Great mentor, very helpful!' },
    { date: '2024-08-10', comment: 'Needs to improve communication.' },
    { date: '2024-08-15', comment: 'Excellent at explaining concepts.' },
  ];

  const courses = [
    { title: 'Data Structures and Algorithms', students: 30 },
    { title: 'Web Development', students: 25 },
    { title: 'Machine Learning', students: 20 },
  ];

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #2b5876, #4e4376)', // Gradient background
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
      }}
    >
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: '24px',
          backgroundColor: 'transparent', // No background color for main content
          color: '#265073',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white', 
            mb:'50px',
            mt:'10px'// Ensure text is readable against the gradient background
          }}
        >
          Mentor Dashboard
        </Typography>

        {/* Tabs with Custom Styling */}
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="Dashboard Tabs"
          centered
          sx={{
            mb: 5,
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center',
            },
            '& .MuiTab-root': {
              backgroundColor: 'transparent', // Light background for tabs
              color: 'white', // Text color
              borderRadius: '10px', // Rounded corners
              margin: '0 10px',
              minWidth: '100px', // Minimum width for tabs
              padding: '6px 12px',
              '&:hover': {
                backgroundColor: 'transparent', // Darker on hover
              },
            },
            '& .Mui-selected': {
              backgroundColor: 'transparent', // Highlight selected tab
              color: '#000', // Darker text color for selected tab
              fontWeight: 'bold', // Bold text for selected tab
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent', // Remove default indicator
            },
          }}
        >
          <Tab label="Students Assigned" />
          <Tab label="Feedback" />
          <Tab label="Courses" />
          <Tab label="Graphs" />
        </Tabs>

        {/* Tab Contents */}
        {tabIndex === 0 && (
          <Card
            sx={{
              background: 'linear-gradient(to right, #43cea2, #185a9d)', // Green-blue gradient
              color: 'white',
              borderRadius: '20px',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              mb: 3, // Margin bottom for spacing
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Students Assigned
              </Typography>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {students.map((student, index) => (
                  <li key={index}>{student.name} - Progress: {student.progress}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {tabIndex === 1 && (
          <Card
            sx={{
              background: 'linear-gradient(to right, #ff9966, #ff5e62)', // Orange-red gradient
              color: 'white',
              borderRadius: '20px',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              mb: 3, // Margin bottom for spacing
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Feedback
              </Typography>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {feedback.map((item, index) => (
                  <li key={index}>{item.date}: {item.comment}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {tabIndex === 2 && (
          <Card
            sx={{
              background: 'linear-gradient(to right, #ff512f, #f09819)', // Red-orange gradient
              color: 'white',
              borderRadius: '20px',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              mb: 3, // Margin bottom for spacing
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Courses
              </Typography>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {courses.map((course, index) => (
                  <li key={index}>{course.title} - Students: {course.students}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {tabIndex === 3 && (
          <Box
            sx={{
              padding: '20px',
              backgroundColor: 'transparent', // No background color
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              height: '400px', // Increased height
              overflow: 'hidden', // Hide overflow for smooth animation
            }}
          >
            <MentorProgress
              sx={{
                height: '100%', // Full height of the Box
                '& .line-graph': {
                  stroke: '#00c6ff', // Cyan line color
                  strokeDasharray: '1000', // Length of the path for animation
                  strokeDashoffset: '1000', // Start the animation with offset
                },
                '& .line-graph-text': {
                  color: '#dcdcdc', // Light gray text
                  fontSize: '0.8rem',
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
