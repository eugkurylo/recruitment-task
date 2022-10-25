import { TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { FormikContextType } from 'formik';
import { StyledTextField } from '../StyledTextField/StyledTextField';
import { onFieldChange } from '../../utils/formik';

type FieldProps<Values> = Omit<TextFieldProps, 'name' | 'value'> & {
  formik: FormikContextType<Values>;
  name: keyof Values & string;
};

export const Field = <Values extends {}>({ name, formik, ...props }: FieldProps<Values>) => {
  return (
    <StyledTextField
      {...props}
      name={name}
      value={formik.values[name]}
      error={formik.touched[name] && formik.errors[name]?.toString()}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onFieldChange(formik, name, e.target.value as any)
      }
    />
  );
};
