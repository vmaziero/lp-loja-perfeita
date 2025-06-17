import styled from "styled-components";
import iconFirst from "../../assets/1st-icon.png";
import iconSecond from "../../assets/2nd-icon.png";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: -50px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  z-index: 99;
`;


export const FirstRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InfoCard = styled.div`
  width: 90%;
  height: 200px;
  background-color: #F58220;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const TextColumns = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  align-items: center;
  text-align: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0;
  }

`;

export const Description = styled.span`
  font-size: 1.2rem;
  color: #fff;
  flex: 2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SecondRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

export const PrizeCard = styled.div`
  background-color: #58595B;
  border-radius: 12px;
  padding: 2rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  color: #fff;
`;

export const IconFirst = styled.div`
  width: 70px;
  height: 70px;
  margin-top: -65px;
  background-image: url(${iconFirst});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const IconSecond = styled.div`
  width: 70px;
  height: 70px;
  margin-top: -65px;
  background-image: url(${iconSecond});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const CardValue = styled.span`
  font-size: 1.5rem;

  strong {
    font-size: 3rem;
  }

  br {
    display: none;
  }
  
  @media (max-width: 768px) {
    br{
        display: block;
    }
  }
`;

export const CardGroup = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

export const ThirdRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 1rem 2rem;
`;

export const RegulationNote = styled.span`
  font-size: 0.9rem;
  color: #333;
  max-width: 90%;
  line-height: 1.4;
`;

export const RegulationButton = styled.a`
  background-color: #f58220;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 23px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d96e12;
  }
`;

