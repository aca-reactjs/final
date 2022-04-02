import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../../hooks/useAuth';

export default function NavBar() {
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleSigninClick = () => {
    navigate('/signin');
  };

  const handleLogOut = () => {
    signout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {user ? (
            <Button color="inherit" onClick={handleLogOut}>
              Log Out
            </Button>
          ) : (
            <>
              <Button color="inherit" onClick={handleSigninClick}>
                Sign In
              </Button>
              <Button color="inherit" onClick={handleSignupClick}>
                Sing Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
