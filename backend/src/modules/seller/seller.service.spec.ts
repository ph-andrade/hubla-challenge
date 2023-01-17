import { Test, TestingModule } from '@nestjs/testing';
import { SellersRepositoryInMemory } from '../../repositories/in-memory/SellersRepositoryInMemory';
import { SellersRepository } from '../../repositories/SellersRepository';
import { SellerService } from './seller.service';

describe('SellerService', () => {
  let service: SellerService;
  let sellersRepository: SellersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SellersRepositoryInMemory,
        {
          provide: SellerService,
          useFactory: (sellersRepository: SellersRepository) => {
            return new SellerService(sellersRepository);
          },
          inject: [SellersRepositoryInMemory],
        },
      ],
    }).compile();

    service = module.get<SellerService>(SellerService);
    sellersRepository = module.get<SellersRepositoryInMemory>(
      SellersRepositoryInMemory,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to list the sellers', async () => {
    const name = 'Name Test';
    await sellersRepository.create(name);
    const sellers = await service.list({ page: 0, limit: 1 });

    expect(sellers).toEqual(
      expect.arrayContaining([expect.objectContaining({ name })]),
    );
  });

  it('should be able to paginate the sellers', async () => {
    const name1 = 'Name Test';
    const name2 = 'Name Test 2';
    await sellersRepository.create(name1);
    await sellersRepository.create(name2);

    const sellers1 = await service.list({ page: 0, limit: 1 });
    expect(sellers1).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: name1 })]),
    );
    const sellers2 = await service.list({ page: 1, limit: 1 });
    expect(sellers2).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: name2 })]),
    );
  });
});
