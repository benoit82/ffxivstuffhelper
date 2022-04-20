import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TopBar from '@/components/TopBar';
import { Box, CssBaseline, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from '@/src/redux';
import i18next from '@/src/i18config';

function MyApp({ Component, pageProps }: AppProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [useDarkMode, setUseDarkMode] = useState(true);
  const drawerWidth = 250;

  const toggleDrawerMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  const setTheme = (darkMode: boolean) =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });

  useEffect(() => {
    // check local storage for uid, then log
  }, []);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
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
      </I18nextProvider>
    </Provider>
  );
}

export default MyApp;
