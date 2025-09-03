// src/components/Services.tsx
import styled from "styled-components";

const Wrap = styled.section`
  background: #fff;
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 60px 0;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 48px 0;
  }
`;

const Head = styled.header`
  display: grid; gap: 6px; margin-bottom: 20px;

  h2 {
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 800;
    margin: 0;
  }
  p {
    margin: 0; opacity: .85;
  }
`;

const BadgeRow = styled.div`
  display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end;
`;

const IconCircle = styled.div`
  width: 48px; height: 48px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 999px; background: #f8f9fa;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
`;

const Card = styled.article`
  height: 100%;
  border: 1px solid ${({ theme }) => (theme as any).colors.border};
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.06);
  background: #fff;
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

const CardBody = styled.div`
  padding: 18px 18px 16px;
`;

const Name = styled.h3`
  font-size: 18px; margin: 10px 0 8px; font-weight: 700;
`;

const Desc = styled.p`
  margin: 0 0 12px; color: #6c757d;
`;

const Bullets = styled.ul`
  margin: 0; padding-left: 0; list-style: none; color: #6c757d;
  li { display: flex; align-items: center; gap: 8px; }
`;

const Secondary = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  small { color: #6c757d; }

  @media (max-width: 768px) {
    flex-direction: column; /* empilha */
    align-items: center;    /* centraliza conteúdo */
    text-align: center;     /* centraliza texto */
  }
`;


export default function Services() {
  return (
    <Wrap id="servicos" aria-labelledby="servicos-title">
      <div className="container">

        {/* Cabeçalho */}
        <div className="row align-items-end g-3 mb-3">
          <div className="col-md-8">
            <Head>
              <span className="visually-hidden" id="servicos-title">Serviços</span>
              <h2>Serviços de montagem industrial terceirizada</h2>
<p>
  Especialistas em <strong>montagem terceirizada de subconjuntos metálicos e plásticos</strong> e
  kits mecânicos, com padronização de processos, rastreabilidade completa e registros de qualidade auditáveis.
</p>


            </Head>
          </div>
          <div className="col-md-4">
            <BadgeRow>
              <span className="badge text-bg-light border">Rastreabilidade</span>
              <span className="badge text-bg-light border">Teste funcional</span>
              <span className="badge text-bg-light border">Embalagem final</span>
            </BadgeRow>
          </div>
        </div>

        {/* Grid de serviços (cards) */}
        <div className="row g-4" role="list">
          <div className="col-md-6 col-lg-3" role="listitem">
            <Card itemScope itemType="https://schema.org/Service">
              <CardBody>
                <IconCircle aria-hidden="true" className="mb-3">
                  <i className="bi bi-tools fs-5"></i>
                </IconCircle>
                <Name itemProp="name">Fixação &amp; Montagem</Name>
                <Desc itemProp="description">
                  Crimpagem, rebitagem, parafusos e fixadores com controle de sequência.
                </Desc>
                <Bullets className="small">
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Poka-yoke</li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Torque/força padrão</li>
                </Bullets>
              </CardBody>
            </Card>
          </div>

          <div className="col-md-6 col-lg-3" role="listitem">
            <Card itemScope itemType="https://schema.org/Service">
              <CardBody>
                <IconCircle aria-hidden="true" className="mb-3">
  <i className="bi bi-nut fs-5"></i>
</IconCircle>
<Name itemProp="name">Insertos</Name>
<Desc itemProp="description">
  Aplicação de insertos conforme especificação técnica (porca-rebite, roscas, etc.).
</Desc>
<Bullets className="small">
  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Padronização visual</li>
  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Teste de fixação</li>
</Bullets>

              </CardBody>
            </Card>
          </div>

          <div className="col-md-6 col-lg-3" role="listitem">
            <Card itemScope itemType="https://schema.org/Service">
              <CardBody>
                <IconCircle aria-hidden="true" className="mb-3">
                  <i className="bi bi-clipboard2-check fs-5"></i>
                </IconCircle>
                <Name itemProp="name">Inspeção &amp; Testes</Name>
                <Desc itemProp="description">
                  Teste funcional e dimensional com registros por lote e amostra.
                </Desc>
               <Bullets className="small">
  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Plano de controle</li>
  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Rastreabilidade</li>
  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Inspeções dimensionais</li>
  <li>
    <i className="bi bi-check2-circle" aria-hidden="true"></i>
    Instrumentos calibrados RBC: micrômetros, paquímetros, traçador de altura,
    durômetro e microdurômetro
  </li>
  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Ensaios de resistência à tração</li>
</Bullets>

              </CardBody>
            </Card>
          </div>

          <div className="col-md-6 col-lg-3" role="listitem">
            <Card itemScope itemType="https://schema.org/Service">
              <CardBody>
                <IconCircle aria-hidden="true" className="mb-3">
                  <i className="bi bi-box-seam fs-5"></i>
                </IconCircle>
                <Name itemProp="name">Embalagem &amp; Identificação</Name>
                <Desc itemProp="description">
                  Etiquetagem, embalagem final e identificação conforme cliente.
                </Desc>
                <Bullets className="small">
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Lote/cliente</li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Documentos de envio</li>
                </Bullets>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Chamada secundária */}
        <Secondary>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-info-circle" aria-hidden="true"></i>
            <small>Processos padronizados, instruções visuais e registros auditáveis.</small>
          </div>
          <a
  href="#contato"
  className="btn"
  style={{ background: "#0e4a7b", color: "#fff", borderColor: "transparent" }}
>
  <i className="bi bi-envelope-fill me-1" aria-hidden="true"></i>
  Contato
</a>

        </Secondary>
      </div>
    </Wrap>
  );
}
