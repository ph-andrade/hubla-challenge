import { TransactionDTO } from '../modules/transaction/transaction.dto';

export interface TransactionsRepository {
  bulkCreate(data: TransactionDTO[]): Promise<number>;
}
