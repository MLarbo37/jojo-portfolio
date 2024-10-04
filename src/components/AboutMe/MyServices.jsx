import { DesignServices } from "@mui/icons-material";
import { Box, Card, Grid } from "@mui/material";
import SectionSubtitle from "../ReuseableComponent/SectionSubtitle";
import '../../App'
import ImageTitlePara from "../ReuseableComponent/ImageTitlePara";
import React from "react";
import { DarkThemeContext } from "../../views/WorkSpace";

const MyServices = ({ service }) => {
    const isDarkTheme = React.useContext(DarkThemeContext)
    return ( 
        <>
           
            <Grid container spacing={0}>
                <Grid item className='container'>
                    <Box  sx={{
                        minHeight: '25vh',
                        boxShadow: isDarkTheme?'5px 3px 17px 1px #121220':'5px 3px 17px 1px #D3D3D3'
                }} className='cardBorderAll my-3 d-flex justify-content-center align-items-center box corners'>
                     <ImageTitlePara imageSection={service.icon} titleSection={service.service} paraSection={ service.description} />
                        {/* <div className="row justify-content-center text-center container">
                        <div className="col-12 App-logo">
                            <Fade top cascade>
                            {service.icon}
                            </Fade>
                        </div>

                        <div className="col-12">
                            <div className="h4 primaryColor">
                                <Fade top cascade>
                                {service.service}
                                </Fade>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className="p">
                                <Fade bottom >
                                {service.description}
                                </Fade>
                            </p>
                        </div>
                    </div> */}
                </Box>
                </Grid>
                
        </Grid>

        {/* <div className=' row mb-5'>
    
            <div className="col-12 ">
                <Box elevation={0} sx={{
                    minHeight: '25vh',
                }} className='text-white py-3 d-flex justify-content-center align-items-center box corners'>
                    <div className="row justify-content-center text-center container">
                        <div className="col-12">
                            <Fade top cascade>
                            {service.icon}
                            </Fade>
                        </div>

                        <div className="col-12">
                            <div className="h4 primaryColor">
                                <Fade top cascade>
                                {service.service}
                                </Fade>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className="p">
                                <Fade bottom >
                                {service.description}
                                </Fade>
                            </p>
                        </div>
                    </div>
                </Box>
            </div>
            </div> */}
            </>
     );
}
 
export default MyServices;