import { Seller } from "@/interfaces/Seller";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SellersProps {
  children: ReactNode;
}

interface SellersContextData {
  sellers: Seller[];
  setSellers: Dispatch<SetStateAction<Seller[]>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  selectedSeller: Seller | undefined;
  setSelectedSeller: Dispatch<SetStateAction<Seller | undefined>>;
}

export const SellersContext = createContext<SellersContextData>(
  {} as SellersContextData
);

export function SellersProvider({ children }: SellersProps) {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [selectedSeller, setSelectedSeller] = useState<Seller>();
  const [page, setPage] = useState<number>(0);

  return (
    <SellersContext.Provider
      value={{
        sellers,
        setSellers,
        selectedSeller,
        setSelectedSeller,
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
