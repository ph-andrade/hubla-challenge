import styled from 'styled-components';

export const List = styled.ul<{ selectable?: boolean }>`
  list-style: none;
  margin: 0;
  
  div {
    border-radius: 8px 8px 0 0;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.theme.colors.primary};
    
    span {
      font-size: 24px;
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ${({ selectable }) => selectable && `
    li:hover { background-color: #ddd; cursor: pointer; }
  `}
  
  li {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;


