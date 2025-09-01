// src/components/Header.tsx
import { useEffect, useState } from "react";
import styled from "styled-components";

const Bar = styled.header`
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1030;
  background: ${({theme}) => (theme as any).colors.card};
  border-bottom: 1px solid ${({theme}) => (theme as any).colors.border};
`;

const Row = styled.div`
  margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW};
  display: flex; align-items: center; justify-content: space-between;
  height: 68px; padding: 0 16px;
`;

const Brand = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none;
`;

const BurgerBtn = styled.button`
  display: none;
  @media (max-width: 980px){
    display: inline-flex;
    align-items: center; justify-content: center;
    width: 42px; height: 42px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => (theme as any).colors.border};
    background: ${({theme}) => (theme as any).colors.card};
  }
`;

const NavWrap = styled.nav<{open:boolean}>`
  @media (max-width: 980px){
    position: absolute; top: 68px; left: 0; right: 0;
    background: ${({theme}) => (theme as any).colors.card};
    border-bottom: 1px solid ${({theme}) => (theme as any).colors.border};
    transform-origin: top center;
    max-height: ${({open}) => (open ? "600px" : "0")};
    overflow: hidden;
    transition: max-height .25s ease;
  }
`;

const NavList = styled.ul`
  display: flex; gap: 8px; align-items: center; list-style: none; margin: 0; padding: 0;

  @media (max-width: 980px){
    flex-direction: column; align-items: stretch;
    padding: 8px 12px; gap: 6px;
  }

  a.nav-link{
    font-weight: 600; opacity: .95;
    border-radius: 12px;
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 12px; text-decoration: none;

    @media (max-width: 980px){
      padding: 12px; border: 1px solid ${({theme}) => (theme as any).colors.border};
      border-radius: 14px; background: ${({theme}) => (theme as any).colors.card};
    }
  }
  a.nav-link.active{
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
  const [open, setOpen] = useState(false);

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

    function onResize(){
      if (window.innerWidth > 980 && open) setOpen(false);
    }

    // fechar menu ao clicar em um link (mobile)
    function onClickClose(e: Event){
      const target = e.target as HTMLElement;
      if (target.closest(".nav-link")) setOpen(false);
    }

    setActiveByHash();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", setActiveByHash);
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("click", onClickClose);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", setActiveByHash);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onClickClose);
    };
  }, [open]);

  return (
    <Bar>
      <Row>
        <Brand href="#hero" aria-label="Bras-Mol - Início">
          <img src="/logol.png" alt="Bras-Mol" height="40" />
        </Brand>

        <BurgerBtn
          aria-label="Alternar navegação"
          aria-controls="site-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} aria-hidden="true"></i>
        </BurgerBtn>

        <NavWrap open={open} aria-label="Navegação principal">
          <NavList id="site-menu" role="menu">
            <li role="none">
              <a className="nav-link" role="menuitem" href="#servicos">
                <i className="bi bi-gear-fill" aria-hidden="true"></i> Serviços
              </a>
            </li>
            <li role="none">
              <a className="nav-link" role="menuitem" href="#setores">
                <i className="bi bi-building"></i> Setores
              </a>
            </li>
            <li role="none">
              <a className="nav-link" role="menuitem" href="#diferenciais">
                <i className="bi bi-star-fill"></i> Diferenciais
              </a>
            </li>
            <li role="none">
              <a className="nav-link" role="menuitem" href="#processo">
                <i className="bi bi-diagram-3-fill"></i> Processo
              </a>
            </li>
            <li role="none">
              <a className="nav-link" role="menuitem" href="#qualidade">
                <i className="bi bi-patch-check-fill"></i> Qualidade
              </a>
            </li>
            <li role="none">
              <a className="nav-link" role="menuitem" href="#contato">
                <i className="bi bi-envelope-fill"></i> Contato
              </a>
            </li>
          </NavList>
        </NavWrap>
      </Row>
    </Bar>
  );
}
