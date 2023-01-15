import { Injectable } from '@nestjs/common';
import { prisma } from 'src/database/prisma';

import { TransactionDTO } from 'src/modules/transaction/transaction.dto';
import { TransactionsRepository } from '../TransactionsRepository';

@Injectable()
export class PrismaTransactionsRepository implements TransactionsRepository {
  async bulkCreate(data: TransactionDTO[]): Promise<number> {
    return (await prisma.transaction.createMany({ data: data })).count;
  }
}
