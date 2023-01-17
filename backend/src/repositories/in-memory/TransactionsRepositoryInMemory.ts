import { Injectable } from '@nestjs/common';
import { TransactionDTO } from '../../modules/transaction/transaction.dto';
import { TransactionsRepository } from '../TransactionsRepository';

@Injectable()
export class TransactionsRepositoryInMemory implements TransactionsRepository {
  transactions: TransactionDTO[] = [];

  async bulkCreate(data: TransactionDTO[]): Promise<number> {
    this.transactions.push(...data);
    return data.length;
  }
}
