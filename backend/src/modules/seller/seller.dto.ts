import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class SellerDTO {
  id?: string;
  name: string;
}

export class ListSellersDTO {
  @Type(() => Number)
  @IsInt()
  page = 0;

  @Type(() => Number)
  @IsInt()
  limit = 20;
}
