import styled from 'styled-components';

export const Container = styled.section<{ bg?: string }>`
  background: ${({ bg }) =>
    bg
      ? `url(${bg}), url('../../assets/background-hero.png'), linear-gradient(to right, #f26522, #f4791f)`
      : `url('../../assets/background-hero.png'), linear-gradient(to right, #f26522, #f4791f)`};
  padding: 4rem 2rem;
  align-items: center;
  justify-items: center;
  height: 830px;
  margin: 150px 0;

  @media (max-width: 768px) {
    height: 1150px;
    margin: 0 0 200px 0;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
  max-width: 1200px;
  align-items: center;
  margin-top: -180px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
  `;

export const LeftColumn = styled.div`
  flex: 1;
  padding: 1rem;
  color: white;
  min-width: 300px;
`;

export const RightColumn = styled.div`
  flex: 1;
  padding: 1rem;
  min-width: 300px;
`;

export const CarouselRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;