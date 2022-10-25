import { Box, Paper, styled } from '@mui/material';

interface StyledLayoutProps {
  isDesktop: boolean;
}

export const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDesktop',
})<StyledLayoutProps>(({ theme, isDesktop }) => ({
  minHeight: `calc(100vh - ${theme.spacing(15.5)})`,
  border: 'none',
  background: theme.palette.grey['100'],
  display: 'flex',
  justifyContent: 'center',
  padding: isDesktop ? theme.spacing(4, 0) : theme.spacing(2),
  marginBottom: theme.spacing(5.25),
}));

export const StyledMainBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDesktop',
})<StyledLayoutProps>(({ theme, isDesktop }) => ({
  width: isDesktop ? '80%' : '95%',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  background: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
}));

export const StyledUpperBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDesktop',
})<StyledLayoutProps>(({ theme, isDesktop }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: isDesktop ? '48%' : '100%',
  gap: isDesktop ? 0 : theme.spacing(2),
}));
