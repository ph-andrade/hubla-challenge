import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  img {
    align-self: center;
    max-width: 250px;
    background-color: ${props => props.theme.colors.primary};
  }
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
  p {
    margin-top: 24px;
    font-size: 34px;
    line-height: 32px;
  }
  td, th {
    font-size: 20px;
    border: 1px solid #ddd;
    padding: 8px;
  }
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: space-evenly;  
`