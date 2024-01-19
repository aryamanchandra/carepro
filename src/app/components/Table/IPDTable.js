import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("9:30 AM", "05/12/2022", "Elizabeth Polson", "Doctor John"),
  createData("9:30 AM", "05/12/2022", "John David", "Doctor Joel"),
  createData("10:00 AM", "05/12/2022", "Krishtav Rajan", "Doctor Joel"),
  createData("11:30 AM", "05/12/2022", "Sumanth Tinson", "Doctor John"),
  createData("930 AM", "05/12/2022", "EG Subtornani", "Doctor John"),
  createData("11:00 AM", "05/12/2022", "John David", "Doctor Joel"),
  createData("11:30 AM", "05/12/2022", "Krishtov Rojan", "Doctor Joel"),
  createData("11:00 AM", "05/12/2022", "Sumanth Tinson", "Doctor John"),
  createData("11:00 AM", "05/12/2022", "EG Subramani", "Doctor John"),
  createData("11:00 AM", "05/12/2022", "Sumanth rinson", "Doctor John"),
  createData("11:00 AM", "05/12/2022", "EG Subrornoni", "Doctor Joel"),  
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: 650,
        }}
        // size="small"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Patient Name</TableCell>
            <TableCell>Doctor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
