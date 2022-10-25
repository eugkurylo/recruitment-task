import { styled, Typography } from '@mui/material';

export const StyledLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2),
  fontWeight: 700,
}));

export const StyledAmount = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(3),
  fontWeight: 700,
}));
