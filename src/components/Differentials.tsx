// src/components/Differentials.tsx
import styled from "styled-components";

const Box = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => (theme as any).layout.maxW};
  padding: 60px 16px;
`;

export default function Differentials() {
  return (
    <Box id="diferenciais">
      <div className="container">
        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <h2 className="h1 mb-3">Diferenciais da Bras-Mol</h2>
          <p className="text-muted mb-0">
            O que nos torna a escolha ideal para terceirização de montagem.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 p-4 text-center">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-speedometer2 fs-3"></i>
              </div>
              <h3 className="h5">Entrega rápida</h3>
              <p className="text-muted small mb-0">
                Prazo e flexibilidade para manter sua linha sem atrasos.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 p-4 text-center">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-patch-check-fill fs-3"></i>
              </div>
              <h3 className="h5">Qualidade garantida</h3>
              <p className="text-muted small mb-0">
                SGQ robusto, rastreabilidade e foco em zero defeitos.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 p-4 text-center">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-diagram-3 fs-3"></i>
              </div>
              <h3 className="h5">Processo padronizado</h3>
              <p className="text-muted small mb-0">
                Instruções visuais, poka-yoke e registros por lote.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 p-4 text-center">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-layers-fill fs-3"></i>
              </div>
              <h3 className="h5">Soluções integradas</h3>
              <p className="text-muted small mb-0">
                Da peça estampada ao subconjunto montado.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 p-4 text-center">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-person-gear fs-3"></i>
              </div>
              <h3 className="h5">Atendimento técnico</h3>
              <p className="text-muted small mb-0">
                Engenharia de produto e melhoria contínua.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 p-4 text-center">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{ width: 60, height: 60 }}>
                <i className="bi bi-graph-up-arrow fs-3"></i>
              </div>
              <h3 className="h5">Escalabilidade</h3>
              <p className="text-muted small mb-0">
                Capacidade produtiva para picos e sazonalidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
