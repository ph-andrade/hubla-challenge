import React from 'react'

import { Container } from '../styles/components/Table'

const TransactionTable: React.FC = () => {
  return (
    <Container>
       <table >
          <tr>
            <th>data</th>
            <th>tipo</th>
            <th>produto</th>
            <th>valor</th>
          </tr>
          <tr>
            <td>2022/02/20</td>
            <td>Sell</td>
            <td>CURSO DE DEV</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>2022/02/20</td>
            <td>Sell</td>
            <td>CURSO DE DEV</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>2022/02/20</td>
            <td>Sell</td>
            <td>CURSO DE DEV</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>2022/02/20</td>
            <td>Sell</td>
            <td>CURSO DE DEV</td>
            <td>2000</td>
          </tr>
         
        </table>
    </Container>
  )
}

export default TransactionTable