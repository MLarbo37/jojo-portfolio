import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#00000e',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#00000e90',
  },
}));

export default function CustomizedButtons({name, action}) {
  return (
    // <Stack spacing={2} direction="row">
      <ColorButton onClick={action} disableElevation  variant="contained">{name}</ColorButton>
      /* <BootstrapButton variant="contained" disableRipple>
        Bootstrap
      </BootstrapButton> */
    // </Stack>
  );
}