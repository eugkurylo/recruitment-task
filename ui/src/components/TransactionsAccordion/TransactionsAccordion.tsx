import Typography from '@mui/material/Typography';
import { Box, IconButton, TablePagination } from '@mui/material';
import { TransactionsType, TransactionType } from '../../types/transaction.types';
import { DATE_TIME_WITHOUT_ZONE_FORMAT } from '../../constants/constants';
import { formatDate } from '../../utils/formatDate';
import {
  StripedAccordion,
  StyledAccordionSummary,
  accordionProps,
  StyledAccordionDetails,
} from '../Accordion/StyledAccordion';
import { BoldTypography, StyledInfoBox, SemiBoldTypography } from '../common/FormStyledComponents';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

interface TransactionsAccordionProps {
  transactions: TransactionsType;
  deleteTransaction: (id: TransactionType['id']) => Promise<void>;
}

const TransactionsAccordion = ({ transactions, deleteTransaction }: TransactionsAccordionProps) => {
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
    <>
      {transactions
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((transaction: TransactionType, index) => (
          <Box key={transaction.id}>
            <StripedAccordion square index={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <StyledAccordionSummary {...accordionProps}>
                  <BoldTypography fontSize="0.9rem" pl={1}>
                    {formatDate(transaction.date, DATE_TIME_WITHOUT_ZONE_FORMAT)}
                  </BoldTypography>
                  <BoldTypography fontSize="0.9rem" pl={1}>
                    {transaction.amount}
                  </BoldTypography>
                </StyledAccordionSummary>
                <IconButton onClick={() => deleteTransaction(transaction.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
              <StyledAccordionDetails>
                <StyledInfoBox>
                  <BoldTypography>Beneficiary:</BoldTypography>
                  <Typography>{transaction.beneficiary}</Typography>
                  <BoldTypography>Account:</BoldTypography>
                  <Typography>{transaction.account}</Typography>
                  <BoldTypography>Address:</BoldTypography>
                  <Typography>{transaction.address}</Typography>
                  <BoldTypography>Description:</BoldTypography>
                  <Typography>{transaction.description}</Typography>
                  <BoldTypography>Date:</BoldTypography>
                  <SemiBoldTypography>
                    {formatDate(transaction.date, DATE_TIME_WITHOUT_ZONE_FORMAT)}
                  </SemiBoldTypography>
                  <BoldTypography>Amount:</BoldTypography>
                  <Typography>{transaction.amount}</Typography>
                </StyledInfoBox>
              </StyledAccordionDetails>
            </StripedAccordion>
          </Box>
        ))}
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={transactions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          '.MuiTablePagination-selectLabel': {
            display: 'none',
          },
        }}
      />
    </>
  );
};

export default TransactionsAccordion;
