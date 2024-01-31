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
  createData("Elizabeth Polson", "12003999102", "'NV-2902001", "RS. 2300", "Pending"),
  createData("John David", "1200399320", "INV-2991001", "RS. 4005", "Pending"),
  createData("Krishtav Rajan", "1200399989", "'NV-2991010", "RS. 5000", "Paid"),
  createData("Sumanth Tinson", "'200393202", "'NV-299104S", "Rs, 10039", "Pending"),
  createData("EG Subramani", "2993003011", "NV-2991123", "RS. 18990", "Pending"),
  createData("Ranjan Moori", "12003999482", "'NV-299533", "RS, 9020", "Pending"),
  createData("Philipile Gopal", "12003294001", "'NV-299533", "RS, 9020", "Pending")
]

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
            <TableCell>Patient ID</TableCell>
            <TableCell>Invoice No.</TableCell>
            <TableCell>Pending Amt</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
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
