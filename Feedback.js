import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';
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

const Feedback = () => {
  // Sample feedback data
  const feedback = [
    { date: '2024-08-01', comment: 'Great mentor, very helpful!' },
    { date: '2024-08-10', comment: 'Needs to improve communication.' },
    { date: '2024-08-15', comment: 'Excellent at explaining concepts.' },
    { date: '2024-08-15', comment: 'Excellent at explaining concepts.' },
    { date: '2024-08-15', comment: 'Excellent at explaining concepts.' },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        animation: `${fadeIn} 1s ease-in-out`,
      }}
    >
      <Card
        sx={{
          background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
          maxWidth: 600,
          width: '100%',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Feedback
          </Typography>
          {feedback.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: blue[700], fontWeight: 'bold' }}>
                {item.date}
              </Typography>
              <Typography variant="body1" sx={{ color:'#ffffff' }}>
                {item.comment}
              </Typography>
              {index < feedback.length - 1 && (
                <Divider sx={{ my: 1, backgroundColor: '#FFF5E4', height: 1 }} />
              )}
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Feedback;
