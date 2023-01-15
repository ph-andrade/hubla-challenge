import { Controller, Get, Query } from '@nestjs/common';
import { QueryTransformPipe } from 'src/utils/QueryTransformPipe';
import { ListSellersDTO } from './seller.dto';
import { SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get()
  async list(@Query(new QueryTransformPipe()) query: ListSellersDTO) {
    return this.sellerService.list(query);
  }
}
