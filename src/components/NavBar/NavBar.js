import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';

import { useAuth } from '../../hooks/useAuth';
import AccountMenu from '../AccountMenu/AccountMenu';
import { paths } from '../../constants/paths';

export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignupClick = () => {
    navigate(paths.signUp);
  };
  const handleSigninClick = () => {
    navigate(paths.signIn);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to={paths.home}
            style={{ flexGrow: 1, cursor: 'pointer', color: 'white' }}
          >
            <SchoolIcon />
          </Link>

          {user === null ? null : user ? (
            <AccountMenu />
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
