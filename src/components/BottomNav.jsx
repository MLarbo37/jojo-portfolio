import * as React from 'react';
// import Box from '@mui/material/Box';
import { Container, Grid, Paper, Box, IconButton, Tooltip, Stack } from '@mui/material';
import { NavLink, useMatch, useResolvedPath, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import '../App.css'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BottomNav = ({isDarkTheme, NavigationItems, active}) => {
  const [value, setValue] = React.useState(0);

  return (
      <div >
           <Box sx={{
                width: '100vw',
              backgroundColor: isDarkTheme?'#1f2839':'#ffffff',
              position: 'fixed',
                bottom: '0',
                // height: '100%'
            }}
            className=' cornerMobNav bg-gradient-to-bl from-transparent  via-blue-100 to-50% to-transparent dark:bg-gradient-to-r dark:from-transparent  dark:to-transparent'
            >
                
                <Container className=' nav p-0' maxWidth="lg">
                    <Stack
                      spacing={3}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    //   alignContent="center"
                        // wrap="wrap"
                    //     className=' '
                      
                    >
                        {NavigationItems.map((navItem, index) => (<Grid key={index} item className=' primaryColor'> 
                            <NavLink to={navItem.path}>
                                <Tooltip title={navItem.title} placement="top" arrow className='primaryColor'>
                            <Box className={active(navItem.path) ? (isDarkTheme?'active1 primaryColor':'active1Light primaryColor') : 'text-white d-flex justify-content-center align-items-center '}>
                                <IconButton className={active(navItem.path) ? 'primaryColor': ''}>
                                    {navItem.icon}
                            </IconButton>
                                    </Box>
                                    </Tooltip>
                            </NavLink>
                        </Grid>))}
                      
                       
                        
                        
                    </Stack>
                </Container>
                
            </Box>
   </div>
  );
}

export default BottomNav
