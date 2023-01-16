import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';

import { Layout } from '../styles/components/Layout'
import Header from '@/components/Header'
import SellerTable from '@/components/SellerTable'
import TransactionTable from '@/components/TransactionTable'
import { Seller } from '@/interfaces/Seller'
import ExportFile from '@/components/ExportFile'
import { Loading } from '@/styles/components/Loading';
import api from '@/services/api';

const Home: React.FC = () => {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [selectedSeller, setSelectedSeller] = useState<Seller>();
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadSellers(currentPage: number) {
    setLoading(true);
    const response = await api.get('/seller', { params: { page: currentPage } });

    if(response.status === 200) {
      setSellers(response.data);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadSellers(page);
  }, [page]);

  return (
    <>
      <Header />
      <Head>
        <title>Hubla</title>
      </Head>
      {loading ? (
        <Loading>
          <AiOutlineLoading3Quarters size={200} />
        </Loading>
      ) : (
        <Layout>
          {
            selectedSeller ?
            (<>
              <TransactionTable 
                selectedSeller={selectedSeller}
                setSelectedSeller={setSelectedSeller}
              />  
            </>) :
            (<>
              <SellerTable 
                sellers={sellers}
                setSelectedSeller={setSelectedSeller}
                page={page}
                setPage={setPage}
                setLoading={setLoading}
              />
              <ExportFile loadSellers={loadSellers}/>
            </>)
          } 
        </Layout>
      )}
    </>
  )
}

export default Home