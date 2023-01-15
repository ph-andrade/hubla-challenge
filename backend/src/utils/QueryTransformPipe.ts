import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';

export class QueryTransformPipe implements PipeTransform {
  async transform<T extends ClassConstructor<any>>(
    value: T,
    { metatype }: ArgumentMetadata,
  ) {
    if (!metatype) {
      return value;
    }

    return plainToInstance(metatype, value);
  }
}
