// src/components/Hero.tsx
import styled from "styled-components";

const Wrap = styled.section`
  background: linear-gradient(
    180deg,
    #fff,
    ${({ theme }) => (theme as any).colors.bg}
  );
  border-bottom: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 128px 0 60px;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 100px 0 40px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: clamp(28px, 6vw, 42px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: clamp(16px, 3.6vw, 20px);
  margin-bottom: 24px;
  opacity: 0.9;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  background: var(--brand, #d00);
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #a00;
    transform: translateY(-2px);
  }
`;

export default function Hero() {
  return (
    <Wrap id="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Texto */}
          <div className="col-md-6">
            <Title>
              Montagem terceirizada de componentes com qualidade e prazo.
            </Title>
            <Subtitle>
              Bras-Mol garante velocidade, rastreabilidade e conformidade
              para seu subconjunto chegar pronto à linha de produção.
            </Subtitle>
            <CTAButton href="#contato" aria-label="Ir para a seção de contato">
              <i className="bi bi-envelope-fill" aria-hidden="true"></i>
              Contato
            </CTAButton>
          </div>

          {/* Imagem */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1581093588401-16ec4f6c1b2a?q=80&w=1200"
              className="img-fluid rounded shadow"
              alt="Linha de montagem industrial da Bras-Mol"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </Wrap>
  );
}
