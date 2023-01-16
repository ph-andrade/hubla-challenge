import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '@/components/Header'
import SellerTable from '@/components/SellerTable'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Head>
          <title>Homepage</title>
        </Head>
        <SellerTable />
      </Container>
    </>
  )
}

export default Home