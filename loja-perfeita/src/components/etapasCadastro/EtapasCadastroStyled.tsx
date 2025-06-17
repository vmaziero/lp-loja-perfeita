import styled from 'styled-components';

export const EtapasWrapper = styled.section`
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  background: #fff;
`;

export const EtapasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    &::before {
      content: '';
      position: absolute;
      top: 50px;
      left: 12%;
      right: 12%;
      height: 4px;
      background-color: #f4791f;
      z-index: 0;
    }
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

export const Card = styled.div`
  background-color: #4a4a4a;
  color: white;
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  height: fit-content;

  @media (min-width: 768px) {
    flex: 1;
    margin: 0;
    height: 100%;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const IconCircle = styled.div<{ color: string }>`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.a`
  display: inline-block;
  background-color: #f4791f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  margin-top: 1rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: #f26522;
  }
`;
