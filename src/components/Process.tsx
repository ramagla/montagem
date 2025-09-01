import styled from "styled-components";
const Wrap = styled.section` background:#fff; border-top:1px solid ${({theme}) => (theme as any).colors.border}; `;
const Inner = styled.div` margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW}; padding: 48px 16px; `;
const Title = styled.h2` margin: 0 0 10px; `;
const Steps = styled.ol` margin: 16px 0 0; padding-left: 18px; line-height: 1.8; `;
export default function Process(){
  return (
    <Wrap id="processo">
      <Inner>
        <Title>Como trabalhamos</Title>
        <Steps>
          <li>Briefing técnico e requisitos (qualidade, embalagem, rastreio).</li>
          <li>Definição do processo e instruções com amostra padrão.</li>
          <li>Planejamento de produção e logística de insumos.</li>
          <li>Montagem, inspeção e testes conforme plano de controle.</li>
          <li>Etiquetagem, embalagem e expedição com documentação.</li>
        </Steps>
      </Inner>
    </Wrap>
  );
}
