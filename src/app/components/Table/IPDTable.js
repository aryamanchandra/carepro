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
  createData("9:30 AM", "Elizabeth Polson", "05/12/2022", "Doctor John"),
  createData("9:30 AM", "John David", "05/12/2022", "Doctor Joel"),
  createData("10:00 AM", "Krishtav Rajan", "05/12/2022", "Doctor Joel"),
  createData("11:30 AM", "Sumanth Tinson", "05/12/2022", "Doctor John"),
  createData("930 AM", "EG Subtornani", "05/12/2022", "Doctor John"),
  createData("11:00 AM", "John David", "05/12/2022", "Doctor Joel"),
  createData("11:30 AM", "Krishtov Rojan", "05/12/2022", "Doctor Joel"),
  createData("11:00 AM", "Sumanth Tinson", "05/12/2022", "Doctor John"),
  createData("11:00 AM", "EG Subramani", "05/12/2022", "Doctor John"),
  createData("11:00 AM", "Sumanth rinson", "05/12/2022", "Doctor John"),
  createData("11:00 AM", "EG Subrornoni", "05/12/2022", "Doctor Joel"),
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
            <TableCell>Patient Name</TableCell>
            <TableCell>Date</TableCell>
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
