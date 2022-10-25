import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { StyledAppBar, StyledAppBarTypography, StyledFooter } from './StyledDrawerComponents';

type DrawerProps = {
  label: string;
};

const Drawer: FC<PropsWithChildren<DrawerProps>> = ({ label, children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <StyledAppBarTypography>{label}</StyledAppBarTypography>
      </StyledAppBar>
      {children}
      <StyledFooter>LEOCODE</StyledFooter>
    </Box>
  );
};

export default Drawer;
