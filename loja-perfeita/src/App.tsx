import React from 'react';
import HeroSection from './components/heroSection/HeroSection';
import RegulamentoSection from './components/regulamentoSection/RegulamentoSection';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle, LpContainer } from './styles/GlobalStyle';
import SobreACampanha from './components/sobre/SobreACampanha';
import Footer from './components/footer/Footer';
import FormSection from './components/formSection/FormSection';
import FaqSection from './components/faqSection/FaqSection';
import EtapasCadastro from './components/etapasCadastro/EtapasCadastro';
import WhatsappIcon from './assets/whatsapp.png';

const App: React.FC = () => {
  return (
    <LpContainer>
      <GlobalStyle />
      <HeroSection />
      <RegulamentoSection />
      <SobreACampanha />
      <EtapasCadastro />
      <FormSection />
      <ToastContainer />
      <FaqSection />
      <Footer />
      <a
        href="https://wa.me/558281238416"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <img
          src={WhatsappIcon}
          alt="Fale conosco no WhatsApp"
          style={{ width: '60px', height: '60px' }}
        />
      </a>
    </LpContainer>
  );
};

export default App;
