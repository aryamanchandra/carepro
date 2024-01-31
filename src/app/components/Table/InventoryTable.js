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

function createData(name, calories, fat, carbs, protein, email, price) {
  return { name, calories, fat, carbs, protein, email, price };
}

const rows = [
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
  createData("Lorem Ipsum", "Medicine", "Cipla", "100", "100", "100", "Rs120"),
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
            <TableCell>Item Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Last Added On</TableCell>
            <TableCell>Last Added Qty</TableCell>
            <TableCell>Avl Qty</TableCell>
            <TableCell>Price</TableCell>
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
              <TableCell>{row.price}</TableCell>
              <TableCell>
                <Button
                  sx={{
                    color: "#FF6558",
                    minWidth: "20px",
                    marginRight: "10px",
                  }}
                >
                  <CancelOutlinedIcon sx={{ fontSize: "25px" }} />
                </Button>
                <Button sx={{ color: "#3497F9", minWidth: "20px" }}>
                  <InfoOutlinedIcon sx={{ fontSize: "25px" }} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
