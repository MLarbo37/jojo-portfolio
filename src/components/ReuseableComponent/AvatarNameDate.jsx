import { Avatar, CardHeader, Grid, Skeleton, Typography } from "@mui/material";

const AvatarNameDate = ({loading, img, name, date}) => {
    return ( 
        <div>
        {/* <Grid container  md={12} xl={12} className=''
                    sx={{
                    backgroundColor: '#1f2839'
                }}
                >
                    <Grid item sm={1}  xl={0.7} className='d-flex align-items-center'>
                        <Avatar
                            // sx={{ width: 56, height: 56 }}
                        >{img || 'JA'}</Avatar>
                    </Grid>
                    <Grid item md={11} xl={11} className='text-white my-aut d-flex align-items-center'>
                        
                        <div className='p fw-bold'>
                            <Typography variant="body2" display="block">
                                <div className="fw-bold">{name}</div>
                                
                            </Typography>
                        </div>
                        <div className='mx-1'>{ ' - ' }</div>
                        <div className='p'>
                            <Typography variant="body2" display="block">
                                {date}
                            </Typography>
                            
                        </div>
                    </Grid>
                    
            </Grid> */}
            <CardHeader
                sx={{
                    color:'white'
                }}
                avatar={
                loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
             }
                title={
                    loading ? (
            <Skeleton
              animation="wave"
              height={20}
              width="20%"
            //   style={{ marginBottom: 6 }}
            />
          ) : (
            name
          )
        }
        subheaderTypographyProps='white'
        subheader={
          loading ? (
            <Skeleton animation="wave" height={20} width="10%" />
          ) : (
            date
          )
        }
            />
            </div>
     );
}
 
export default AvatarNameDate;