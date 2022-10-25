import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { FC, useEffect, useState } from 'react';
import { TransactionsType } from '../../types/transaction.types';

type TableSearchProps = {
  transactions: TransactionsType;
  setFilteredTransactions: React.Dispatch<React.SetStateAction<TransactionsType>>;
};

const TableSearch: FC<TableSearchProps> = ({ transactions, setFilteredTransactions }) => {
  const [searched, setSearched] = useState<string>('');
  const requestSearch = (searchedVal: string) => {
    const transactionsForFilter = transactions;
    const transactionsFilter = transactionsForFilter.filter((transaction) => {
      return transaction.beneficiary.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setFilteredTransactions(transactionsFilter);
  };

  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  useEffect(() => {
    requestSearch(searched);
  }, [searched]);

  return (
    <FormControl variant="outlined">
      <InputLabel>Search...</InputLabel>
      <OutlinedInput
        type="text"
        value={searched}
        label="Search..."
        onChange={(e) => setSearched(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={cancelSearch} edge="end">
              <ClearOutlinedIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default TableSearch;
