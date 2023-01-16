import { Seller } from "@/interfaces/Seller";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";

interface SellersProps {
  children: ReactNode;
}

interface SellersContextData {
  sellers: Seller[];
  setSellers: any;
  page: number;
  setPage: any;
}

export const SellersContext = createContext<SellersContextData>(
  {} as SellersContextData
);

export function SellersProvider({ children }: SellersProps) {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [page, setPage] = useState<number>(0);

  return (
    <SellersContext.Provider
      value={{
        sellers,
        setSellers,
        page,
        setPage,
      }}
    >
      {children}
    </SellersContext.Provider>
  );
}

export function useSellersProvider() {
  const context = useContext(SellersContext);

  return context;
}
