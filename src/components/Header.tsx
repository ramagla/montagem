// src/components/Header.tsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Bar = styled.header`
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1030;
  background: ${({theme}) => (theme as any).colors.card};
  border-bottom: 1px solid ${({theme}) => (theme as any).colors.border};
`;

const Row = styled.div`
  margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW};
  display: flex; align-items: center; justify-content: space-between;
  height: 88px; /* altura total do header */
  padding: 0 16px;
`;

const Brand = styled(Link)`
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
    position: absolute; top: 88px; left: 0; right: 0; /* acompanha altura do header */
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
    background: #0e4a7b; /* azul escuro */
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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Coleta links do menu e seções do documento
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link"));
    const sections = IDS_SECOES
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    // Função util: define .active baseado no "slug" da seção
    const setActiveBySlug = (slug?: string) => {
      links.forEach(a => {
        const ls = a.getAttribute("data-slug");
        a.classList.toggle("active", !!slug && ls === slug);
      });
    };

    // Ativa por hash legado (#secao) OU por rota amigável (/secao)
    function setActiveFromLocation() {
      const slugFromHash = window.location.hash?.replace("#", "");
      if (slugFromHash) return setActiveBySlug(slugFromHash);

      // rota amigável -> /{slug}
      const slugFromPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
      setActiveBySlug(slugFromPath || undefined);
    }

    // Ativa conforme a rolagem (one-page UX)
    function onScroll() {
      const y = window.scrollY + 110; // compensação do header
      for (const sec of sections) {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
          return setActiveBySlug(sec.id);
        }
      }
      // se nenhuma seção estiver na janela, limpa
      setActiveBySlug(undefined);
    }

    function onResize(){
      if (window.innerWidth > 980 && open) setOpen(false);
    }

    // Fecha menu mobile ao clicar em um link
    function onClickClose(e: Event){
      const target = e.target as HTMLElement;
      if (target.closest(".nav-link")) setOpen(false);
    }

    // Inicializa estado ativo
    setActiveFromLocation();
    onScroll();

    // Listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", setActiveFromLocation);
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("click", onClickClose);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", setActiveFromLocation);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onClickClose);
    };
  }, [open, pathname, hash]);

  return (
    <Bar>
      <Row>
        <Brand to="/" aria-label="Bras-Mol - Início">
          <img src="/logol.png" alt="Bras-Mol" height="60" /> {/* logo maior */}
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
              <Link className="nav-link" data-slug="servicos" role="menuitem" to="/servicos">
                <i className="bi bi-gear-fill" aria-hidden="true"></i> Serviços
              </Link>
            </li>
            <li role="none">
              <Link className="nav-link" data-slug="setores" role="menuitem" to="/setores">
                <i className="bi bi-building" aria-hidden="true"></i> Setores
              </Link>
            </li>
            <li role="none">
              <Link className="nav-link" data-slug="diferenciais" role="menuitem" to="/diferenciais">
                <i className="bi bi-star-fill" aria-hidden="true"></i> Diferenciais
              </Link>
            </li>
            <li role="none">
              <Link className="nav-link" data-slug="processo" role="menuitem" to="/processo">
                <i className="bi bi-diagram-3-fill" aria-hidden="true"></i> Processo
              </Link>
            </li>
            <li role="none">
              <Link className="nav-link" data-slug="qualidade" role="menuitem" to="/qualidade">
                <i className="bi bi-patch-check-fill" aria-hidden="true"></i> Qualidade
              </Link>
            </li>
            <li role="none">
              <Link className="nav-link" data-slug="contato" role="menuitem" to="/contato">
                <i className="bi bi-envelope-fill" aria-hidden="true"></i> Contato
              </Link>
            </li>
          </NavList>
        </NavWrap>
      </Row>
    </Bar>
  );
}
