import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { TransactionDTO } from '../transaction/transaction.dto';

export class SellerDTO {
  @ApiProperty({
    description: 'Seller uuid',
    example: '5c541318-8633-49af-999b-b6648cc49e8b',
  })
  id?: string;

  @ApiProperty({
    description: 'Seller name',
    example: 'Pedro Henrique',
  })
  name: string;

  @ApiProperty({
    description: 'Seller transactions',
    example: [
      {
        type: 1,
        sellerId: '5c541318-8633-49af-999b-b6648cc49e8b',
        product: 'Curso fullstack',
        date: '22022-02-04T07:42:12-03:00',
        value: 2000,
      },
    ],
  })
  transactions?: TransactionDTO[];
}

export class ListSellersDTO {
  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  page: number;

  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  limit: number;
}
