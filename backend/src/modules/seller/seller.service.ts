import { Injectable } from '@nestjs/common';
import { SellersRepository } from '../../repositories/SellersRepository';
import { ListSellersDTO, SellerDTO } from './seller.dto';

@Injectable()
export class SellerService {
  constructor(private sellersRepository: SellersRepository) {}

  async list(query: ListSellersDTO): Promise<SellerDTO[]> {
    return this.sellersRepository.list(query);
  }
}
