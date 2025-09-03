// src/components/Quality.tsx
import styled from "styled-components";
import { useMemo } from "react";

const Box = styled.section`
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
  outline: 2px solid #0e4a7b;
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

export default function Quality() {
  const items = [
  { title: "IATF 16949", desc: "Padrões automotivos com foco em qualidade e melhoria contínua.", icon: "bi-patch-check-fill" },
  { title: "Rastreabilidade", desc: "Registros por operação e teste (lote/amostra).", icon: "bi-search" },
  { title: "Documentação", desc: "Instruções visuais, plano de controle e registros auditáveis.", icon: "bi-file-earmark-text" },
  { title: "Boas práticas ISO/IEC 27001", desc: "Controles de segurança da informação aplicados aos processos.", icon: "bi-shield-lock" },
  { title: "Ambiental (ISO 14001)", desc: "Diretrizes para reduzir impactos e gerir aspectos ambientais.", icon: "bi-droplet" },
  { title: "LGPD", desc: "Tratamento responsável de dados pessoais e confidenciais.", icon: "bi-shield-check" },
];



  // JSON-LD como ItemList (reforça SEO do conteúdo da seção)
  const listJsonLd = useMemo(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "ItemList",
"name": "Qualidade, conformidade e boas práticas Bras-Mol",
      "itemListElement": items.map((it, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": it.title,
        "description": it.desc,
      })),
    };
    return JSON.stringify(ld);
}, [items]);

  return (
    <Box id="qualidade" aria-labelledby="qualidade-title">
      <div className="container">
        <Head>
          <h2 id="qualidade-title">Qualidade &amp; Certificações</h2>
<p>
  Confiabilidade assegurada pela <strong>IATF 16949</strong>, com <strong>rastreabilidade de lotes</strong> e
  <strong>documentação de controle</strong> em todas as etapas. Seguimos boas práticas da
  <strong> ISO/IEC 27001</strong>, diretrizes <strong>ambientais (ISO 14001)</strong> e <strong>LGPD</strong>.
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
