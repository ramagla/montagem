import styled from "styled-components";
const Box = styled.section` background:#fff; border-top:1px solid ${({theme}) => (theme as any).colors.border}; `;
const Inner = styled.div` margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW}; padding: 48px 16px; `;
const Title = styled.h2` margin: 0 0 10px; `;
const Grid = styled.div` display:grid; gap:14px; grid-template-columns: repeat(3,1fr); @media (max-width:980px){ grid-template-columns:1fr; }`;
const Card = styled.div`
  background: ${({theme}) => (theme as any).colors.card};
  border: 1px solid ${({theme}) => (theme as any).colors.border};
  padding: 18px; border-radius: ${({theme}) => (theme as any).radius.lg};
  h3{ margin:0 0 6px; font-size:16px; }
  p{ margin:0; opacity:.85; font-size:14px; }
`;
export default function Portfolio(){
  return (
    <Box>
      <Inner>
        <Title>Portfólio (exemplos)</Title>
        <Grid>
          <Card><h3>Conjunto metálico</h3><p>Subconjunto com crimpagem e teste funcional.</p></Card>
          <Card><h3>Conjunto plástico</h3><p>Montagem com adesivo técnico e inspeção visual.</p></Card>
          <Card><h3>Kit mecânico</h3><p>Parafusos, arruelas e embalagem final identificada.</p></Card>
        </Grid>
      </Inner>
    </Box>
  );
}
