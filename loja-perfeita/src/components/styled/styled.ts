import styled from 'styled-components';

export const LogoRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0 20px 0;

  img {
    width: 150px;
    height: auto;
  }
`;

export const ColumnsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
`;


export const Container = styled.div`
  width: 90%;
  background: red;
  min-height: 100vh;
  max-height: 100vh;
`;
