import React , {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from '../Redux/Actions/actions';
import { useHistory } from 'react-router-dom';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    marginTop:100,
    minWidth: 900,
  },
});


function Homes() {
    const classes = useStyles();
let dispatch = useDispatch();
let histroy = useHistory();
//fetch data and desture the users in 
const { users } = useSelector(state => state.data)
useEffect(()=> {
    dispatch(loadUsers())
},[dispatch]);
//deleteuser-4
 const handleDelete = (id) => {
  if(window.confirm("Are sure wanted to delete the user")){
    dispatch(deleteUser(id))
  }
  }
const data = users && users.map((user) => {
  return (
  
   
    <div  key={user.id}>
    
<table>
 <thead>
<tr >
<th>Email</th>
<th>Name</th>
<th>Action</th>
</tr>
</thead>
<tbody >
<tr >
<td>{user.email}</td>
<td>{user.name}</td>
<td>
  {/* //getUserbyId-4 */}
  <button onClick={()=> histroy.push(`/editUser/${user.id}`)}>Edit</button>
{/* deleteuser-4  */}
<button onClick={()=> handleDelete(user.id)}>Delete</button></td>
</tr>
</tbody>
</table>
    </div> 
  
)});
    return (
    
      <>  
      <button
    onClick={() => histroy.push("/addUser")}
    > Add User</button>
      {data}
       </>
      );
        
      
      {/* // <TableContainer component={Paper}>
      //   <Table className={classes.table} aria-label="customized table">
      //     <TableHead>
      //       <TableRow>
      //         <StyledTableCell>Name</StyledTableCell>
      //         <StyledTableCell align="center">Email</StyledTableCell>
      //         <StyledTableCell align="center">Contact</StyledTableCell>
      //         <StyledTableCell align="center">Address</StyledTableCell>
      //         <StyledTableCell align="center">action</StyledTableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
            //  aviod erros users && users.map 
            //  {users && users.map((user) => ( 
      //         <StyledTableRow key={user.id}>
      //           <StyledTableCell component="th" scope="row">
      //             {user.name}
      //           </StyledTableCell>
      //           <StyledTableCell align="center">{user.email}</StyledTableCell>
      //           <StyledTableCell align="center">{user.username}</StyledTableCell>
      //           <StyledTableCell align="center">{user.address}</StyledTableCell>
      //           <StyledTableCell align="center"></StyledTableCell>
      //         </StyledTableRow>
      //       ))}
      //     </TableBody>
      //   </Table>
      // </TableContainer> */}
    //   </>
    // );
}

export default Homes