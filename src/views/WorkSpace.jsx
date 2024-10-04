import * as React from 'react';
import '../App.css'; // Ensure you have tailwind's base styles included
import {
  Button, Card, Paper, Grid, Box, useMediaQuery, CardMedia, CssBaseline, FormGroup, FormControlLabel, Switch
} from '@mui/material';
import Navigation from '../components/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, deepOrange } from '@mui/material/colors';
import { CallEndRounded, CallRounded, CasesRounded, HailRounded, HomeRounded, PersonRounded, RoofingRounded, WorkRounded } from '@mui/icons-material';

export const DarkThemeContext = React.createContext();

const light = {
  palette: {
    mode: "light",
    primary: {
      main: '#00000e',
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: amber[300],
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    },
  },
};

const WorkSpace = (to) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark', !isDarkTheme); // Toggle 'dark' class
  };

  const smallScreen = useMediaQuery('(max-width:899px)');
  const largeScreen = useMediaQuery('(min-width:900px)');
  const location = useLocation().pathname;

  const isExactActive = (url) => { return (url === location); };

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme); // Set initial dark mode
  }, [isDarkTheme]);

  const navItems = [
    {
      title: 'Home',
      path: '/',
      icon: isExactActive('/') ? <RoofingRounded fontSize='large' className='primaryColor' /> : <HomeRounded />,
    },
    {
      title: 'About',
      path: '/about',
      icon: isExactActive('/about') ? <HailRounded fontSize='large' className='primaryColor' /> : <PersonRounded />,
    },
    {
      title: 'Portfolio',
      path: '/portfolio',
      icon: isExactActive('/portfolio') ? <CasesRounded fontSize='large' className='primaryColor' /> : <WorkRounded />,
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: isExactActive('/contact') ? <CallRounded fontSize='large' className='primaryColor' /> : <CallEndRounded />,
    },
  ];

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <div className={`layout layoutOverflow ${isDarkTheme ? 'dark' : ''}`}>
        <Box
          sx={{
            height: '100vh',
            backgroundColor: isDarkTheme ? '#121220' : '#bfbebe',
          }}
          elevation={0}
          className='bg'
        >
          <Grid container columnSpacing={4} spacing={0}>
            <Grid item xs={12} md={11} lg={11.5} className=''>
              <div className={` ${smallScreen ? "WorkSpacePos container mx-auto md:mt-5 p-3 md:p-0" : "WorkSpacePos mx-3"}`}>
                <Box
                  sx={smallScreen ? {
                    width: '100vw',
                    backgroundColor: isDarkTheme ? '#1f2839' : '#ffffff',
                    height: '100%',
                  } : {
                    width: '100vw',
                    backgroundColor: isDarkTheme ? '#1f2839' : '#ffffff',
                    height: '95vh',
                  }}
                  className={`layoutOverflow rounded-2xl animate__animated animate__fadeIn ${smallScreen? '':'waveB'}  `}
                >
                  <DarkThemeContext.Provider value={isDarkTheme}>
                    <Outlet />
                  </DarkThemeContext.Provider>
                </Box>
              </div>
            </Grid>
            {largeScreen && (
              <Grid item xs={12} md={1} lg={0.5}>
                <Navigation changeTheme={changeTheme} isDarkTheme={isDarkTheme} NavigationItems={navItems} active={isExactActive} />
              </Grid>
            )}
            {smallScreen && (
              <Grid item xs={12}>
                <BottomNav isDarkTheme={isDarkTheme} NavigationItems={navItems} active={isExactActive} />
              </Grid>
            )}
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default WorkSpace;
