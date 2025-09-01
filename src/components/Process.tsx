// src/components/Process.tsx
import styled from "styled-components";
import { useMemo } from "react";

const Wrap = styled.section`
  background: #fff;
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 60px 0;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 48px 0;
  }
`;

const Head = styled.header`
  text-align: center;
  margin-bottom: 28px;

  h2 {
    margin: 0 0 10px;
    font-size: clamp(24px, 4.2vw, 36px);
    font-weight: 800;
    letter-spacing: -0.01em;
  }
  p {
    margin: 0;
    color: #6c757d;
    opacity: 0.95;
  }
`;

const Flow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  overflow-x: auto;
  padding: 6px 8px 12px;
  scroll-snap-type: x mandatory;

  /* suaviliza rolagem em dispositivos que suportam */
  scroll-behavior: smooth;

  /* barra de rolagem discreta */
  &::-webkit-scrollbar { height: 8px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => (theme as any).colors.border};
    border-radius: 4px;
  }

  /* fades laterais para indicar que há mais conteúdo */
  &::before,
  &::after{
    content:"";
    position:absolute; top:0; bottom:0; width:24px;
    pointer-events:none;
  }
  &::before{
    left:0;
    background: linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  &::after{
    right:0;
    background: linear-gradient(270deg, rgba(255,255,255,1), rgba(255,255,255,0));
  }
`;

const Step = styled.article`
  scroll-snap-align: start;
  min-width: 240px;
  background: #fff;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,.05);
  padding: 20px;
  text-align: center;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(0,0,0,.08);
    border-color: rgba(0,0,0,.06);
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => (theme as any).colors.brand || "#d00"};
    outline-offset: 2px;
  }
`;

const IconWrap = styled.div`
  width: 60px; height: 60px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
`;

const Arrow = styled.div`
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px;
  color: ${({ theme }) => (theme as any).colors.brand || "#d00"};
  user-select: none;
`;

export default function Process() {
  const steps = [
    {
      title: "Briefing técnico",
      desc: "Requisitos de qualidade, embalagem e rastreabilidade.",
      icon: "bi-clipboard-check",
    },
    {
      title: "Definição do processo",
      desc: "Instruções e amostra padrão aprovadas.",
      icon: "bi-gear-fill",
    },
    {
      title: "Planejamento",
      desc: "Produção e logística de insumos.",
      icon: "bi-truck",
    },
    {
      title: "Montagem e inspeção",
      desc: "Execução com testes conforme plano de controle.",
      icon: "bi-search-check",
    },
    {
      title: "Expedição",
      desc: "Etiquetagem, embalagem e documentação final.",
      icon: "bi-box-seam",
    },
  ];

  // JSON-LD (HowTo) para SEO
  const howToJsonLd = useMemo(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Como trabalhamos na terceirização de montagem",
      "description": "Processo da Bras-Mol para montagem terceirizada com qualidade, rastreabilidade e prazo.",
      "step": steps.map((s, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": s.title,
        "text": s.desc,
      })),
    };
    return JSON.stringify(ld);
  }, []);

  return (
    <Wrap id="processo" aria-labelledby="processo-title">
      <div className="container">
        <Head>
          <h2 id="processo-title">Como trabalhamos</h2>
          <p>Um processo estruturado para garantir qualidade, rastreabilidade e prazo.</p>
        </Head>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToJsonLd }} />

        <Flow role="list" aria-label="Etapas do processo de montagem">
          {steps.map((s, i) => (
            <div key={i} className="d-flex align-items-center gap-3">
              <Step role="listitem" itemScope itemType="https://schema.org/HowToStep" tabIndex={0}>
                <IconWrap aria-hidden="true">
                  <i className={`bi ${s.icon} fs-3`} />
                </IconWrap>
                <h3 className="h6 fw-bold mb-2" itemProp="name">
                  {i + 1}. {s.title}
                </h3>
                <p className="text-muted small mb-0" itemProp="text">{s.desc}</p>
              </Step>

              {i < steps.length - 1 && (
                <Arrow aria-hidden="true">
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </Arrow>
              )}
            </div>
          ))}
        </Flow>
      </div>
    </Wrap>
  );
}
