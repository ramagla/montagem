// src/components/Sectors.tsx
import styled from "styled-components";

const Wrap = styled.section`
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

export default function Sectors() {
  const sectors = [
  {
    icon: "bi-gear-wide-connected",
    title: "Automotivo/Aftermarket",
    desc: "Subconjuntos e kits para reposição/acessórios, com rastreabilidade e requisitos IATF.",
  },
  {
    icon: "bi-house-gear",
    title: "Linha Branca",
    desc: "Conjuntos para eletrodomésticos com alto volume de produção.",
  },
  {
    icon: "bi-tv",
    title: "Linha Marron",
    desc: "Eletrônicos/áudio-vídeo; montagem com testes funcionais e visuais.",
  },
  {
    icon: "bi-tree",
    title: "Agrícola",
    desc: "Componentes e subconjuntos para máquinas e implementos agrícolas.",
  },
  {
    icon: "bi-cpu",
    title: "Máquinas e Equipamentos",
    desc: "Montagem de subconjuntos industriais conforme projeto técnico.",
  },
  {
    icon: "bi-buildings",
    title: "Indústrias em Geral",
    desc: "Soluções sob medida mantendo o padrão de qualidade Bras-Mol.",
  },
];


  return (
    <Wrap id="setores" aria-labelledby="setores-title">
      <div className="container">
        {/* Cabeçalho */}
        <Head>
          <h2 id="setores-title">Setores atendidos</h2>
<p>
  Atuamos em <strong>Automotivo/Aftermarket</strong>, <strong>Linha Branca</strong>,
  <strong>Linha Marron</strong>, <strong>Agrícola</strong>, <strong>Máquinas e Equipamentos</strong> e
  <strong>Indústrias em Geral</strong>, oferecendo soluções de montagem sob medida,
  com conformidade e rastreabilidade.
</p>

        </Head>

        {/* Grid de setores */}
<div className="row g-4 justify-content-center" role="list">
          {sectors.map((s, i) => (
            <div className="col-md-6 col-lg-3" role="listitem" key={i}>
              <Card tabIndex={0}>
                <IconCircle aria-hidden="true" className="mb-3">
                  <i className={`bi ${s.icon} fs-3`} />
                </IconCircle>
                <Name>{s.title}</Name>
                <Desc className="small">{s.desc}</Desc>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}
