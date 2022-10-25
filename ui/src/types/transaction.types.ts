export type TransactionType = {
  id?: number | string;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: Date;
  description: string;
};

export type TransactionsType = TransactionType[];
