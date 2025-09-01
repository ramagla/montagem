// src/components/Hero.tsx
import styled from "styled-components";

const Wrap = styled.section`
  background: linear-gradient(180deg, #fff, ${({theme}) => (theme as any).colors.bg});
  border-bottom: 1px solid ${({theme}) => (theme as any).colors.border};
  padding: 60px 0;
`;

export default function Hero() {
  return (
    <Wrap>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Texto */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Montagem terceirizada de componentes com qualidade e prazo.
            </h1>
            <p className="lead mb-4">
              Bras-Mol: velocidade, rastreabilidade e conformidade para seu subconjunto
              chegar pronto à linha de produção.
            </p>
<a href="#contato" className="btn btn-lg px-4 d-inline-flex align-items-center gap-2"
   style={{ background: "var(--brand, #d00)", color: "#fff", borderColor: "transparent" }}>
              <i className="bi bi-envelope-fill"></i> Contato
            </a>
          </div>

          {/* Imagem */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1581093588401-16ec4f6c1b2a?q=80&w=1200"
              className="img-fluid rounded shadow"
              alt="Montagem industrial"
            />
          </div>
        </div>
      </div>
    </Wrap>
  );
}
