import React from 'react'

import { Container } from '../styles/components/Table'

const SellerTable: React.FC = () => {
  return (
    <Container>
       <table >
          <tr>
            <th>Seller</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Teste Name</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>Teste Name</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>Teste Name</td>
            <td>2000</td>
          </tr>
         
        </table>
    </Container>
  )
}

export default SellerTable