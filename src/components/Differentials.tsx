import styled from "styled-components";
const Box = styled.section` margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW}; padding: 48px 16px; `;
const Title = styled.h2` margin: 0 0 10px; `;
const Grid = styled.div` display: grid; gap: 14px; grid-template-columns: repeat(3,1fr); @media (max-width:980px){ grid-template-columns: 1fr; }`;
const Card = styled.div`
  background: ${({theme}) => (theme as any).colors.card};
  border: 1px solid ${({theme}) => (theme as any).colors.border};
  padding: 18px; border-radius: ${({theme}) => (theme as any).radius.lg};
  box-shadow: ${({theme}) => (theme as any).shadow.sm};
  h3{ margin: 0 0 6px; font-size: 18px; }
  p{ margin: 0; opacity: .85; font-size: 14px; }
`;
export default function Differentials(){
  return (
    <Box id="diferenciais">
      <Title>Diferenciais da Bras-Mol</Title>
      <Grid>
        <Card><h3>Entrega rápida</h3><p>Prazo e flexibilidade para manter sua linha sem atrasos.</p></Card>
        <Card><h3>Qualidade garantida</h3><p>SGQ robusto, rastreabilidade e foco em zero defeitos.</p></Card>
        <Card><h3>Processo padronizado</h3><p>Instruções visuais, poka-yoke e registros por lote.</p></Card>
        <Card><h3>Soluções integradas</h3><p>Da peça estampada ao subconjunto montado.</p></Card>
        <Card><h3>Atendimento técnico</h3><p>Engenharia de produto e melhoria contínua.</p></Card>
        <Card><h3>Escalabilidade</h3><p>Capacidade produtiva para picos e sazonalidade.</p></Card>
      </Grid>
    </Box>
  );
}
