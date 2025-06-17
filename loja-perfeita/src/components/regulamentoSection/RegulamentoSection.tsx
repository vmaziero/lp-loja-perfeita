import React from "react";
import { motion } from "framer-motion";
import {
  SectionContainer,
  FirstRow,
  InfoCard,
  TextColumns,
  Title,
  Description,
  SecondRow,
  PrizeCard,
  IconFirst,
  IconSecond,
  CardTitle,
  CardValue,
  CardGroup,
  ThirdRow,
  RegulationNote,
  RegulationButton
} from "./RegulamentoSectionStyled";

const HowItWorksSection: React.FC = () => {
  return (
    <SectionContainer>
      <FirstRow>
        <InfoCard as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <TextColumns>
            <Title>Como funciona</Title>
            <Description>
              Quando a loja parceira atinge a meta de compras Pointer do programa Loja Perfeita dentro do trimestre vigente, ela indica os 02 vendedores que mais venderam os revestimentos cerâmicos da Pointer.
            </Description>
          </TextColumns>
        </InfoCard>
      </FirstRow>

    <SecondRow>
    <CardGroup>
        <PrizeCard as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
        <IconFirst />
        <CardTitle>1º lugar</CardTitle>
        <CardValue><strong>R$ 350</strong><br /> em pontos*</CardValue>
        </PrizeCard>

        <PrizeCard as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
        <IconSecond />
        <CardTitle>2º lugar</CardTitle>
        <CardValue><strong>R$ 250</strong><br /> em pontos*</CardValue>
        </PrizeCard>
    </CardGroup>
    </SecondRow>

    <ThirdRow as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
        <RegulationNote>
            * Os pontos serão liberados em até 4 dias úteis após o atingimento da meta. Os valores serão resgatados em produtos, vale-compras e pagamentos de contas na plataforma de prêmios da Pointer. A premiação dos vendedores é não-cumulativa, e são dois vendedores contemplados por CNPJ.
        </RegulationNote>
        <RegulationButton href="https://docs.google.com/document/d/1Fy9RKm3tmgWRHi1E3Ys_UijcKzGcTznD1XvoQTbSYw8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            Acessar o regulamento
        </RegulationButton>
    </ThirdRow>

    </SectionContainer>
  );
};

export default HowItWorksSection;
