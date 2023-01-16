import dayjs from 'dayjs';
import { TransactionTableHooks } from '@/interfaces/TransactionTableHooks';
import { OptionContainer } from '@/styles/components/OptionContainer';
import React from 'react'

import { List } from '../styles/components/List'
import WarnNonContent from './WarnNonContent';
import Pagination from './Pagination';

const TransactionTable: React.FC<TransactionTableHooks> = ({
  selectedSeller,
  setSelectedSeller
}) => {

  function formatDate(date: string): string {
    return dayjs(date).format('YYYY/MM/DD HH:mm')
  }
 
  function getTransactionType(type: number) {
    switch (type) {
      case 1:
        return 'producer sale';
      case 2: 
        return 'affiliated sale'
      case 3: 
        return 'paid commission'
      case 4: 
        return 'take commission'
      default:
        return 'unknown'
    }
  }

  return (
    <>
      {selectedSeller?.transactions.length ? (
        <List>
          <div>
            <span style={{width: "150px"}}>Date</span>
            <span style={{width: "150px"}}>Products</span>
            <span>Type</span>
            <span>Value</span>
          </div>
          {selectedSeller?.transactions.map((transaction) => (
              <li key={transaction.id}>
                <span>{formatDate(transaction.date)}</span>
                <span style={{width: "250px"}}>{transaction.product}</span>
                <span>{getTransactionType(transaction.type)}</span>
                <span>{transaction.value}</span>  
              </li>
            ))
          }
       
        </List>
      ): <WarnNonContent />}
      <OptionContainer>
        <button type='button' onClick={() => setSelectedSeller(undefined)}>Back</button>
        <Pagination 
          page={page}
          setPage={setPage}
        />
      </OptionContainer>
    </>
  )
}

export default TransactionTable