// src/components/ContactCTA.tsx
import { useId, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import styled, { keyframes } from "styled-components";

/* ===================== */
/* Estilos base & helpers */
/* ===================== */

const Box = styled.section`
  padding: 60px 20px;
  position: relative;
  background:
    radial-gradient(1200px 300px at 10% -20%, rgba(0,0,0,0.04), transparent),
    radial-gradient(1000px 300px at 110% 0%, rgba(0,0,0,0.04), transparent);
  scroll-margin-top: 80px;

  @media (max-width: 980px) {
    padding: 40px 16px;
  }
`;

const Header = styled.header`
  display: grid;
  gap: 8px;
  margin-bottom: 20px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px dashed ${({ theme }) => (theme as any).colors?.border || "#e5e7eb"};
  background: ${({ theme }) => (theme as any).colors?.muted || "rgba(0,0,0,.03)"};
  opacity: .9;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(22px, 2.6vw, 32px);
  letter-spacing: -0.02em;
  line-height: 1.15;
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => (theme as any).colors?.textMuted || "rgba(0,0,0,.72)"};
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: 1.05fr .95fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: ${({ theme }) => (theme as any).radius?.xl || "16px"};
  padding: 22px;
  background: ${({ theme }) => (theme as any).colors?.card || "rgba(255,255,255,.72)"};
  border: 1px solid ${({ theme }) => (theme as any).colors?.border || "#e5e7eb"};
  box-shadow: ${({ theme }) => (theme as any).shadow?.md || "0 8px 30px rgba(0,0,0,.06)"};
  backdrop-filter: blur(6px);

  @media (max-width: 560px) { padding: 18px; }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px; height: 38px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => (theme as any).colors?.border || "#e5e7eb"};
  background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(245,246,248,.9));
  box-shadow: inset 0 -2px 6px rgba(0,0,0,.04);

  @media (max-width: 480px) { width: 34px; height: 34px; }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  letter-spacing: -.01em;

  @media (max-width: 480px) { font-size: 16px; }
`;

/* Lista rótulo/valor com foco no mobile */
const List = styled.dl`
  display: grid;
  grid-template-columns: 180px 1fr;
  row-gap: 12px;
  column-gap: 16px;
  margin: 0;

  dt{
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    opacity: .9;
    line-height: 1.25;
  }

  dd{
    margin: 0;
    opacity: .96;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    line-height: 1.35;

    /* Quebra segura de strings longas no mobile */
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  dd a{
    color: inherit;
    text-decoration: none;
    border-bottom: 1px dashed rgba(0,0,0,.12);
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    dt{ margin-top: 8px; }
  }

  @media (max-width: 480px) {
    row-gap: 10px;
    dt { font-size: 13px; }
    dd { font-size: 14px; }
  }
`;

/* Botões e Ações */
const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;
`;

const ActionBtn = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => (theme as any).colors?.border || "#e5e7eb"};
  padding: 11px 14px;
  border-radius: 12px;
  background: #fff;   /* botão branco */
  text-decoration: none;
  transition: transform .06s ease, box-shadow .2s ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 8px 16px rgba(0,0,0,.06); }
  &:active { transform: translateY(0); }

  @media (max-width: 480px) {
    padding: 9px 12px;
    font-size: 13px;
  }

  /* Ripple suave */
  @media (prefers-reduced-motion: no-preference) {
    &::after{
      content: "";
      position: absolute; inset: 0;
      border-radius: inherit;
      opacity: 0; transform: scale(.96);
      transition: opacity .25s, transform .25s;
      background: radial-gradient(120px 120px at var(--x,50%) var(--y,50%), rgba(0,0,0,.06), transparent 60%);
      pointer-events: none;
    }
    &:hover::after{ opacity: 1; transform: scale(1); }
  }
`;

const IconWrap = styled.span`
  display: inline-flex;
  width: 18px; height: 18px;
  align-items: center; justify-content: center;

  @media (max-width: 480px) { width: 16px; height: 16px; }
`;

/* Mapa & Skeleton */
const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const MapBox = styled.div`
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => (theme as any).colors?.border || "#e5e7eb"};
  aspect-ratio: 16/11;
  background: #f5f7fa;
  position: relative;

  iframe { width: 100%; height: 100%; border: 0; display: block; }

  .skeleton {
    position: absolute; inset: 0; border-radius: inherit;
    background: linear-gradient(90deg, #eef1f5 25%, #f6f8fb 37%, #eef1f5 63%);
    background-size: 800px 100%;
    animation: ${shimmer} 1.2s linear infinite;
  }
`;

/* Acessibilidade */
const SrOnly = styled.span`
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
`;

/* ===================== */
/* Ícones SVG             */
/* ===================== */
function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M3 21V6a1 1 0 0 1 1-1h6V3h4v2h6a1 1 0 0 1 1 1v15h-7v-5h-4v5H3Zm10-7h2V6h-2v8Z"/>
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.04-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h2.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.25 1.04l-2.19 2.19Z"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v.35l10 6.25L22 6.35V6a2 2 0 0 0-2-2Zm0 5.68L12.4 14a1 1 0 0 1-1 0L4 9.68V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.68Z"/>
    </svg>
  );
}
function IconCopy() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M16 1H6a2 2 0 0 0-2 2v10h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/>
    </svg>
  );
}

/* ===================== */
/* Constantes            */
/* ===================== */

