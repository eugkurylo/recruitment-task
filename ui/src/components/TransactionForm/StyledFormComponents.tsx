import { Box, FormControl, styled } from '@mui/material';

interface StyledFormBoxProps {
  isDesktop: boolean;
}

export const StyledFormBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDesktop',
})<StyledFormBoxProps>(({ theme, isDesktop }) => ({
  width: isDesktop ? '48%' : '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  marginBottom: isDesktop ? 0 : theme.spacing(3),
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));
