import * as React from 'react'
import { Box, Card, Grid, LinearProgress, Tooltip } from "@mui/material";
import { linearProgressClasses } from '@mui/material/LinearProgress';
import SectionSubtitle from "../ReuseableComponent/SectionSubtitle";
import { styled } from '@mui/material/styles';
import '../../App.css'
import { DarkThemeContext } from '../../views/WorkSpace';

const MySkill = ({ skills }) => {
  const isDarkTheme = React.useContext(DarkThemeContext)
    const ColorLinearProgress = styled(LinearProgress)(({ theme }) => ({
        [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: isDarkTheme?'#bfbebe':'#D3D3D3',
  },
        [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#00000e',
  },
//   color: theme.palette.getContrastText('#00000e'),
//   backgroundColor: '#00000e',
//   '&:hover': {
//     backgroundColor: '#00000e80'
//   },
    }));
    
    const [progress, setProgress] = React.useState(0);

    const progressAnimate = (level) => {
        const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // if (oldProgress === 70) {
        //   return 0;
        // }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, level);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
    }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // if (oldProgress === 70) {
        //   return 0;
        // }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const img= require('../../asset/blob1.svg')

    return ( 
        <div className='row mt-5 mb-3'>
            {/* <div className="col-12 d-flex justify-content-center align-items-center ">
                <SectionSubtitle firstWord={skills.firstWord} secondWord={skills.secondWord}/>
            </div> */}
            <div className="col-12 ">
                
                <Box  sx={{
                    minHeight: '50vh',
                    width: '100%',
            boxShadow: isDarkTheme?'5px 3px 17px 1px #121220':'5px 3px 17px 1px #D3D3D3',
                    backgroundColor: isDarkTheme?'#1f2839':'#ffffff'
                }} className='wave  py-3  box corners imgg1'>
                    <Grid
                      container
                      spacing={1}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      alignContent="center"
                      wrap="wrap"
                      
                    >
                        <Grid item xs={12} className='m-2'>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                                width: '90%',
                                height: '100%',
                                padding: '1rem',
                                border: '1px solid #00000e',
                                borderRadius: '20px',
                                backgroundColor: '#00000e',
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                marginTop: '-4rem',
                                '&:hover': {
                                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                                }
                            }} className='mx-auto'>
                                <SectionSubtitle firstWord={skills.firstWord}  textFormat={'h4 mb-3 text-white'} />
                            </Box>
                                

                        </Grid>
                        <Grid item xs={12} className='m-2'>
                            <div className=" row container m-0">
                            {skills.info && skills.info.map((data) =>
                            <div className="col-12 my-2 ">
                                    <Box sx={{ width: '100%' }} className=''>
                                        <div className="h6">{data.skill}</div>
                                        <Tooltip title={`${data.level}%`} arrow placement="top">
                                  <ColorLinearProgress  variant="determinate" value={data.level}/>
                                </Tooltip>
                                        </Box>
                                    
                            </div>
                            )}
                        </div>
              </Grid>
              
              <Grid item xs={12} className='m-2'>
                <img src={img} alt="" srcset="" />
              </Grid>
                      
                    </Grid>
                        
                    </Box>
            </div>
        </div>
        
     );
}
 
export default MySkill;