const ENDERECO_TXT = "Estrada Bonsucesso, 1953 - Rio Abaixo, Itaquaquecetuba";
const NOME_EMPRESA = "Bras-Mol Molas e Estampados LTDA";
const CNPJ = "61.296.901/0002-48";
const FONE = "(11) 4648-2611";
const EMAIL_SAC = "sac@brasmol.com.br";
const EMAIL_VENDAS = "vendas@brasmol.com.br";

const ENC = encodeURIComponent(`${NOME_EMPRESA} - ${ENDERECO_TXT}`);
const GMAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ENC}`;
const WAZE_URL  = `https://waze.com/ul?q=${ENC}&navigate=yes`;
const GMAPS_EMBED = `https://www.google.com/maps?q=${ENC}&output=embed`;

/* ===================== */
/* Componente principal  */
/* ===================== */

export default function ContactCTA() {
  const mapId = useId();
  const [mapLoaded, setMapLoaded] = useState(false);

  // JSON-LD p/ SEO local
  const orgSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": NOME_EMPRESA,
    "url": typeof window !== "undefined" ? window.location.origin : undefined,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Estrada Bonsucesso, 1953",
      "addressLocality": "Itaquaquecetuba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "telephone": "+551146482611",
    "email": EMAIL_VENDAS,
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+551146482611",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese"]
    }]
  }), []);

  const onRipple = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
    (e.currentTarget as HTMLAnchorElement).style.setProperty("--x", `${e.clientX - rect.left}px`);
    (e.currentTarget as HTMLAnchorElement).style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const telHref = "tel:+551146482611";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copiado para a área de transferência.");
    } catch {
      alert("Não foi possível copiar agora.");
    }
  };

  return (
    <Box id="contato" aria-labelledby="contato-title">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header>
          <Eyebrow aria-hidden="true">
            <IconWrap><IconBuilding /></IconWrap>
            Contato oficial
          </Eyebrow>
          <Title id="contato-title">Contato oficial da Bras-Mol</Title>
          <Subtitle>Fale por telefone ou e-mail e trace sua rota pelo mapa.</Subtitle>
        </Header>

        <Grid>
          {/* Card de informações */}
          <Card itemScope itemType="https://schema.org/Organization" aria-labelledby="info-title">
            <CardHeader>
              <Badge aria-hidden="true"><IconBuilding /></Badge>
              <CardTitle id="info-title">{NOME_EMPRESA}</CardTitle>
            </CardHeader>

            <List>
              <dt><IconWrap aria-hidden="true"><IconBuilding /></IconWrap> CNPJ</dt>
              <dd>
                <span itemProp="taxID">{CNPJ}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(CNPJ)}
                  aria-label={`Copiar CNPJ ${CNPJ}`}
                  style={{
                    border: "1px solid rgba(0,0,0,.08)",
                    background: "transparent",
                    borderRadius: 8,
                    padding: "4px 6px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6
                  }}
                >
                  <IconCopy /> <span style={{fontSize:12,fontWeight:700}}>Copiar</span>
                </button>
              </dd>

              <dt><IconWrap aria-hidden="true"><IconMapPin /></IconWrap> Endereço</dt>
              <dd><span itemProp="address">{ENDERECO_TXT}</span></dd>

              <dt><IconWrap aria-hidden="true"><IconBuilding /></IconWrap> Cidade/UF</dt>
              <dd>Itaquaquecetuba / SP</dd>

              <dt><IconWrap aria-hidden="true"><IconPhone /></IconWrap> Telefone</dt>
              <dd><a href={telHref} itemProp="telephone" aria-label={`Ligar para ${FONE}`}>{FONE}</a></dd>

              <dt><IconWrap aria-hidden="true"><IconMail /></IconWrap> E-mail SAC</dt>
              <dd><a href={`mailto:${EMAIL_SAC}`} itemProp="email">{EMAIL_SAC}</a></dd>

              <dt><IconWrap aria-hidden="true"><IconMail /></IconWrap> E-mail Vendas</dt>
              <dd><a href={`mailto:${EMAIL_VENDAS}`} itemProp="email">{EMAIL_VENDAS}</a></dd>

              <dt><IconWrap aria-hidden="true"><IconBuilding /></IconWrap> Site</dt>
              <dd>
                <a href="https://www.brasmol.com.br" target="_blank" rel="noopener noreferrer">
                  www.brasmol.com.br
                </a>
              </dd>
            </List>

            <SrOnly>
              As informações acima incluem CNPJ, endereço, cidade/UF, telefone, e-mails de contato e site institucional.
            </SrOnly>
          </Card>

          {/* Card do mapa + ações */}
          <Card aria-labelledby={`${mapId}-title`}>
            <CardHeader>
              <Badge aria-hidden="true"><IconMapPin /></Badge>
              <CardTitle id={`${mapId}-title`}>Localização e rotas</CardTitle>
            </CardHeader>

            <MapBox>
              {!mapLoaded && <div className="skeleton" aria-hidden="true" />}
              <iframe
                title="Mapa - Bras-Mol"
                src={GMAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                onLoad={() => setMapLoaded(true)}
              />
            </MapBox>

            <Actions>
              <ActionBtn
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir no Google Maps em nova aba"
                onMouseMove={onRipple}
              >
                <img src="/google-maps.png" alt="Google Maps" width="20" height="20" />
                Google Maps
              </ActionBtn>

              <ActionBtn
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir no Waze em nova aba"
                onMouseMove={onRipple}
              >
                <img src="/waze.png" alt="Waze" width="20" height="20" />
                Waze
              </ActionBtn>
            </Actions>
          </Card>
        </Grid>
      </div>
    </Box>
  );
}
