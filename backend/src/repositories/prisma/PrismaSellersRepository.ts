import { Injectable } from '@nestjs/common';
import { prisma } from 'src/database/prisma';
import { ListSellersDTO, SellerDTO } from 'src/modules/seller/seller.dto';

import { SellersRepository } from '../SellersRepository';

@Injectable()
export class PrismaSellersRepository implements SellersRepository {
  async create(sellerName: string): Promise<SellerDTO> {
    return prisma.seller.create({
      data: { name: sellerName },
    });
  }

  findByName(name: string): Promise<SellerDTO> {
    return prisma.seller.findFirst({ where: { name } });
  }

  list(query: ListSellersDTO): Promise<SellerDTO[]> {
    return prisma.seller.findMany({
      skip: query.page,
      take: query.limit,
      include: { transactions: true },
    });
  }
}
