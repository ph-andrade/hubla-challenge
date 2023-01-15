export class TransactionDTO {
  id?: string;
  type: number;
  sellerId?: string;
  sellerName?: string;
  product: string;
  value: number;
  date: Date | string;
}
