import { Sellers } from "@/interfaces/Sellers";
import { useState } from "react";


export function SellersProvider() {
  const [page, setPage] = useState<number>(0);
  const [sellers, setSellers] = useState<Sellers[]>([]);

  return {
    sellers,
    setSellers,
    page,
    setPage
  }
}

