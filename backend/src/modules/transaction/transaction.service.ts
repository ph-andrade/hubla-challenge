import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from 'src/repositories/TransactionsRepository';
import { TransactionDTO } from './transaction.dto';
import { validatorDto } from 'src/utils/ValidatorDTO';
import { SellersRepository } from 'src/repositories/SellersRepository';

@Injectable()
export class TransactionService {
  constructor(
    private transactionsRepository: TransactionsRepository,
    private sellersRepository: SellersRepository,
  ) {}

  async import(file: Express.Multer.File) {
    const fileData = file.buffer.toString().split('\n');
    if (!fileData.length) throw new Error(`There's no data to import`);
    const totalRows = fileData.length;
    const failedRows: number[] = [];
    const validatedTransactions: TransactionDTO[] = [];

    // Standardize and validate data
    await Promise.all(
      fileData.map(async (data, index) => {
        const transaction = {
          type: Number(data.slice(0, 1)),
          date: new Date(data.slice(1, 26)),
          product: data.slice(26, 56).trim(),
          value: Number(data.slice(56, 66)),
          sellerName: data.slice(66, 86).trim(),
        };

        if (await validatorDto(TransactionDTO, transaction)) {
          return validatedTransactions.push(transaction);
        }
        failedRows.push(index);
      }),
    );

    // Build an object that has the seller's name as a key and his transactions as an array
    const sellerTransactions = validatedTransactions.reduce(
      (result: { [sellerName: string]: TransactionDTO[] }, current) => {
        const { type, date, product, value, sellerName } = current;
        const key = sellerName;
        result[key] = result[key] || [];
        result[key].push({ type, date, product, value });
        return result;
      },
      {},
    );

    // checks if the seller already exists, if not create it and thieir the transactions
    await Promise.all(
      Object.keys(sellerTransactions).map(async (sellerName) => {
        let seller = await this.sellersRepository.findByName(sellerName);
        if (!seller) seller = await this.sellersRepository.create(sellerName);

        return this.transactionsRepository.bulkCreate(
          sellerTransactions[sellerName].map((sellerTransaction) => {
            return {
              ...sellerTransaction,
              sellerId: seller.id,
            };
          }),
        );
      }),
    );

    return {
      totalRows,
      failedRows,
    };
  }
}
