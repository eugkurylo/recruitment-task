import * as yup from 'yup';

const TransactionValidationSchema = yup.object().shape({
  amount: yup.number().positive().required('Amount is required field'),
  beneficiary: yup.string().required('Beneficiary is required field'),
  account: yup
    .string()
    .matches(/^[A-Z]{2}(?:[ ]?[0-9]){18,20}$/, {
      message: 'Enter good IBAN value',
    })
    .required('Account is required field'),
  address: yup.string(),
  date: yup.date(),
  description: yup.string(),
});

export default TransactionValidationSchema;
