import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Spinner, Box } from '@chakra-ui/react';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // The actual token handling is done in the AuthContext
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  }, [navigate]);

  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Spinner size="xl" color="spotify.green" />
      </Box>
    </Center>
  );
};

export default Callback; 