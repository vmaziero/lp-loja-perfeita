import React from "react";
import logoGrey from '../../assets/loja-perfeita-logo-grey.png';
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  Logo,
  FooterColumnOne
} from "./FooterStyled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumnOne>
          <img src={logoGrey} alt="Logo Pointer" />
        </FooterColumnOne>

        <FooterColumn>
          <FooterTitle>Nossas redes</FooterTitle>
          <FooterLink href="https://www.lojaperfeita.com">Blog Loja Perfeita</FooterLink>
          <FooterLink href="https://www.instagram.com/pointer.revestimentos">Instagram</FooterLink>
          <FooterLink href="https://www.youtube.com/@lojaperfeitapointer">YouTube</FooterLink>
          <FooterLink href="https://whatsapp.com/channel/0029VakaH93DOQIdigRr0S0N">Canal WhatsApp</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Precisa de ajuda?</FooterTitle>
          <FooterLink href="https://www.pointer.com.br/">Site Oficial Pointer</FooterLink>
          <FooterLink href="https://wa.me/558281238416">Atendimento via WhatsApp</FooterLink>
          <FooterLink href="https://docs.google.com/document/d/1Fy9RKm3tmgWRHi1E3Ys_UijcKzGcTznD1XvoQTbSYw8/edit?tab=t.0">Regulamento da campanha</FooterLink>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
