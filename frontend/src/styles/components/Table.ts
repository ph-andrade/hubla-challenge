import styled from 'styled-components';

export const Table = styled.table<{ selectable?: boolean }>`
  background-color: #f2f2f2;
  color: #191919;

  ${({ selectable }) => selectable && `
    tr:nth-child(even){ background-color: #e2e2e2;  }
    tr:hover { background-color: #ddd; cursor: pointer; }
  `}

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;
