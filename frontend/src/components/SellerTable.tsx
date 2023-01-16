import { SellerTableHooks } from '@/interfaces/SellerTableHooks';
import { OptionContainer } from '@/styles/components/OptionContainer';
import React from 'react'

import { List } from '../styles/components/List'
import Pagination from './Pagination';
import WarnNonContent from './WarnNonContent';

const SellerTable: React.FC<SellerTableHooks> = ({
  sellers, 
  setSelectedSeller, 
  page, 
  setPage
}) => {
  return (
    <>
      {sellers.length ? (
        <List selectable={true}>
        <div>
          <span>Name</span>
          <span>Balance</span>
        </div>

        {sellers.map((seller) => (
          <li key={seller.id} onClick={()=> setSelectedSeller(seller)}>
            <span>{seller.name}</span>
            <span>{seller.transactions.reduce((sum, transaction) => {
              const { type, value } = transaction;
                if(type === 3) {
                  return sum - value;
                }
                return sum + value;
              }, 0)}
            </span>
          </li>
        ))}
      </List>
      ): <WarnNonContent />}
      <OptionContainer>
        <Pagination 
          page={page}
          setPage={setPage}
        />
      </OptionContainer>
    </>
  )
}

export default SellerTable