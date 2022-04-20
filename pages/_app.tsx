import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TopBar from '@/components/TopBar';
import { Box, CssBaseline, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [useDarkMode, setUseDarkMode] = useState(true);
  const drawerWidth = 250;

  const toggleDrawerMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  const setTheme = (darkMode: boolean) => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={setTheme(useDarkMode)}>
      <CssBaseline />
      <Drawer
        sx={{ width: drawerWidth }}
        open={openDrawer}
        variant="persistent"
      >
        <Box sx={{ width: drawerWidth }}>
          <IconButton onClick={toggleDrawerMenu} size="large">
            <CloseIcon />
          </IconButton>
          <h3>Menu</h3>
        </Box>
      </Drawer>
      <Box sx={{ marginLeft: openDrawer ? `${drawerWidth}px` : 'O' }}>
        <TopBar
          toggleDrawerMenu={toggleDrawerMenu}
          drawerOpen={openDrawer}
          switchTheme={() => setUseDarkMode(!useDarkMode)}
        />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
