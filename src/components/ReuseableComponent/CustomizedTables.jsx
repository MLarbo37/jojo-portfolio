import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Assignment, AssignmentIndRounded, MoreVertRounded } from '@mui/icons-material';
import { Avatar, Chip, IconButton } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00000e',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const CustomizedTables = ({list}) => {

  const [isPublished, setIsPublished] = React.useState()

const handleDelete = (id) => {
  axios.delete(`http://localhost:4000/api/blog/${id}`)
  .then(res => {
  console.log(res);
  console.log(res.data);
  })
  }

  const handlePublish = (id) => {
    axios
      .patch(`http://localhost:4000/api/blog/${id}`, { publish: true })
      .then(() => setIsPublished(true))
      .catch((error) => console.error(error));
  };

  const handleUnpublish = (id) => {
    axios
      .patch(`http://localhost:4000/api/blog/${id}`, { publish: false })
      .then(() => setIsPublished(false))
      .catch((error) => console.error(error));
  };

  return (
    <TableContainer component={Paper} className='corners'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="center" className="text-capitalize">{index+1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <div className='d-flex align-items-center'>
                  <Avatar sx={{ }} variant="rounded" className=''>
                  <Assignment />
                </Avatar> <div className="mx-2">{row.title}</div> 
                </div>
                
              </StyledTableCell>
              <StyledTableCell align="center" className="text-capitalize">{row.category}</StyledTableCell>
              <StyledTableCell align="center">{row.author}</StyledTableCell>
              <StyledTableCell align="center"><Chip label={row.publish?"Published":"Unpublished"} color={row.publish?"success": "primary"} variant="outlined" >{row.publish}</Chip> </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton>
                  <MoreVertRounded/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables