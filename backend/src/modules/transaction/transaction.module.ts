import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaTransactionsRepository } from 'src/repositories/prisma/PrismaTransactionsRepository';
import { TransactionsRepository } from 'src/repositories/TransactionsRepository';
import { SellersRepository } from 'src/repositories/SellersRepository';
import { PrismaSellersRepository } from 'src/repositories/prisma/PrismaSellersRepository';

@Module({
  controllers: [TransactionController],
  providers: [
    PrismaTransactionsRepository,
    PrismaSellersRepository,
    {
      provide: TransactionService,
      useFactory: (
        transactionsRepository: TransactionsRepository,
        sellersRepository: SellersRepository,
      ) => {
        return new TransactionService(
          transactionsRepository,
          sellersRepository,
        );
      },
      inject: [PrismaTransactionsRepository, PrismaSellersRepository],
    },
  ],
})
export class TransactionModule {}
