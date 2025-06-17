import styled from 'styled-components';


export const SobreWrapper = styled.section<{ bg?: string }>`
  ${({ bg }) =>
    bg &&
    `
    background: url(${bg}) center/cover;
  `}
  position: relative;
  padding: 60px 5%;
  margin: 0 auto;
  justify-items: center;
  max-width: 1200px;

  @media (max-width: 400px) {
    padding: 0 5%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: auto;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  h2 {
    font-size: clamp(28px, 4vw, 42px);
    margin-bottom: 20px;
    line-height: 1.2;
    color: #555555;
    font-weight: bold;
  }

  p {
    font-size: clamp(16px, 2.0vw, 18px);
    margin-bottom: 30px;
    color: #555555;
  }
`;

export const CTAButton = styled.button`
  padding: 14px 32px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 21px;
  background: #FFFFFF;
  color: #F58220;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: #F58220;
    color: #fff;
  }
`;