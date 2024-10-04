import { TextField, styled } from "@mui/material";
import '../../App'

const CustomisedTextField = ({label}) => {
  const CustomisedTextField = styled(TextField)({
      borderRadius: '10px',
  '& label.Mui-focused': {
    color: '#00000e',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '',
  },
    '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    '& fieldset': {
          borderColor: '',
        borderWidth: '1px'
    },
    '&:hover fieldset': {
        borderColor: '',
        borderWidth: '1px'
    },
    '&.Mui-focused fieldset': {
        borderColor: '#00000e',
        borderWidth: '1px'
    },
  },
});
    return ( 
        <CustomisedTextField label={label} fullWidth/>
     );
}
 
export default CustomisedTextField;