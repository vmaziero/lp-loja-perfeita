// src/components/formSection/AnimatedText.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const words = ['premiação', 'reconhecimento', 'prêmios'];

const Wrapper = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  line-height: 1.2;

  span {
    display: inline-block;
    overflow: hidden;
    height: 2rem;
    line-height: 2rem;
    color: #fff;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      Vender bem <br />
      agora é sinônimo de{' '} <br />
      <span>
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute' }}
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </span>
    </Wrapper>
  );
};

export default AnimatedText;
