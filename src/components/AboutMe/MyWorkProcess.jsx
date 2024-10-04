import { Box } from "@mui/material";
import ImageTitlePara from "../ReuseableComponent/ImageTitlePara";

const MyWorkProcess = ({workprocess}) => {
    return ( 
        <div>
            {/* <Stack direction="row" spacing={2}> */}
        <Box elevation={0} sx={{
                    minHeight: '25vh',
            }} className=' d-flex justify-content-center align-items-center box corners'>
                <ImageTitlePara imageSection={workprocess.icon} titleSection={workprocess.service} paraSection={ workprocess.description} />
             
                </Box>
      {/* </Stack> */}
        </div>
     );
}
 
export default MyWorkProcess;