import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransactionDTO {
  id?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Transaction type',
    example: 1,
  })
  type: number;

  @ApiProperty({
    description: 'Transaction seller id',
    example: '5c541318-8633-49af-999b-b6648cc49e8b',
  })
  sellerId?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Transaction seller name',
    example: 'Pedro Henrique',
  })
  sellerName?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Transaction product',
    example: 'Curso fullstack',
  })
  product: string;

  @IsNumber()
  @ApiProperty({
    description: 'Transaction value',
    example: 2000,
  })
  value: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Transaction date',
    example: '22022-02-04T07:42:12-03:00',
  })
  date: Date | string;
}

export class ImportTransactions {
  @ApiProperty({
    description: 'Sucessful rows from file',
    example: 20,
  })
  totalRows: number;

  @ApiProperty({
    description: 'Rows that failed',
    example: [1, 20],
  })
  failedRows: number[];
}
