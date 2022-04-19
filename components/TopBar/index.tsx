import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitch from '../ThemeSwitch';

interface TopBarProps {
  toggleDrawerMenu: () => void;
  switchTheme: () => void;
  drawerOpen: boolean;
}

const TopBar: FC<TopBarProps> = ({
  toggleDrawerMenu,
  drawerOpen,
  switchTheme,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!drawerOpen && (
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawerMenu}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FFXIV Stuff Helper
          </Typography>
          <ThemeSwitch sx={{ m: 1 }} onClick={switchTheme} defaultChecked />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
