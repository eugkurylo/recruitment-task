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

type FilteredTableProps = {
  filteredTransactions: TransactionsType;
  deleteTransaction: (id: TransactionType['id']) => Promise<void>;
  isDesktop: boolean;
};

const FilteredTable: FC<FilteredTableProps> = ({
  filteredTransactions,
  deleteTransaction,
  isDesktop,
}) => {
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
      <Table sx={{ minWidth: isDesktop ? 650 : 100 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Beneficiary</StyledTableCell>
            {isDesktop && <StyledTableCell>Account</StyledTableCell>}
            {isDesktop && <StyledTableCell>Address</StyledTableCell>}
            {isDesktop && <StyledTableCell>Date</StyledTableCell>}
            {isDesktop && <StyledTableCell>Description</StyledTableCell>}
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
                {isDesktop && <StyledTableCell>{transaction.account}</StyledTableCell>}
                {isDesktop && <StyledTableCell>{transaction.address}</StyledTableCell>}
                {isDesktop && (
                  <StyledTableCell>
                    {formatDate(transaction.date, DATE_TIME_WITHOUT_ZONE_FORMAT)}
                  </StyledTableCell>
                )}
                {isDesktop && <StyledTableCell>{transaction.description}</StyledTableCell>}
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
        sx={{
          '.MuiTablePagination-selectLabel': {
            display: isDesktop ? 'block' : 'none',
          },
        }}
      />
    </TableContainer>
  );
};

export default FilteredTable;
