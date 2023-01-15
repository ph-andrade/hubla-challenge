import { Injectable } from '@nestjs/common';
import { TransactionDTO } from './transaction.dto';

@Injectable()
export class TransactionService {
  async import(file: Express.Multer.File) {
    const fileData = file.buffer.toString().split('\n');
    if (!fileData.length) throw new Error(`There's no data to import`);

    // Standardize and validate data
    const validatedTransactions: TransactionDTO[] = [];
    await Promise.all(
      fileData.map(async (data) => {
        const transaction = {
          type: Number(data.slice(0, 1)),
          date: new Date(data.slice(1, 26)),
          product: data.slice(26, 56).trim(),
          value: Number(data.slice(56, 66)),
          sellerName: data.slice(66, 86).trim(),
        };

        return validatedTransactions.push(transaction);
      }),
    );

    return validatedTransactions;
  }
}
