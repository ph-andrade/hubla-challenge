import { resolve } from 'path';
import * as fs from 'fs';

import { Test, TestingModule } from '@nestjs/testing';
import { SellersRepositoryInMemory } from '../../repositories/in-memory/SellersRepositoryInMemory';
import { TransactionsRepositoryInMemory } from '../../repositories/in-memory/TransactionsRepositoryInMemory';
import { SellersRepository } from '../../repositories/SellersRepository';
import { TransactionsRepository } from '../../repositories/TransactionsRepository';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;
  let sellersRepository: SellersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsRepositoryInMemory,
        SellersRepositoryInMemory,
        {
          provide: TransactionService,
          useFactory: (
            transactionsRepository: TransactionsRepository,
            sellersRepository: SellersRepository,
          ) => {
            return new TransactionService(
              transactionsRepository,
              sellersRepository,
            );
          },
          inject: [TransactionsRepositoryInMemory, SellersRepositoryInMemory],
        },
      ],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
    sellersRepository = module.get<SellersRepositoryInMemory>(
      SellersRepositoryInMemory,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to import files', async () => {
    const testFolder = resolve(__dirname, '..', '..', '..', 'test');
    const filename = resolve(`${testFolder}`, 'sales.txt');

    const seller = {
      name: 'JOSE CARLOS',
    };

    // const fileData = file.arrayBuffer.toString().split('\n');
    const fileDate = await fs.promises.readFile(filename, 'utf-8');
    const response = await service.import(fileDate);
    expect(response).toEqual({
      totalRows: 2,
      failedRows: [1],
    });

    const sellers = await sellersRepository.list({ page: 0, limit: 1 });
    expect(sellers).toEqual(
      expect.arrayContaining([expect.objectContaining(seller)]),
    );
  });
});
