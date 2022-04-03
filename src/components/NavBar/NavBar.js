import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { useAuth } from '../../hooks/useAuth';
import AccountMenu from '../AccountMenu/AccountMenu';

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

  const menuItems = (
    <>
      <MenuItem>
        <ListItemIcon>
          <PersonOutlineIcon fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <ListItemIcon>
            <BusinessCenterIcon fontSize="small" />
          </ListItemIcon>
          Projects
        </MenuItem>
      </Link>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleLogOut}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{ flexGrow: 1, cursor: 'pointer', color: 'white' }}
          >
            <SchoolIcon />
          </Link>

          {user === null ? null : user ? (
            <AccountMenu menuItems={menuItems} />
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
