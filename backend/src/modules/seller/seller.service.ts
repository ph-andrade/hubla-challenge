import { Injectable } from '@nestjs/common';
import { SellersRepository } from '../../repositories/SellersRepository';
import { ListSellersDTO, SellerDTO } from './seller.dto';

@Injectable()
export class SellerService {
  constructor(private sellersRepository: SellersRepository) {}

  async list(query: ListSellersDTO): Promise<SellerDTO[]> {
    const page = query.page || 0;
    const limit = query.limit || 10;
    return this.sellersRepository.list({ page, limit });
  }
}
