import styled from 'styled-components';

export const Container = styled.table`
  background-color: #f2f2f2;
  color: #191919;
  
  tr:nth-child(even){ background-color: #e2e2e2; }
  tr:hover { background-color: #ddd; }
  
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;
