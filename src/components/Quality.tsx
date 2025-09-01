import styled from "styled-components";
const Box = styled.section` margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW}; padding: 48px 16px; `;
const Title = styled.h2` margin: 0 0 10px; `;
const Cards = styled.div` display:grid; gap:14px; grid-template-columns: repeat(3,1fr); @media (max-width:980px){ grid-template-columns:1fr; }`;
const Card = styled.div`
  background: ${({theme}) => (theme as any).colors.card};
  border: 1px solid ${({theme}) => (theme as any).colors.border};
  padding: 18px; border-radius: ${({theme}) => (theme as any).radius.lg};
  box-shadow: ${({theme}) => (theme as any).shadow.sm};
  h3{ margin:0 0 6px; font-size:18px; }
  p{ margin:0; opacity:.85; font-size:14px; }
`;
export default function Quality(){
  return (
    <Box id="qualidade">
      <Title>Qualidade & Certificações</Title>
      <Cards>
        <Card><h3>ISO 9001</h3><p>Processos controlados e melhoria contínua.</p></Card>
        <Card><h3>Rastreabilidade</h3><p>Lotes e registros por operação e teste.</p></Card>
        <Card><h3>Documentação</h3><p>Plano de controle, instruções e registros auditáveis.</p></Card>
      </Cards>
    </Box>
  );
}
