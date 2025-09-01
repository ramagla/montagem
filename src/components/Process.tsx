// src/components/Process.tsx
import styled from "styled-components";

const Wrap = styled.section`
  background: #fff;
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 60px 0;
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

  return (
    <Wrap id="processo">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h1 mb-3">Como trabalhamos</h2>
          <p className="text-muted">
            Um processo estruturado para garantir qualidade, rastreabilidade e prazo.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className={`bi ${s.icon} fs-3`}></i>
                </div>
                <h3 className="h5">{i + 1}. {s.title}</h3>
                <p className="text-muted small mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}
