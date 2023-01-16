import React from 'react'
import Head from 'next/head'

import { Container, TableContainer } from '../styles/pages/Home'
import Header from '@/components/Header'
import SellerTable from '@/components/SellerTable'
import TransactionTable from '@/components/TransactionTable'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Head>
          <title>Homepage</title>
        </Head>
        <TableContainer>
          <SellerTable />
          <TransactionTable />
        </TableContainer>
    
      </Container>
    </>
  )
}

export default Home