import React from 'react'
import Head from 'next/head'

import { Container, TableContainer } from '../styles/pages/Home'
import Header from '@/components/Header'
import SellerTable from '@/components/SellerTable'
import TransactionTable from '@/components/TransactionTable'
import { SellersProvider } from '@/hooks/useSellers'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Head>
          <title>Hubla</title>
        </Head>
        <SellersProvider>
          <TableContainer>
            <SellerTable />
            <TransactionTable />
          </TableContainer>
        </SellersProvider>
      </Container>
    </>
  )
}

export default Home