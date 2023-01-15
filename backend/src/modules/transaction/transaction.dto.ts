export class TransactionDTO {
  id?: string;
  type: number;
  sellerId: string;
  product: string;
  value: number;
  date: Date | string;
}
