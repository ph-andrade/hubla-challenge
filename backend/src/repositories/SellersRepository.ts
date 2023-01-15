import { ListSellersDTO, SellerDTO } from 'src/modules/seller/seller.dto';

export interface SellersRepository {
  create(sellerName: string): Promise<SellerDTO>;
  findByName(name: string): Promise<SellerDTO>;
  list(query: ListSellersDTO): Promise<SellerDTO[]>;
}
