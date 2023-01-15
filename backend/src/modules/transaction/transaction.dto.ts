import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransactionDTO {
  id?: string;

  @IsNumber()
  @IsNotEmpty()
  type: number;

  sellerId?: string;

  @IsString()
  @IsNotEmpty()
  sellerName?: string;

  @IsString()
  @IsNotEmpty()
  product: string;

  @IsNumber()
  value: number;

  @IsDate()
  @IsNotEmpty()
  date: Date | string;
}
