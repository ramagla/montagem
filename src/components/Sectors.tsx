// src/components/Sectors.tsx
import styled from "styled-components";

const Wrap = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => (theme as any).layout.maxW};
  padding: 60px 16px;
`;

export default function Sectors() {
  return (
    <Wrap id="setores">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h2 className="h1 mb-3">Setores atendidos</h2>
          <p className="text-muted mb-0">
            Soluções de montagem sob medida para diferentes segmentos da indústria.
          </p>
        </div>

        {/* Grid de setores */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-truck fs-3"></i>
              </div>
              <h3 className="h5">Automotivo</h3>
              <p className="text-muted small mb-0">
                Subconjuntos com rastreabilidade e conformidade com requisitos IATF.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-house-gear fs-3"></i>
              </div>
              <h3 className="h5">Linha Branca</h3>
              <p className="text-muted small mb-0">
                Conjuntos para eletrodomésticos com alto volume de produção.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-cpu fs-3"></i>
              </div>
              <h3 className="h5">Máquinas e Equipamentos</h3>
              <p className="text-muted small mb-0">
                Montagem de subconjuntos industriais conforme projeto técnico.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-buildings fs-3"></i>
              </div>
              <h3 className="h5">Outros</h3>
              <p className="text-muted small mb-0">
                Atendemos indústrias em geral mantendo o padrão de qualidade Bras-Mol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}
