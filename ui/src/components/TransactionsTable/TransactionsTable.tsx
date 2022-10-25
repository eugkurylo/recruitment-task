import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { FC, useState } from 'react';
import { DATE_TIME_WITHOUT_ZONE_FORMAT } from '../../constants/constants';
import { TransactionsType, TransactionType } from '../../types/transaction.types';
import { formatDate } from '../../utils/formatDate';
import { StyledTableCell, StyledTableRow } from './StyledTableComponents';
import DeleteIcon from '@mui/icons-material/Delete';

type TransactionsTableProps = {
  filteredTransactions: TransactionsType;
  deleteTransaction: (id: TransactionType['id']) => Promise<void>;
};

const TransactionsTable: FC<TransactionsTableProps> = ({ filteredTransactions, deleteTransaction }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Beneficiary</StyledTableCell>
            <StyledTableCell>Account</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTransactions
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((transaction: TransactionType) => (
              <StyledTableRow key={transaction.id}>
                <StyledTableCell>{transaction.beneficiary}</StyledTableCell>
                <StyledTableCell>{transaction.account}</StyledTableCell>
                <StyledTableCell>{transaction.address}</StyledTableCell>

                <StyledTableCell>
                  {formatDate(transaction.date, DATE_TIME_WITHOUT_ZONE_FORMAT)}
                </StyledTableCell>

                <StyledTableCell>{transaction.description}</StyledTableCell>
                <StyledTableCell>{transaction.amount}</StyledTableCell>
                <StyledTableCell>
                  <IconButton onClick={() => deleteTransaction(transaction.id)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={filteredTransactions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TransactionsTable;
