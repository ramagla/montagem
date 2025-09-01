// src/components/Portfolio.tsx
import styled from "styled-components";

const Box = styled.section`
  background: #fff;
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 60px 16px;
`;

export default function Portfolio() {
  const items = [
    {
      title: "Conjunto metálico",
      desc: "Subconjunto com crimpagem e teste funcional.",
      icon: "bi-gear-wide-connected",
    },
    {
      title: "Conjunto plástico",
      desc: "Montagem com adesivo técnico e inspeção visual.",
      icon: "bi-boxes",
    },
    {
      title: "Kit mecânico",
      desc: "Parafusos, arruelas e embalagem final identificada.",
      icon: "bi-nut",
    },
  ];

  return (
    <Box id="portfolio">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h2 className="h1 mb-3">Portfólio (exemplos)</h2>
          <p className="text-muted mb-0">
            Alguns tipos de subconjuntos que já desenvolvemos para clientes em
            diferentes segmentos.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {items.map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className={`bi ${item.icon} fs-3`}></i>
                </div>
                <h3 className="h5">{item.title}</h3>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
