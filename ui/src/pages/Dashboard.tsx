import { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useSnackbar } from 'notistack';
import BalanceBox from '../components/BalanceBox/BalanceBox';
import {
  StyledPaper,
  StyledMainBox,
  StyledUpperBox,
} from '../components/layout/StyledLayoutComponents';
import FilteredTable from '../components/Table/Table';
import TableSearch from '../components/TableSearch/TableSearch';
import TransactionForm from '../components/TransactionForm/TransactionForm';
import { API_URL } from '../constants/constants';
import { TransactionsType, TransactionType } from '../types/transaction.types';
import Drawer from '../components/layout/Drawer';
import TransactionsAccordion from '../components/TransactionsAccordion/TransactionsAccordion';

const Dashboard = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const { enqueueSnackbar } = useSnackbar();

  const [transactions, setTransactions] = useState<TransactionsType>([]);
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const getTransactions = async () => {
    const data = await fetch(API_URL, {
      method: 'GET',
    });
    const jsonData = await data.json();
    setTransactions(jsonData);
  };

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  const deleteTransaction = async (id: TransactionType['id']) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      refresh();
      return enqueueSnackbar('Your transaction has been successfully deleted.', {
        variant: 'success',
      });
    });
  };

  const refresh = () => {
    return getTransactions();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Drawer label={isDesktop ? 'Desktop' : 'Mobile'}>
      <StyledPaper variant="outlined" elevation={0} square isDesktop={isDesktop}>
        <StyledMainBox isDesktop={isDesktop}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: isDesktop ? 'row-reverse' : 'column',
            }}
          >
            <TransactionForm refresh={refresh} isDesktop={isDesktop} />
            <StyledUpperBox isDesktop={isDesktop}>
              <BalanceBox />
              <TableSearch
                transactions={transactions}
                setFilteredTransactions={setFilteredTransactions}
              />
            </StyledUpperBox>
          </Box>
          <Box>
            {isDesktop ? (
              <FilteredTable
                filteredTransactions={filteredTransactions}
                deleteTransaction={deleteTransaction}
              />
            ) : (
              <TransactionsAccordion
                transactions={filteredTransactions}
                deleteTransaction={deleteTransaction}
              />
            )}
          </Box>
        </StyledMainBox>
      </StyledPaper>
    </Drawer>
  );
};

export default Dashboard;
