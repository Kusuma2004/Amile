import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import {  pink } from '@mui/material/colors';
import { keyframes } from '@emotion/react';

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Keyframes for list item hover animation
const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
`;

const Courses = () => {
  const courses = [
    { title: 'Web Development', students: 30 },
    { title: 'Data Structures', students: 25 },
    { title: 'Machine Learning', students: 20 },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        color: '#674188', 
        fontWeight:'1500',
        animation: `${fadeIn} 1s ease-in-out`,
        //background: 'linear-gradient(135deg, #2b5876, #4e4376)', 
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 2 ,fontWeight:'bold'}}>
        Courses
      </Typography>
      <Card
        sx={{
          
          background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
          borderRadius: 2,
          boxShadow: 7, // Shadow effect
          maxWidth: 600,
          mx: 'auto',
          overflow: 'visible',
          transition: 'transform 0.5s ease',
          animation: `${fadeIn} 1s ease-in-out`,
        }}
      >
        <CardContent>
          <List>
            {courses.map((course, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: pink[100], 
                  borderRadius: 1,
                  mb: 1,
                  color: '#000000',
                  animation: `${scaleUp} 0.3s ease-in-out`,
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: pink[200], 
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold', 
                        fontStyle: 'italic', // Italic font style
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' // Shadow on text
                      }}
                    >
                      {course.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}> 
                      Students: {course.students}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Courses;
