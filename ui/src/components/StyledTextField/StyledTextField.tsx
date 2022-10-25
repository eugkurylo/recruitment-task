import { FormLabel, FormLabelProps, TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

type StyledTextFieldProps = Omit<TextFieldProps, 'error'> & {
  error?: string | boolean;
  testId?: string;
};

export const StyledTextField: FC<StyledTextFieldProps> = ({ error, testId, ...props }) => {
  return (
    <>
      <TextField
        data-testid={testId}
        variant="outlined"
        spellCheck="false"
        autoComplete="false"
        sx={{
          width: '100%',
        }}
        {...props}
      />
      {!!error && typeof error === 'string' && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};

export const ErrorLabel: FC<FormLabelProps> = (props) => (
  <FormLabel sx={{ color: (theme) => theme.palette.error.main, fontSize: '14px' }} {...props} />
);
