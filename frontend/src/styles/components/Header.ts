import styled from 'styled-components';

export const Container = styled.header`
  height: 10vh;
  display: flex;
  padding: 50px;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;

  img {
    align-self: center;
    max-width: 15vh;
  }
`;
