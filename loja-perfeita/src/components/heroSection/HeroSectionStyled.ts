import styled from 'styled-components';

export const HeroWrapper = styled.section<{ bg?: string }>`
  background: ${({ bg }) =>
    bg
      ? `url(${bg}), url('../../assets/background-hero.png'), linear-gradient(180deg, rgba(234,234,234,1) 0%, rgba(164,164,164,1) 75%)`
      : `url('../../assets/background-hero.png'), linear-gradient(180deg, rgba(234,234,234,1) 0%, rgba(164,164,164,1) 75%)`};

  background-repeat: repeat-x;
  background-size: contain;
  background-position: top;
  position: relative;
  z-index: 0;
  justify-items: center;
  height: fit-content;

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: auto;
  overflow: hidden;
  order: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    order: 2;
    background-position: bottom;
    margin-bottom: 0;

    img {
      padding: 0 15px;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block; 
  }
`;

export const Content = styled.div`
  h1 {
    font-size: clamp(28px, 4vw, 3.2rem);
    margin-bottom: 20px;
    line-height: 1.2;
    color: #F58220;
    font-weight: bold;
  }

  p {
    font-size: clamp(16px, 2.2vw, 20px);
    margin-bottom: 30px;
    color: #fff;
    font-weight: bold;
  }

  order: 2;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    order: 1;
    padding: 0 30px;
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
    background: rgb(209, 107, 17);
    color: #fff;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 20px auto 0 auto;
  }
`;
