import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f5f5f5;
  padding: 2rem 1rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FooterTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #f58220;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #666;
  font-size: 0.95rem;

  &:hover {
    color: #f58220;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f58220;
`;

export const FooterColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-self: center;
  
  @media (min-width: 768px) {
    width: 13%;
  }
`;
