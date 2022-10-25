import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accordion, AccordionSummary } from '@mui/material';

interface StripedAccordionProps {
  index: number;
}

export const accordionProps = {
  expandIcon: (
    <ExpandMoreIcon
      sx={{
        pointerEvents: 'auto',
      }}
    />
  ),
};

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.grey['50'],
  color: theme.palette.common.black,
  alignItems: 'flex-start',
  display: 'flex',
  width: 'fit-content',
  flexDirection: 'row',
  gap: theme.spacing(4),
  padding: theme.spacing(1),
}));

export const StripedAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== 'index',
})<StripedAccordionProps>(({ index, theme }) => ({
  width: '100%',
  backgroundColor: index % 2 === 0 ? theme.palette.grey['300'] : theme.palette.grey['100'],
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  width: `calc(100% - ${theme.spacing(2)})`,
  flexDirection: 'row-reverse',
  height: theme.spacing(8),
  paddingRight: theme.spacing(1),
}));
