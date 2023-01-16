import { Dispatch, SetStateAction } from "react";
import { Seller } from "./Seller";

export interface SellerTableHooks {
  sellers: Seller[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setSelectedSeller: Dispatch<SetStateAction<Seller | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}