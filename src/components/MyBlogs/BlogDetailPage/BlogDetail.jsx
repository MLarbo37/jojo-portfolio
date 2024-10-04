import * as React from 'react'
import { Box, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid'
import Headings from '../../ReuseableComponent/Heading';
import ImageSection from '../../ReuseableComponent/ImageSection';
import SectionSubtitle from '../../ReuseableComponent/SectionSubtitle';
import AvatarNameDate from '../../ReuseableComponent/AvatarNameDate';
import ParagraphDescription from '../../ReuseableComponent/ParagraphDescription';
import { blogsDetails } from '../../../services/data';
import ImageContent from '../../ReuseableComponent/ImageContent';
const BlogDetail = () => {
    const [loading, setloading] = React.useState(false);

    
    return ( 
        <div className='my-5 container justify-content-center'>
            <Box>
                <Grid container spacing={0} className='container justify-content-center'>
                    <Grid lg={8} container >
                <Grid sm={12}>
                            {loading ? (<Skeleton height={'10vh'} width={'80%'} />): (<Headings title={blogsDetails.title}/>)}
                </Grid>

                <Grid sm={12}>
                    {loading? (<Skeleton variant="rectangular" height={'75vh'} />): (<ImageSection img={blogsDetails.img}/>)}
                </Grid>
                    
                    <Grid sm={12}>
                        {<AvatarNameDate loading={loading} img={'JA'} name={blogsDetails.author.name} date={blogsDetails.date} />}
                        {/* {loading? (<Skeleton height={'10vh'}/>): (<ParagraphDescription/>)} */}
                       
                </Grid>

                    <Grid sm={12}>
                        {loading ? (<div>
                            <Skeleton width='90%' />
                            <Skeleton width='75%' />
                            <Skeleton  width='80%'/>
                            </div>) : (<ParagraphDescription description={ blogsDetails.body} />)}
                    {/* Body */}
                </Grid>

                <Grid sm={12}>
                            {loading ? (<Skeleton variant='text' height={'6vh'} width={'30%'} />) : (<SectionSubtitle firstWord={' Comment'} />)}
                </Grid>
              
                    </Grid>
                    {/* <Grid lg={4} container spacing={0} className='container'>
                        <Grid item>
                        {loading ? (<Skeleton variant='text' height={'6vh'} width={'50%'} />) : (
                            <SectionSubtitle firstWord={' Categories'} />
                        )}
                        </Grid>

                        <Grid item>
                            <ImageContent/>
                        </Grid>
                        
                        
                </Grid> */}
                </Grid>

                
                
                </Box>
        </div>
     );
}
 
export default BlogDetail;