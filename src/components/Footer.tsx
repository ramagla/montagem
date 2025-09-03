// src/components/Footer.tsx
import styled from "styled-components";

const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  background: ${({ theme }) => (theme as any).colors.card};
  font-size: 14px;
  opacity: 0.95;
  padding: 20px 0;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 8px;

  /* MOBILE: centraliza tudo e empilha */
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 8px;
  border-top: 1px dashed ${({ theme }) => (theme as any).colors.border};

  /* MOBILE: centraliza e empilha */
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 8px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  /* desktop: à esquerda por padrão; mobile: centraliza */
  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    color: inherit;
    font-weight: 600;
  }
  a:hover {
    border-color: ${({ theme }) => (theme as any).colors.border};
    background: rgba(0, 0, 0, 0.02);
  }
`;

const BtnTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  /* MOBILE: mantém centralizado junto do TopRow */
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const Muted = styled.small`
  color: #6c757d;
`;

const AddressBlock = styled.address`
  margin: 0;

  /* no desktop pode ficar à direita; no mobile centraliza */
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <Wrap aria-label="Rodapé do site">
      <div className="container">
        {/* Navegação rápida */}
        <TopRow>
          <Nav aria-label="Links rápidos do rodapé">
            <a href="#servicos">Serviços</a>
            <a href="#setores">Setores</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#processo">Processo</a>
            <a href="#qualidade">Qualidade</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#contato">Contato</a>
          </Nav>

          <BtnTop href="#hero" aria-label="Voltar ao início da página">
            <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
            Início
          </BtnTop>
        </TopRow>

        {/* Direitos autorais e endereço */}
        <BottomRow>
          <div>
            © {new Date().getFullYear()}{" "}
            <strong>
              Bra<span style={{ textTransform: "lowercase" }}>s</span>-Mol Molas e Estampados Ltda
            </strong>{" "}
            •{" "}
            <a href="https://www.brasmol.com.br" target="_blank" rel="noopener noreferrer">
              www.brasmol.com.br
            </a>
          </div>

          <AddressBlock itemScope itemType="https://schema.org/PostalAddress">
            <Muted>
              <span itemProp="streetAddress">Estrada Bonsucesso, 1953</span> •{" "}
              <span itemProp="addressLocality">Itaquaquecetuba</span> •{" "}
              <span itemProp="addressRegion">SP</span> •{" "}
              <span itemProp="addressCountry">BR</span>
            </Muted>
          </AddressBlock>
        </BottomRow>
      </div>
    </Wrap>
  );
}
