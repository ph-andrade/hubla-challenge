import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryTransformPipe } from '../../utils/QueryTransformPipe';
import { ListSellersDTO, SellerDTO } from './seller.dto';
import { SellerService } from './seller.service';

@ApiTags('sellers')
@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @ApiResponse({ status: 200, type: [SellerDTO] })
  @Get()
  async list(@Query(new QueryTransformPipe()) query: ListSellersDTO) {
    return this.sellerService.list(query);
  }
}
