import { Module } from '@nestjs/common';
import { SellerModule } from './modules/seller/seller.module';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [SellerModule, TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
