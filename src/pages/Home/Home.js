import { Box, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { useAuth } from '../../hooks/useAuth';

const welcomeMessage = {
  auth: 'welcome back!',
  guest: 'welcome to our site',
};

export default function Home() {
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: lightBlue[900],
          marginTop: '1em',
          textTransform: 'uppercase',
        }}
      >
        {user ? welcomeMessage.auth : welcomeMessage.guest}
      </Typography>
    </Box>
  );
}
