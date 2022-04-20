import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TopBar from '@/components/TopBar';
import { Box, CssBaseline, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_en from '@/translations/en/common.json';
import common_fr from '@/translations/fr/common.json';
import { Provider } from 'react-redux';
import { store } from '@/src/redux';

function MyApp({ Component, pageProps }: AppProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [useDarkMode, setUseDarkMode] = useState(true);
  const drawerWidth = 250;
  i18next.init({
    lng: store.getState().user.favLng ||'en',
    resources: {
      en: {
        common: common_en,
      },
      fr: {
        common: common_fr,
      },
    },
  });

  const toggleDrawerMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  const setTheme = (darkMode: boolean) =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });

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
