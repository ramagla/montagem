// src/components/Portfolio.tsx
import styled from "styled-components";
import { useMemo } from "react";

const Box = styled.section`
  background: #fff;
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 60px 16px;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 48px 16px;
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
    opacity: .95;
  }
`;

const Card = styled.article`
  height: 100%;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,.06);
  padding: 24px;
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

const IconCircle = styled.div`
  width: 60px; height: 60px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 999px;
  background: #f8f9fa;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
`;

const Name = styled.h3`
  font-size: 18px;
  margin: 12px 0 8px;
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: 0.95rem;
`;

export default function Portfolio() {
  const items = [
    { title: "Conjunto metálico", desc: "Subconjunto com crimpagem e teste funcional.", icon: "bi-gear-wide-connected" },
    { title: "Conjunto plástico", desc: "Montagem com adesivo técnico e inspeção visual.", icon: "bi-boxes" },
    { title: "Kit mecânico", desc: "Parafusos, arruelas e embalagem final identificada.", icon: "bi-nut" },
  ];

  // JSON-LD como ItemList para reforçar SEO da seção
  const listJsonLd = useMemo(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Portfólio de subconjuntos (exemplos)",
      "itemListElement": items.map((it, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": it.title,
        "description": it.desc,
      })),
    };
    return JSON.stringify(ld);
  }, []);

  return (
    <Box id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        {/* Cabeçalho */}
        <Head>
          <h2 id="portfolio-title">Portfólio (exemplos)</h2>
<p>
  Exemplos de <strong>subconjuntos metálicos, plásticos e kits mecânicos</strong>
  já desenvolvidos para clientes de diferentes setores industriais.
</p>
        </Head>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: listJsonLd }} />

        {/* Cards */}
        <div className="row g-4" role="list">
          {items.map((item, i) => (
            <div className="col-md-6 col-lg-4" role="listitem" key={i}>
              <Card tabIndex={0}>
                <IconCircle aria-hidden="true" className="mb-3">
                  <i className={`bi ${item.icon} fs-3`} />
                </IconCircle>
                <Name>{item.title}</Name>
                <Desc className="small">{item.desc}</Desc>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
