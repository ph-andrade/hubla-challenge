import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

/**
 *
 * Validation function of an object based on a DTO
 *
 * @param dto The DTO object to validate
 * @param obj The object to be validated
 *
 * @example
 * ```ts
 *  await validatorDto(SaleDTO, saleData);
 *
 * ```
 */
export const validatorDto = async <T extends ClassConstructor<any>>(
  dto: T,
  obj: object,
): Promise<boolean> => {
  const objInstance = plainToClass(dto, obj);
  const errors = await validate(objInstance);
  if (errors.length > 0) {
    return false;
  }
  return true;
};
