import Grid from '@mui/material/Grid'
import ImageSection from '../ReuseableComponent/ImageSection';
import TextSection from '../ReuseableComponent/TextSection';
import { Avatar, Chip, Typography } from '@mui/material';
import CustomisedChip from '../ReuseableComponent/CustomisedChip';
import AvatarNameDate from '../ReuseableComponent/AvatarNameDate';
import React from 'react';
import { DarkThemeContext } from '../../views/WorkSpace';

const Blogs = ({ blogList }) => {
    const isDarkTheme = React.useContext(DarkThemeContext)

    const truncateStatement = (statement) => {
         if (statement.length <= 150) {
          return statement;
        } else {
          return statement.substring(0, 150) + "...";
        }
      };

    return (<div className='mb-5'>
        {<Grid container spacing={0} className='container pt-0'>
            <Grid item sm={12} xl={12} >
                <ImageSection img={blogList.img} width={'100%' }/>
                </Grid>
                <Grid item md={12} xl={12} className='mt-2'
                    sx={{
                    backgroundColor: isDarkTheme?'#1f2839':'#ffffff'
                }}
                >
                    <CustomisedChip label={blogList.category} variant="outlined"/>
                    {/* <Chip className='p text-white' label="Product management" variant="outlined" /> */}
                </Grid>
                <Grid item md={12} xl={12} className='mt-2'
                    sx={{
                    backgroundColor: isDarkTheme?'#1f2839':'#ffffff'
                }}
                >
                <div className="containe">
                        <TextSection title={blogList.title} description={blogList.body.length <= 150?blogList.body:truncateStatement(blogList.body)} />
                </div>
                
                </Grid>
                {/* <AvatarNameDate img='JA' name={'Jojo Abbiw'} date={'May 02, 2011'} /> */}
                <Grid container  md={12} xl={12} className=''
                    sx={{
                    backgroundColor: isDarkTheme?'#1f2839':'#ffffff'
                }}
                >
                    <Grid item sm={1}  xl={0.7} className='d-flex align-items-center'>
                        <Avatar
                            // sx={{ width: 56, height: 56 }}
                        ></Avatar>
                    </Grid>
                    <Grid item md={11} xl={11} className=' my-aut d-flex align-items-center'>
                        
                        <div className='p fw-bold'>
                            <Typography variant="body2" display="block">
                                <div className="fw-bold">{blogList.author}</div>
                                
                            </Typography>
                        </div>
                        <div className='mx-1'>{ ' - ' }</div>
                        <div className='p'>
                            <Typography variant="body2" display="block">
                            {blogList.date}
                            </Typography>
                            
                        </div>
                    </Grid>
                    
                </Grid>
                
            
          
            </Grid>}
    </div> );
}
 
export default Blogs;