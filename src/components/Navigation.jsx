import { HomeRounded, PersonRounded, BusinessCenterRounded, BookRounded, CallRounded, UsbRounded, Brightness7, Brightness4, LightMode, DarkMode } from '@mui/icons-material';
import { Container, Grid, Paper, Box, IconButton, Zoom } from '@mui/material';
import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { useTheme, styled } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Navigation = ({ changeTheme, isDarkTheme, NavigationItems, active }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const location = useLocation();

  const CustomisedTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(15),
      border: '1px solid #dadde9',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: '#f5f5f9',
    },
  }));

  React.useEffect(() => {
    const handleScroll = (event) => {
      const currentIndex = NavigationItems.findIndex(navItem => navItem.path === location.pathname);

      if (window.scrollY === 0) {
        // If scrolled to the top, go to the previous page
        const prevIndex = (currentIndex - 1 + NavigationItems.length) % NavigationItems.length;
        window.location.href = NavigationItems[prevIndex].path;
      } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // If scrolled to the bottom, go to the next page
        const nextIndex = (currentIndex + 1) % NavigationItems.length;
        window.location.href = NavigationItems[nextIndex].path;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, NavigationItems]);

  return (
    <div className='NavPos '>
      <Box sx={{ width: '4vw', backgroundColor: isDarkTheme ? '#1f2839' : '#ffffff', height: '95vh' }} className='rounded-tl-2xl rounded-bl-2xl bg-gradient-to-b from-transparent  via-blue-100 to-50% to-transparent dark:bg-gradient-to-r dark:from-transparent  dark:to-transparent'>
        <IconButton sx={{ mx: 2 }} onClick={() => changeTheme()} color="inherit">
          <CustomisedTooltip TransitionComponent={Zoom} title={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'} placement="left" arrow className='primaryColo'>
            {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
          </CustomisedTooltip>
        </IconButton>
        <Box className='mid'>
          <Container className='nav p-0' maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              {NavigationItems.map((navItem, index) => (
                <Grid key={index} item className='primaryColo'>
                  <NavLink to={navItem.path}>
                    <CustomisedTooltip TransitionComponent={Zoom} title={navItem.title} placement="left" arrow className='primaryColo'>
                      <Box sx={{ border: active(navItem.path) ? (isDarkTheme ? '6px solid #121220' : '6px solid #bfbebe') : '' }} className={active(navItem.path) ? (isDarkTheme ? 'active1  primaryColo ' : 'active1Light ') : 'text-white d-flex justify-content-center align-items-center '}>
                        <IconButton className={`${active(navItem.path) ? ' ' : ''} `}>
                          {/* <div className={active(navItem.path) ? (isDarkTheme ? 'activeBar1' : 'activeBar1Light') : ''}></div> */}
                          {navItem.icon}
                          {/* <div className={active(navItem.path) ? (isDarkTheme ? 'activeBar2' : 'activeBar2Light') : ''}></div> */}
                        </IconButton>
                      </Box>
                    </CustomisedTooltip>
                  </NavLink>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Navigation;
