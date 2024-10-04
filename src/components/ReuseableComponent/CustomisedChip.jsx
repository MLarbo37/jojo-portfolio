import { TextField, styled, Chip } from "@mui/material";
import '../../App'

const CustomisedChip = ({label, variant}) => {
  const CustomisedChip = styled(Chip)({
    borderRadius: '10px',
    color: '#00000e',
    borderColor: '#00000e'
  // '& label.Mui-focused': {
  //   color: '#00000e',
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: '',
  // },
  //   '& .MuiOutlinedInput-root': {
  //   borderRadius: '15px',
  //   '& fieldset': {
  //         borderColor: '',
  //       borderWidth: '1px'
  //   },
  //   '&:hover fieldset': {
  //       borderColor: '',
  //       borderWidth: '1px'
  //   },
  //   '&.Mui-focused fieldset': {
  //       borderColor: '#00000e',
  //       borderWidth: '1px'
  //   },
  // },
});
    return ( 
      <CustomisedChip label={label} variant={variant } className='p text-capitalize' />
     );
}
 
export default CustomisedChip;