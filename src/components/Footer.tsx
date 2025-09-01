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
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 8px;
  border-top: 1px dashed ${({ theme }) => (theme as any).colors.border};
`;

const Nav = styled.nav`
  display: flex; gap: 10px; flex-wrap: wrap;

  a {
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    color: inherit;
  }
  a:hover {
    border-color: ${({ theme }) => (theme as any).colors.border};
    background: rgba(0,0,0,.02);
  }
`;

const BtnTop = styled.a`
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
  text-decoration: none;

  &:hover {
    background: rgba(0,0,0,.03);
  }
`;

const Muted = styled.small`
  color: #6c757d;
`;

export default function Footer() {
  return (
    <Wrap aria-label="Rodapé do site">
      <div className="container">

        <TopRow>
          <Nav aria-label="Links rápidos do rodapé">
            <a href="#servicos">Serviços</a>
            <a href="#setores">Setores</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#processo">Processo</a>
            <a href="#qualidade">Qualidade</a>
            <a href="#contato">Contato</a>
          </Nav>

          <BtnTop href="#hero" aria-label="Voltar ao topo">
            <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
            Topo
          </BtnTop>
        </TopRow>

        <BottomRow>
          <div>© {new Date().getFullYear()} Bras-Mol Molas &amp; Estampados</div>

          <address
            style={{ margin: 0 }}
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <Muted>
              <span itemProp="addressLocality">Itaquaquecetuba</span> •{" "}
              <span itemProp="addressRegion">SP</span> •{" "}
              <span itemProp="addressCountry">BR</span>
            </Muted>
          </address>
        </BottomRow>

      </div>
    </Wrap>
  );
}
