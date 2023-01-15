import { TransactionDTO } from 'src/modules/transaction/transaction.dto';

export interface TransactionsRepository {
  bulkCreate(data: TransactionDTO[]): Promise<number>;
}
