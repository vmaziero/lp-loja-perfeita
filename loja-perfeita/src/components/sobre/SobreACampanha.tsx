import React from 'react';
import { motion } from 'framer-motion';
import { SobreWrapper, ImageContainer, Content, CTAButton } from './SobreACampanhaStyled';
import { ColumnsRow } from '../styled/styled';
import AboutImage from '../../assets/sobre-img.png';

const SobreACampanha: React.FC = () => (
  <SobreWrapper 
  as={motion.section} 
  initial={{ opacity: 0, y: 40 }} 
  animate={{ opacity: 1, y:0 }} 
  transition={{ duration: 1, ease: 'easeOut' }}>
      <ColumnsRow>    
        <ImageContainer>
          <img src={AboutImage} />
        </ImageContainer>

        <Content>
          <h2>Sobre a campanha</h2>
          <p>O Loja Perfeita nasceu como uma campanha e se tornou um Programa de Relacionamento de sucesso, criado para fortalecer parcerias e impulsionar resultados.</p>
          <p>Além de apoiar lojistas no crescimento das suas lojas, o programa valoriza quem faz a diferença no dia a dia: os vendedores! A cada meta alcançada, eles acumulam pontos que podem ser trocados por prêmios em grandes lojas do Brasil.</p>
        </Content>
      </ColumnsRow>
  </SobreWrapper>
);

export default SobreACampanha;