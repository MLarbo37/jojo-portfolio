import * as React from 'react'
import { FormatQuoteRounded, StarBorderOutlined } from "@mui/icons-material";
import { Box, Card, CardMedia, Grid, Rating } from "@mui/material";
import ImageTitlePara from '../ReuseableComponent/ImageTitlePara';

const MyTestimonial = ({ testimonial }) => {
    let allRatings= []
    const rating = (rate) => {
        for (let i = 0; i < rate; i++) {
            allRatings.push( i)
            
        }
        console.log(allRatings);
    }

    React.useEffect(() => {
        rating(testimonial.rate)
    }, [])

    return ( 
        <>
            <Grid container spacing={0}>
                <Grid item className='container my-3'>
                   
                <div className="iconRotate primaryColor">
                   
                    <FormatQuoteRounded sx={{ fontSize: 60 }} className='iconRotate1 '/>
                    
                </div>
                <Box elevation={0} sx={{
                    minHeight: '25vh',
                        }} className='cardBorderAll text-white box corners'>
                            <ImageTitlePara
                                imageSection={<Box elevation={6} sx={{
                                    height: '15vh',
                                    width: '15vh',
                                    backgroundColor: 'transparent'
                                }}>
                                    <CardMedia
                                        component="img"
                                        image={testimonial.img}
                                        className='corners'
                                    />
                                </Box>}
                                paraSection={testimonial.testimonial}
                                iconSection={<Rating name="read-only" value={testimonial.rate} readOnly /> } />
                    {/* <div className="row text-center m-0 d-flex justify-content-center align-items-center">
                        <div className="col-12 p-3 d-flex justify-content-center align-items-center">
                            <Fade top cascade>
                            <Box elevation={6} sx={{
                            height: '15vh',
                            width: '15vh',
                            backgroundColor: 'transparent'
                            }}
                            className=''
                            >
                        <CardMedia
                            component="img"
                            image={ testimonial.img}
                            className='corners'
                        />

                                </Box>
                                </Fade>

                        </div>

                        <div className="col-12">
                            <p className="p">
                                <Fade top cascade>
                                    {testimonial.testimonial}
                                </Fade>
                            </p>
                        </div>
                                
                        <div className="col-12 float-end">
                           <Rating name="read-only" value={testimonial.rate} readOnly />         
                        </div>
                    </div> */}
                    </Box>
                </Grid>
                </Grid>
        
            </>
     );
}
 
export default MyTestimonial;