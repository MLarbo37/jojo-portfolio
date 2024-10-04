import { Box, Grid, useMediaQuery } from "@mui/material";
import { AddCircleOutlineOutlined, Download, TerminalRounded, Search, Repeat, DesignServices, Code, RocketLaunch, AccountTreeRounded, MobileFriendlyRounded } from "@mui/icons-material";
import { isEven } from "../../services/functions";
import * as React from "react";
import { DarkThemeContext } from "../../views/WorkSpace";

const MyProcessProto = ({ processList }) => {
    const isDarkTheme = React.useContext(DarkThemeContext)

    const smallScreen = useMediaQuery('(max-width:899px)');
    const mediumScreen = useMediaQuery('(min-width:900px)');
    const largeScreen = useMediaQuery('(min-width:1200px)');
    const extraLScreen = useMediaQuery('(min-width:1536px)');
    const ProcessBox =({description, step}) => <Grid container spacing={0} className='px-4 container'>
        <Grid item>
            <Box sx={{
                border: "3px solid #949494",
                borderRadius: "10px",
            }}
                className='p-1 my-2 d-flex justify-content-center align-items-center corners'
            >
             <span className=" "><AddCircleOutlineOutlined/></span><span className="h6 px-1 m-0">Step {step}</span>
            </Box>
        </Grid>
        <Grid item xs={12}>
            <div className="p">
            {description}
            </div>
        </Grid>
      
    </Grid>
    return ( 
        <div>
            {processList && processList.map((process, index) => (
                <>
                    <div className="d-none d-md-block ">
                    <Grid container spacing={0} direction={isEven(index) ? "row" : "row-reverse"} className={isEven(index) && extraLScreen  ? ' processBoxMarginLeft mt-5' : !isEven(index) && extraLScreen  ? ' processBoxMarginRight mt-5':'d-flex justify-content-center mt-5'}
                >
                    <Grid sm={12} md={12} lg={7.5} xl={6} items className="">
                        <Box sx={{
                height: "10rem",
                width: "100%",
                // border: "1px solid #00000e",
                            borderRadius: "20px",
                boxShadow: isDarkTheme?'5px 3px 17px 1px #121220':'5px 3px 17px 1px #D3D3D3',
            }} className='d-flex align-items-center'>
                <Grid container spacing={0} className='' direction={isEven(index) ? "row" : "row-reverse"}>
                    <Grid item sm={9} md={8.5} xl={7} lg={8} className='row d-flex  align-items-center mx-auto '>
                                    <ProcessBox description={process.description} step={process.step } />
                    </Grid>
                    <Grid item sm={3} md={3.5} xl={5} lg={4} className='d-flex justify-content-center'>
                       <Box sx={isEven(index)?{
                height: "12rem",
                width: "12rem",
                // border: "5px inset #ffffff",
                borderRadius: "25% 0px",
                boxShadow: isDarkTheme?"11px 3px 17px 0px #121220":"11px 3px 17px 0px rgba(0,0,0,0.20)",
                                    } :
                                        {
                                        height: "12rem",
                width: "12rem",
                // border: "5px outset #ffffff",
                borderRadius: "0px 25%",
                boxShadow: isDarkTheme?"11px 3px 17px 0px #121220":"11px 3px 17px 0px rgba(0,0,0,0.20)",
                                    }}
                                        // className='processBox d-flex  align-items-center row text-white'
                    className={isEven(index) ?'processBox d-flex  align-items-center row text-white':'processBox d-flex  align-items-center row text-white float-end'}
                                    >
                            <div className="col-12 text-center">
                                            {/* <Search sx={{ fontSize: 80 }} /> */}
                                            {process.icon}
                                 <div className="h5 text-center">
                                {process.service}
                            </div>
                            </div>
                            {/* <div className=" text-center">
                                Research
                            </div> */}
            </Box>
                    </Grid>
                </Grid>
            </Box>
                    </Grid>
                  
                    </Grid>
                </div>
                
                    <div className="d-block d-md-none my-4">
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <Box sx={{
                                    // height: "20vh",
                                    width: "100%",
                                }} className='border corners'>
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
                                                height: "5vh",
                                                width: "100%",
                                                borderRadius: "10px",
                                                boxShadow: "11px 3px 17px 0px rgba(0,0,0,0.20)",
                                                backgroundColor: "#00000e",
                                                color: "white",
                                            }} className='border h5 m-0 d-flex justify-content-center align-items-center py-4'>{ process.service}</Box>
                                        </Grid>
                                        <Grid item xs={12} className='m-1'>
                                            <div className="container">
                                                <div>
                                                    <span className="h6">Step {process.step}</span>
                                                </div>
                                                <div>
                                                    <p className="">
                                                        {process.description}
                                                    </p>
                                                </div>
                                            </div>
                                            </Grid>
                                      
                                    </Grid>
                                </Box>
                            </Grid>
                                    
                          
                        </Grid>
                </div>
                </>
            ))}
        </div>
     );
}
 
export default MyProcessProto;