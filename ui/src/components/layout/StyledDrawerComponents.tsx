import { AppBar, Box, styled, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: theme.spacing(1.5),
  zIndex: theme.zIndex.tooltip,
  position: 'sticky',
}));

export const StyledAppBarTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: theme.spacing(3),
  fontWeight: 600,
  color: theme.palette.common.black,
}));

export const StyledFooter = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  bottom: 0,
  width: '100%',
  position: 'fixed',
  padding: theme.spacing(1.5),
  borderTop: `1px solid ${theme.palette.grey['300']}`,
  color: theme.palette.warning.main,
}));
