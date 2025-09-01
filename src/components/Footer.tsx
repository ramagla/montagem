import styled from "styled-components";
const Wrap = styled.footer`
  border-top: 1px solid ${({theme}) => (theme as any).colors.border};
  background: ${({theme}) => (theme as any).colors.card};
`;
const Inner = styled.div`
  margin: 0 auto; max-width: ${({theme}) => (theme as any).layout.maxW};
  padding: 22px 16px; font-size: 14px; opacity: .9;
  display: flex; justify-content: space-between; gap: 10px;
  @media (max-width: 780px){ flex-direction: column; }
`;
export default function Footer(){
  return (
    <Wrap>
      <Inner>
        <div>© {new Date().getFullYear()} Bras-Mol Molas & Estampados</div>
        <div>Itaquaquecetuba • SP • Brasil</div>
      </Inner>
    </Wrap>
  );
}
