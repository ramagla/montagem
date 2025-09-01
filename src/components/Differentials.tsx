// src/components/Differentials.tsx
import styled from "styled-components";

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

const IconCircle = styled.div`
  width: 60px; height: 60px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 999px;
  background: #f8f9fa;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
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

export default function Differentials() {
  const diffs = [
    {
      icon: "bi-speedometer2",
      title: "Entrega rápida",
      desc: "Prazo e flexibilidade para manter sua linha sem atrasos."
    },
    {
      icon: "bi-patch-check-fill",
      title: "Qualidade garantida",
      desc: "SGQ robusto, rastreabilidade e foco em zero defeitos."
    },
    {
      icon: "bi-diagram-3",
      title: "Processo padronizado",
      desc: "Instruções visuais, poka-yoke e registros por lote."
    },
    {
      icon: "bi-layers-fill",
      title: "Soluções integradas",
      desc: "Da peça estampada ao subconjunto montado."
    },
    {
      icon: "bi-person-gear",
      title: "Atendimento técnico",
      desc: "Engenharia de produto e melhoria contínua."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Escalabilidade",
      desc: "Capacidade produtiva para picos e sazonalidade."
    },
  ];

  return (
    <Box id="diferenciais" aria-labelledby="diferenciais-title">
      <div className="container">
        {/* Cabeçalho */}
        <Head>
          <h2 id="diferenciais-title">Diferenciais da Bras-Mol</h2>
          <p>O que nos torna a escolha ideal para terceirização de montagem.</p>
        </Head>

        {/* Grid */}
        <div className="row g-4" role="list">
          {diffs.map((d, i) => (
            <div className="col-md-6 col-lg-4" role="listitem" key={i}>
              <Card tabIndex={0}>
                <IconCircle aria-hidden="true" className="mb-3">
                  <i className={`bi ${d.icon} fs-3`} />
                </IconCircle>
                <Name>{d.title}</Name>
                <Desc className="small">{d.desc}</Desc>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
