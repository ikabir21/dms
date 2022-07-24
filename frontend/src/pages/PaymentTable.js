import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "transaction", label: "Transaction Id", align: "left", minWidth: 170 },
  {
    id: "amount",
    label: "Amount (Rs.)",
    align: "center",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center"
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right"
  }
];

function createData(transaction, amount, status, date) {
  return { transaction, amount, status, date };
}

const rows = [
  createData("Payment from Jenny", 5000, "Success", "December 22, 2021"),
  createData("Payment to John", 2500, "Success", "December 22, 2021"),
  createData("Payment from Oliver", 2300, "Pending", "December 22, 2021"),
  createData("Payment from Jack", 5075, "Failed", "December 22, 2021"),
  createData("Payment to Thomas", 520, "Success", "December 22, 2021"),
  createData("Payment from Dua", 50, "Pending", "December 22, 2021"),
  createData("Payment to Beyonce", 2345, "Success", "December 22, 2021"),
  createData("Payment to Kylie", 10234, "Success", "December 22, 2021"),
  createData("Payment from Mia", 15689, "Success", "December 22, 2021"),
  createData("Payment to Dani", 125, "Success", "December 22, 2021"),
  createData("Payment from Alexis", 930, "Failed", "December 22, 2021"),
  createData("Payment from Leah", 450, "Success", "December 22, 2021"),
  createData("Payment from Johny", 222, "Success", "December 22, 2021"),
  createData("Payment to Rock", 999, "Failed", "December 22, 2021"),
  createData("Payment from Eminem", 459, "Success", "December 22, 2021"),
  createData("Payment from Guddu", 47328, "Success", "December 22, 2021"),
  createData("Payment to Akshay", 252, "Failed", "December 22, 2021"),
  createData("Payment from Smriti", 50000, "Success", "December 22, 2021")
];

export default function PaymentTable({payments}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = [];
  React.useEffect(() => {
    payments.forEach((el) => {
      rows.push(createData(el.transId, el.amount, el.status, (new Date(el.date)).toDateString()))
    })
  }, [payments, rows])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize: "1.2rem" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ fontSize: "1rem" }}>
                        {column.format && typeof value === "number" ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
