import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ListSellersDTO, SellerDTO } from '../../modules/seller/seller.dto';

import { SellersRepository } from '../SellersRepository';

@Injectable()
export class SellersRepositoryInMemory implements SellersRepository {
  sellers: SellerDTO[] = [];

  async create(sellerName: string): Promise<SellerDTO> {
    const seller = {
      id: randomUUID(),
      name: sellerName,
    };
    this.sellers.push(seller);

    return seller;
  }

  async findByName(name: string): Promise<SellerDTO> {
    return this.sellers.find((seller) => seller.name === name);
  }

  async list(query: ListSellersDTO): Promise<SellerDTO[]> {
    const { page, limit } = query;
    const referenceValue = page * limit;

    return this.sellers.slice(referenceValue, referenceValue + limit);
  }
}
