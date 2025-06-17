import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import TestimonialsCarousel from './TestimonialsCarousel';
import heroBg from '../../assets/background-hero.png';
import {
  Container,
  Row,
  LeftColumn,
  RightColumn,
  CarouselRow,
} from './FormSectionStyled';
import Formulario from '../form/Formulario';

const FormSection: React.FC = () => {
  return (
    <Container
    bg={heroBg}
    as={motion.section} 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y:0 }} 
    transition={{ duration: 1, ease: 'easeOut' }}    >
      <Row>
        <LeftColumn>
          <AnimatedText />
        </LeftColumn>
        <RightColumn>
        <Formulario />
        </RightColumn>
      </Row>
      <CarouselRow>
        <TestimonialsCarousel />
      </CarouselRow>
    </Container>
  );
};

export default FormSection;