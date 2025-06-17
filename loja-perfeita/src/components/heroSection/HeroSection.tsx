import React from 'react';
import { motion } from 'framer-motion';
import { HeroWrapper, ImageContainer, Content, CTAButton } from './HeroSectionStyled';
import { LogoRow, ColumnsRow } from '../styled/styled';
import heroImage from '../../assets/hero.png';
import heroBg from '../../assets/background-hero.png';
import logoHero from '../../assets/loja-perfeita-logo.png';

const HeroSection: React.FC = () => (
  <HeroWrapper 
  bg={heroBg}
  as={motion.section} 
  initial={{ opacity: 0, y: 40 }} 
  animate={{ opacity: 1, y:0 }} 
  transition={{ duration: 1, ease: 'easeOut' }}>
      <LogoRow>
        <img src={logoHero} />
      </LogoRow>

      <ColumnsRow>    
        <ImageContainer>
          <img src={heroImage} />
        </ImageContainer>

        <Content>
          <h1>Transforme suas vendas em recompensas</h1>
          <p>Conquiste resultados, fortaleça parcerias e transforme vendas em recompensas para sua equipe</p>
          <CTAButton>Saiba mais</CTAButton>
        </Content>
      </ColumnsRow>
  </HeroWrapper>
);

export default HeroSection;