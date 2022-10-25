import { Box } from '@mui/material';
import { StyledAmount, StyledLabel } from '../layout/StyledBoxTypography';

const BalanceBox = () => {
  return (
    <Box>
      <StyledLabel>Balance:</StyledLabel>
      <StyledAmount>$10542,73</StyledAmount>
    </Box>
  );
};

export default BalanceBox;
