import { Box, styled, Typography } from '@mui/material';

export const BoldTypography = styled(Typography)(() => ({
  fontWeight: 700,
}));

export const SemiBoldTypography = styled(Typography)(() => ({
  fontWeight: 500,
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
}));
