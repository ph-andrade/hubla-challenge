import {
  Controller,
  FileTypeValidator,
  HttpCode,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('/import')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  async import(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 4200000 }),
          new FileTypeValidator({ fileType: 'text/plain' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.transactionService.import(file.buffer.toString());
  }
}
