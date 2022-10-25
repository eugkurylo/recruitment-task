import { Button } from '@mui/material';
import { FC } from 'react';
import { TransactionType } from '../../types/transaction.types';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import TransactionValidationSchema from '../../validations/transactionValidationSchema';
import { Field } from '../Field/Field';
import { StyledLabel } from '../layout/StyledBoxTypography';
import { StyledFormBox, StyledFormControl } from './StyledFormComponents';
import { API_URL } from '../../constants/constants';

type TransactionFormProps = {
  refresh: () => Promise<void>;
  isDesktop: boolean;
};

const TransactionForm: FC<TransactionFormProps> = ({ refresh, isDesktop }) => {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik<TransactionType>({
    initialValues: {
      amount: 0,
      beneficiary: '',
      account: '',
      address: '',
      date: new Date(),
      description: '',
    },

    validationSchema: TransactionValidationSchema,

    onSubmit: async (values) => {
      const model: Omit<TransactionType, 'id'> = {
        ...values,
        amount: values.amount,
        beneficiary: values.beneficiary,
        account: values.account,
        address: values.address,
        description: values.description,
      };

      const requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(model),
      };
      fetch(API_URL, requestOptions)
        .then(() => {
          formik.resetForm();
          refresh();
          return enqueueSnackbar('Your transaction has been successfully sent.', {
            variant: 'success',
          });
        })
        .catch(() => {
          return enqueueSnackbar(`Your transaction hasn't been successfully sent.`, {
            variant: 'error',
          });
        });
    },
  });

  return (
    <StyledFormBox isDesktop={isDesktop}>
      <StyledLabel>New Transaction:</StyledLabel>
      <StyledFormControl>
        <Field label="Beneficiary" name="beneficiary" formik={formik} required={true} />
        <Field label="Amount" name="amount" formik={formik} required={true} />
        <Field label="Account Number" name="account" formik={formik} required={true} />
        <Field label="Address" name="address" formik={formik} />
        <Field label="Description" name="description" formik={formik} />
        <Button
          variant="contained"
          onClick={() => {
            formik.submitForm();
          }}
        >
          Submit Transaction
        </Button>
      </StyledFormControl>
    </StyledFormBox>
  );
};

export default TransactionForm;
