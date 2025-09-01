// src/components/Quality.tsx
import styled from "styled-components";

const Box = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => (theme as any).layout.maxW};
  padding: 60px 16px;
`;

export default function Quality() {
  const items = [
    {
      title: "ISO 9001",
      desc: "Processos controlados e melhoria contínua.",
      icon: "bi-patch-check-fill",
    },
    {
      title: "Rastreabilidade",
      desc: "Lotes e registros por operação e teste.",
      icon: "bi-search",
    },
    {
      title: "Documentação",
      desc: "Plano de controle, instruções e registros auditáveis.",
      icon: "bi-file-earmark-text",
    },
  ];

  return (
    <Box id="qualidade">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h2 className="h1 mb-3">Qualidade & Certificações</h2>
          <p className="text-muted mb-0">
            Confiabilidade assegurada por certificações e processos robustos.
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
