import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
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

const Profile = () => {
  const mentor = {
    name: 'Kommisetti Kusuma',
    role: 'Mentor',
    email: 'kusuma@example.com',
    bio: 'A passionate mentor with expertise in Web Development and Machine Learning.',
    avatarUrl: 'https://via.placeholder.com/150',
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
        borderRadius:'5px',
        backgroundImage: 'url("https://via.placeholder.com/1920x1080")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        p: 2,
        animation: `${fadeIn} 1s ease-in-out`
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 600,
          mx: 'auto',
          p: 2, background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: blue[700] }}>
          Profile
        </Typography>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            overflow: 'visible',
            bgcolor: grey[50],
            p: 2,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar
                src={mentor.avatarUrl}
                sx={{
                  width: 100,
                  height: 100,
                  mr: 2,
                  border: `2px solid ${blue[500]}`,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(15deg)',
                  },
                }}
              />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {mentor.name}
                </Typography>
                <Typography variant="body1" sx={{ color: blue[600], mb: 1 }}>
                  {mentor.role}
                </Typography>
                <Typography variant="body2" sx={{ color: grey[700] }}>
                  {mentor.email}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ color: grey[800] }}>
              {mentor.bio}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;
