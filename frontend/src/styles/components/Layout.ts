import styled from 'styled-components';

export const Layout = styled.div`
  max-width: 900px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 80px auto;

  button {
    border: 2px solid gray;
    color: #5A5A5A;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    opacity: 1;
    margin: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
