import { Injectable } from '@nestjs/common';
import { prisma } from '../../database/prisma';

import { TransactionDTO } from '../../modules/transaction/transaction.dto';
import { TransactionsRepository } from '../TransactionsRepository';

@Injectable()
export class PrismaTransactionsRepository implements TransactionsRepository {
  async bulkCreate(data: TransactionDTO[]): Promise<number> {
    return (await prisma.transaction.createMany({ data: data })).count;
  }
}
