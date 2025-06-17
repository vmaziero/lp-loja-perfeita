// src/components/formSection/TestimonialsCarousel.tsx
import { motion, useMotionValue, animate } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Natally Lins',
    role: 'Vendedora',
    text: 'O que define a premiação dos vendedores é incentivo e motivação!',
  },
  {
    name: 'Janielson Soledade do Nascimento',
    role: 'Vendedora',
    text: 'O Loja Perfeita é onde cada escolha inspira mais vendas. A frase que resume a campanha é: ‘Mais resultados’.',
  },
  {
    name: 'Raimundo Nonato Santiago Silva',
    role: 'Vendedor',
    text: 'O programa Loja Perfeita potencializa as vendas com produtos diferenciados e de qualidade, além de nos possibilitar concorrer a premiações.',
  },
  {
    name: 'Thais Aparecida Juca Rodrigues da Silva',
    role: 'Vendedora',
    text: 'O Loja Perfeita da Pointer remete à exclusividade, trazendo a ideia de um lugar único e especial para os vendedores.',
  },
  {
    name: 'Marlene Santos',
    role: 'Vendedora',
    text: 'A palavra que define o Loja Perfeita é confiança!',
  },
  {
    name: 'Maria de Fátima Vasconcelos da Silva Oliveira',
    role: 'Vendedora',
    text: 'O benefício para os vendedores é incentivador!',
  },
];

// Styled Components
const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Track = styled(motion.div)`
  display: flex;
`;

const Card = styled.div`
  flex: 0 0 auto;
  background: #f1f1f1;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  scroll-snap-align: center;
  margin: 0 0.5rem;

  width: calc(100vw - 2rem); // mobile padrão

  @media (min-width: 768px) {
    width: 384px; // valor fixo calculado para desktop
  }

  &:focus {
    outline: 3px solid #f26522;
  }
`;


const useResponsiveCards = () => {
  const [cardsPerView, setCardsPerView] = useState(1);
  useEffect(() => {
    const check = () => {
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return cardsPerView;
};

const TestimonialsCarousel = () => {
  const cardsPerView = useResponsiveCards();
  const total = testimonials.length;
  const duplicated = [...testimonials, ...testimonials, ...testimonials]; 
const itemWidth = typeof window !== 'undefined' && window.innerWidth < 768
  ? window.innerWidth - 32 
  : 384 + 16; 
  const x = useMotionValue(-total * itemWidth);
  const [isDragging, setDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        animate(x, x.get() - itemWidth, { duration: 0.8 });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [x, isDragging, itemWidth]);

  useEffect(() => {
    const loop = () => {
      const min = -itemWidth * total * 2;
      const max = -itemWidth * total;
      const val = x.get();
      if (val <= min) {
        x.set(val + itemWidth * total);
      } else if (val >= 0) {
        x.set(val - itemWidth * total);
      }
      requestAnimationFrame(loop);
    };
    loop();
  }, [x, itemWidth, total]);

  const handlePrev = () => {
    animate(x, x.get() + itemWidth * cardsPerView, { duration: 0.5 });
  };

  const handleNext = () => {
    animate(x, x.get() - itemWidth * cardsPerView, { duration: 0.5 });
  };

  return (
    <CarouselContainer role="region" aria-label="Depoimentos de clientes">

      <Track
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        style={{ x }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setTimeout(() => setDragging(false), 100)}
      >
        {duplicated.map((t, i) => (
          <Card
            key={i}
            role="group"
            tabIndex={0}
            aria-label={`${t.name}, ${t.role}`}
          >
            <p>{t.text}</p>
            <strong>{t.name}</strong><br />
            <small>{t.role}</small>
          </Card>
        ))}
      </Track>
    </CarouselContainer>
  );
};

export default TestimonialsCarousel;
