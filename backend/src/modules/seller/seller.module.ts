import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { PrismaSellersRepository } from 'src/repositories/prisma/PrismaSellersRepository';
import { SellersRepository } from 'src/repositories/SellersRepository';

@Module({
  controllers: [SellerController],
  providers: [
    PrismaSellersRepository,
    {
      provide: SellerService,
      useFactory: (sellersRepository: SellersRepository) => {
        return new SellerService(sellersRepository);
      },
      inject: [PrismaSellersRepository],
    },
  ],
})
export class SellerModule {}
