export type Sellers = {
  id: string;
  name: string;
  transactions: {
    id: string,
    type: number,
    sellerId: string,
    product: string,
    value: number,
    date: string
  }[]
}
