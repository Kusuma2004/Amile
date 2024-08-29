import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const StudentList = () => {
  const students = [
    { name: 'John Doe', course: 'Web Development' },
    { name: 'Jane Smith', course: 'Data Structures' },
    { name: 'Alice Johnson', course: 'Machine Learning' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#674188',  // White text for header
          mb: 3 
        }}
      >
        Student List
      </Typography>
      <Card 
        sx={{ 
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',  // Soft gradient in blue tones
          backdropFilter: 'blur(12px)', // Slightly stronger blur for glassmorphism effect
          borderRadius: '20px', 
          border: '1px solid rgba(255, 255, 255, 0.3)', 
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)', 
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
          },
        }}
      >
        <CardContent>
          <List>
            {students.map((student, index) => (
              <ListItem 
                key={index}
                sx={{ 
                  mb: 2, // Margin-bottom for spacing between items
                  borderRadius: '10px', 
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)', // Shadow for each item
                  transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',  // Soft hover effect
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
                  },
                }}
              >
                <ListItemText
                  primary={<Typography sx={{ color: '#821131', fontStyle: 'italic' }}>{student.name}</Typography>}
                  secondary={<Typography sx={{ color: '#d3d3d3', fontStyle: 'italic' }}>Course: {student.course}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StudentList;
