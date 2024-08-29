import React from 'react';
import { Typography, Card, CardContent, List, ListItem, Box } from '@mui/material';

const Assignments = () => {
  // Sample data for assignments and students
  const assignments = [
    {
      id: 1,
      title: 'Web Development Project',
      dueDate: '2024-09-15',
      students: [
        { name: 'John Doe', progress: 'Completed' },
        { name: 'Jane Smith', progress: 'In Progress' },
      ],
    },
    {
      id: 2,
      title: 'Machine Learning Homework',
      dueDate: '2024-09-20',
      students: [
        { name: 'Alice Johnson', progress: 'Not Started' },
      ],
    },
    {
      id: 3,
      title: 'Data Structures Quiz',
      dueDate: '2024-09-10',
      students: [
        { name: 'Bob Brown', progress: 'Completed' },
        { name: 'Emily Davis', progress: 'In Progress' },
      ],
    },
  ];

  // Function to get the color based on the student's progress
  const getProgressColor = (progress) => {
    if (progress === 'Completed') {
      return '#4caf50'; // Green for completed
    } else if (progress === 'In Progress') {
      return '#ffc107'; // Yellow for in progress
    } else {
      return '#f44336'; // Red for not started
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#ffffff',  // White text for header
          mb: 3 
        }}
      >
        Assignments
      </Typography>
      {assignments.map((assignment) => (
        <Card 
          key={assignment.id} 
          sx={{ 
            mb: 3, 
            background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Soft dark gradient background
            backdropFilter: 'blur(12px)', // Stronger glassmorphism effect
            borderRadius: '20px', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
            '&:hover': {
              transform: 'translateY(-10px)', 
              boxShadow: '0 14px 44px rgba(0, 0, 0, 0.4)', // Deeper shadow on hover
            },
          }}
        >
          <CardContent>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                fontStyle: 'italic',
                color: '#ffffff',  // Softer white for the card title
              }}
            >
              {assignment.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              sx={{ 
                color: '#d3d3d3'  // Light gray for secondary text
              }}
            >
              Due Date: {assignment.dueDate}
            </Typography>
            <List>
              {assignment.students.map((student, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',  // Softer hover effect
                      borderRadius: '10px', 
                      transition: 'background-color 0.3s ease' 
                    },
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#2E073F',  // White text for student's name
                        fontStyle: 'italic',
                      }}
                    >
                      {student.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: getProgressColor(student.progress),  // Apply color based on progress
                        fontStyle: 'italic',
                      }}
                    >
                      Progress: {student.progress}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Assignments;
