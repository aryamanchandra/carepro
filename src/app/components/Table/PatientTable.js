import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function createData(name, calories, fat, carbs, protein, email) {
  return { name, calories, fat, carbs, protein, email };
}

const rows = [
  createData(
    "Elizabeth Polson",
    32,
    "Female",
    "B+ve",
    "49112345 67890",
    "elsobethpolsan@hotmail.com"
  ),
  createData(
    "John David",
    24,
    "Male",
    "AB+ve",
    "+9112345 67890",
    "davidj0hn22@gmail.com"
  ),
  createData(
    "Krishtav Rajan",
    77,
    "Male",
    "O+ve",
    "+9112345 67890",
    "krishnarajon23@grnailcom"
  ),
  createData(
    "Sumanth Tinson",
    77,
    "Male",
    "AB+ve",
    "12345 67890",
    "tintintin@gmailcom"
  ),
  createData(
    "EG Subramani",
    55,
    "Male",
    "O-ve",
    "+9112345 67890",
    "egs31322@gmail.com"
  ),
  createData(
    "Ronjan Moori",
    55,
    "Male",
    "O+ve",
    "+9112345 67890",
    "ranajonmaari@yahoo.com"
  ),
  createData(
    "Philipile Gopal",
    55,
    "Male",
    "O-ve",
    "+9112345 67890",
    "gop0122@gmoil.com"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: 650,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email ID</TableCell>
            <TableCell>User Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
              <Button sx={{color:"#FF6558",  minWidth:"20px", marginRight:"10px"}}>
                  <CancelOutlinedIcon sx={{fontSize:"25px",}} />
                </Button>
                <Button sx={{color:"#3497F9", minWidth:"20px"}}>
                  <InfoOutlinedIcon sx={{fontSize:"25px",}} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
