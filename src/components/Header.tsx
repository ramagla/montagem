// src/components/Header.tsx
import { useEffect } from "react";
import styled from "styled-components";

const Bar = styled.header`
  position: sticky; top: 0; z-index: 20;
  background: ${({theme}) => (theme as any).colors.card};
  border-bottom: 1px solid ${({theme}) => (theme as any).colors.border};
`;

const Row = styled.div`
  margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW};
  display: flex; align-items: center; justify-content: space-between;
  height: 68px; padding: 0 16px;
`;

const Brand = styled.div`
  display: flex; align-items: center; gap: 10px;
`;

const Nav = styled.nav`
  display: flex; gap: 8px; align-items: center;

  :where(.nav-link){
    font-weight: 600; opacity: .95;
    border-radius: 12px;
    display: flex; align-items: center; gap: 6px;
  }
  :where(.nav-link.active){
    background: ${({theme}) => (theme as any).colors.brand};
    color: #fff;
  }
`;

const IDS_SECOES = [
  "servicos",
  "setores",
  "diferenciais",
  "processo",
  "qualidade",
  "contato",
] as const;

export default function Header(){
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link"));
    const sections = IDS_SECOES
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    function setActiveByHash() {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${hash}`));
    }

    function onScroll() {
      const y = window.scrollY + 110;
      for (const sec of sections) {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
          const href = `#${sec.id}`;
          links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === href));
          break;
        }
      }
    }

    setActiveByHash();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", setActiveByHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", setActiveByHash);
    };
  }, []);

  return (
    <Bar>
      <Row>
        <Brand>
          <img src="/logol.png" alt="Bras-Mol" height="40" />
        </Brand>

        <Nav className="nav nav-pills">
          <a className="nav-link" href="#servicos">
            <i className="bi bi-gear-fill"></i> Serviços
          </a>
          <a className="nav-link" href="#setores">
            <i className="bi bi-building"></i> Setores
          </a>
          <a className="nav-link" href="#diferenciais">
            <i className="bi bi-star-fill"></i> Diferenciais
          </a>
          <a className="nav-link" href="#processo">
            <i className="bi bi-diagram-3-fill"></i> Processo
          </a>
          <a className="nav-link" href="#qualidade">
            <i className="bi bi-patch-check-fill"></i> Qualidade
          </a>
          <a className="nav-link" href="#contato">
            <i className="bi bi-envelope-fill"></i> Contato
          </a>
        </Nav>
      </Row>
    </Bar>
  );
}
