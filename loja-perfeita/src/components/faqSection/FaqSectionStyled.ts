import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 2rem;
 
  @media (max-width: 768px) {
    padding: 0 2rem 4rem 2rem;
  }

`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 3rem;
  color: #F58220;
  margin: 0 0 2.5rem 0;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #555;

  @media (min-width: 768px) {
    margin-right: 50px;
  }

  `;

export const WhatsappButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #F58220;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 23px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #rgb(209, 107, 17);
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
  background-color: #DFDFDF;
  border-radius: 10px;
  margin: 8px 0;
  padding: 1rem 1rem;
`;

export const AccordionTitle = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  text-align: left;
  width: 100%;
  padding: 0;
  color: #333;
  cursor: pointer;
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  font-size: 0.95rem;
  color: #555;
  padding-top: 0.5rem;
`;
