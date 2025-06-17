import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Button, Card, EtapasContainer, EtapasWrapper, IconCircle } from './EtapasCadastroStyled';


const EtapasCadastro: React.FC = () => {
  return (
    <EtapasWrapper>
      <EtapasContainer>
        <Card>
          <IconCircle color="#f4791f">1</IconCircle>
          <p>
            Preencha o formulário com os dados do(s) vendedor(es)
          </p>
          <Button href="#formulario">Ir para o formulário</Button>
        </Card>

        <Card>
          <IconCircle color="#f4791f">2</IconCircle>
          <p>
            Vamos validar as informações <br />
            e em até 4 dias úteis os participantes <br />
            receberão as informações de login
          </p>
        </Card>

        <Card>
          <IconCircle color="#57c93a">
            <FaCheck />
          </IconCircle>
          <p>
            Os valores serão resgatados em <br />
            produtos, vale-compras e pagamentos <br />
            de contas na plataforma de prêmios da Pointer.
          </p>
        </Card>
      </EtapasContainer>
    </EtapasWrapper>
  );
};

export default EtapasCadastro;
