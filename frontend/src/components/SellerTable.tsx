import { Sellers } from '@/interfaces/Sellers';
import api from '@/services/api';
import React, { useEffect, useState } from 'react'

import { Table } from '../styles/components/Table'

const SellerTable: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [sellers, setSellers] = useState<Sellers[]>([]);
  const limit = 20;

  useEffect(() => {
    async function loadSellers() {
      const response = await api.get('/seller', { params: { page: 0, limit } });

      if(response.status === 200) {
        setSellers(response.data);
        console.log(response.data, sellers);
      }
    }
    
    loadSellers();

  }, [page]);

  return (
    <Table selectable={true}>
      <tbody>
        <tr >
          <th>Seller</th>
          <th>Balance</th>
        </tr>
        {sellers.map((seller) => (
          <tr key={seller.id}>
            <td>{seller.name}</td>
            <td>{
              seller.transactions.reduce((sum, transaction) => {
                const { type, value } = transaction;
                if(type === 3) {
                  return sum - value;
                }
                return sum + value;
              }, 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default SellerTable