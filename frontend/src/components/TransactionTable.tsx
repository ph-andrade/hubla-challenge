import { useSellersProvider } from '@/hooks/useSellers';
import React from 'react'

import { Table } from '../styles/components/Table'

const TransactionTable: React.FC = () => {
  const { selectedSeller } = useSellersProvider();

  return (
    <Table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Product</th>
          <th>Value</th>
        </tr>
        {
          !!selectedSeller?.transactions.length && 
            selectedSeller?.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.product}</td>
              <td>{transaction.value}</td>  
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default TransactionTable