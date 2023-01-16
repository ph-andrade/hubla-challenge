import { useSellersProvider } from '@/hooks/useSellers';
import api from '@/services/api';
import React, { useEffect } from 'react'

import { Table } from '../styles/components/Table'

const SellerTable: React.FC = () => {
  const { sellers, setSellers, page } = useSellersProvider();

  useEffect(() => {
    async function loadSellers() {
      const response = await api.get('/seller', { params: { page: 0 } });

      if(response.status === 200) {
        setSellers(response.data);
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