import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Column,
  Description,
  Row,
  Section,
  Title,
  WhatsappButton
} from './FaqSectionStyled';

const faqItems = [
  {
    question: 'O que é e onde consigo o código de validação?',
    answer:
      'O código de validação (ou token) será gerado e enviado diretamente ao representante comercial Pointer responsável pela sua loja. Esse código é essencial para validar seu cadastro corretamente e liberar seus benefícios dentro do prazo previsto.',
  },
  {
    question: 'Por onde receberei as instruções para acesso a plataforma de prêmios do Loja Perfeita?',
    answer:
      'Após finalizar o seu cadastro, você receberá as orientações de acesso à plataforma de prêmios do Loja Perfeita Pointer pelo seu WhatsApp e e-mail cadastrados na campanha. Fique de olho nos dois canais! 👀📱✉️',
  },
  {
    question: 'Ainda não recebi minhas informações de acesso, qual o motivo?',
    answer:
      'Se você já se cadastrou, mas ainda não recebeu as instruções de acesso, fale com a gente:\n \n📲 WhatsApp: +55 82 8123-8416\n📅 Atendimento de segunda a sexta, das 8h às 11h\n❌ Não atendemos chamadas, apenas mensagens no WhatsApp.',
  },
{
    question: 'Onde posso acessar o regulamento da campanha?',
    answer: (
      <>
        Você encontra todas as regras da campanha de incentivo no regulamento oficial.
        Ler o regulamento é essencial para entender como o programa de incentivo funciona.{' '}
        Acesse aqui:{' '}
        <a
          href="https://docs.google.com/document/d/1Fy9RKm3tmgWRHi1E3Ys_UijcKzGcTznD1XvoQTbSYw8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#d96400', textDecoration: 'none' }}
        >
          REGULAMENTO DA CAMPANHA DE INCENTIVO
        </a>
        .
      </>
    ),
  },
  {
    question: 'Como posso utilizar os meus pontos?',
    answer:
      'A premiação é disponibilizada como pontos que podem ser utilizados na plataforma de prêmios do Loja Perfeita Pointer. Na plataforma, você pode adquirir produtos e serviços como pagamento de boletos, créditos de celular, combustível via Shell Box, entre outros.',
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <Section>
      <Row>
        <Column>
          <Title>
            Ficou com <br /> alguma dúvida?
          </Title>
          <WhatsappButton
            href="https://wa.me/558281238416"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Atendimento via WhatsApp
          </WhatsappButton>
          <Description>
            Em caso de dúvidas ou problemas sobre a plataforma de prêmios do Loja Perfeita Pointer,
            fale com a gente pelo WhatsApp: <strong>+55 82 8123-8416</strong>.
            Nosso atendimento é de segunda a sexta, das 8h às 11h (exceto finais de semana e feriados).
          </Description>
        </Column>
        <Column>
          {faqItems.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionTitle onClick={() => toggleIndex(index)}>
                {item.question}
              </AccordionTitle>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <AccordionContent
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      {typeof item.answer === 'string'
                        ? item.answer.split('\n').map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))
                        : item.answer}
                    </div>
                  </AccordionContent>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Column>
      </Row>
    </Section>
  );
};

export default FaqSection;
