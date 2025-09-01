// src/components/Services.tsx
import styled from "styled-components";

const Wrap = styled.section`
  background: #fff;
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 60px 0;
`;

export default function Services() {
  return (
    <Wrap id="servicos">
      <div className="container">
        {/* Cabeçalho */}
        <div className="row align-items-end g-3 mb-4">
          <div className="col-md-8">
            <h2 className="h1 mb-2">Serviços de montagem</h2>
            <p className="text-muted mb-0">
              Montagem terceirizada de <strong>conjuntos metálicos e plásticos</strong> com
              padronização, rastreabilidade e registros de qualidade.
            </p>
          </div>
          <div className="col-md-4 d-flex gap-2 justify-content-md-end">
            <span className="badge text-bg-light border">Rastreabilidade</span>
            <span className="badge text-bg-light border">Teste funcional</span>
            <span className="badge text-bg-light border">Embalagem final</span>
          </div>
        </div>

        {/* Grid de serviços (cards) */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{width:48, height:48}}>
                  <i className="bi bi-tools fs-5"></i>
                </div>
                <h3 className="h5">Fixação & Montagem</h3>
                <p className="text-muted mb-3">
                  Crimpagem, rebitagem, parafusos e fixadores com controle de sequência.
                </p>
                <ul className="list-unstyled small text-muted mb-0">
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Poka-yoke</li>
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Torque/força padrão</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{width:48, height:48}}>
                  <i className="bi bi-droplet-half fs-5"></i>
                </div>
                <h3 className="h5">Adesivos & Insertos</h3>
                <p className="text-muted mb-3">
                  Aplicação de adesivos, fitas e insertos conforme especificação técnica.
                </p>
                <ul className="list-unstyled small text-muted mb-0">
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Tempo de cura</li>
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Padronização visual</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{width:48, height:48}}>
                  <i className="bi bi-clipboard2-check fs-5"></i>
                </div>
                <h3 className="h5">Inspeção & Testes</h3>
                <p className="text-muted mb-3">
                  Teste funcional e dimensional com registros por lote e amostra.
                </p>
                <ul className="list-unstyled small text-muted mb-0">
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Plano de controle</li>
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Rastreabilidade</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light border mb-3" style={{width:48, height:48}}>
                  <i className="bi bi-box-seam fs-5"></i>
                </div>
                <h3 className="h5">Embalagem & Identificação</h3>
                <p className="text-muted mb-3">
                  Etiquetagem, embalagem final e identificação conforme cliente.
                </p>
                <ul className="list-unstyled small text-muted mb-0">
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Lote/cliente</li>
                  <li className="d-flex gap-2"><i className="bi bi-check2-circle"></i> Documentos de envio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Chamada secundária */}
        <div className="mt-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-2 text-muted">
            <i className="bi bi-info-circle"></i>
            <small>
              Processos padronizados, instruções visuais e registros auditáveis.
            </small>
          </div>
          <a href="#contato" className="btn btn-outline-danger">
            <i className="bi bi-envelope-fill me-1"></i> Contato
          </a>
        </div>
      </div>
    </Wrap>
  );
}
