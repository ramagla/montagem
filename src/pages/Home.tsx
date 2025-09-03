// src/pages/Home.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import Services from "../components/Services";
import Differentials from "../components/Differentials";
import Process from "../components/Process";
import Quality from "../components/Quality";
import Portfolio from "../components/Portfolio";
import ContactCTA from "../components/ContactCTA";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Home() {
  // ====== SEO base ======
  const baseUrl = "https://montagem.brasmol.com.br";
  const title = "Bras-Mol | Montagem de Subconjuntos Industriais";
  const description =
    "Montagem terceirizada de subconjuntos metálicos, plásticos e kits mecânicos com qualidade, rastreabilidade e prazo garantido.";
  const ogImage = `${baseUrl}/og-image.jpg`;

  // ====== Rota atual (para canonical dinâmico) ======
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/" || pathname === "";
  const canonicalUrl = isHome ? `${baseUrl}/` : `${baseUrl}${pathname}`;

  // ====== Scroll de compatibilidade (hash e rotas amigáveis) ======
  useEffect(() => {
    // 1) Se veio com hash (#secao), respeita
    const hashId = (hash || "").replace("#", "");
    if (hashId) {
      const el = document.getElementById(hashId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // 2) Se está em uma rota amigável (/secao), rola para a seção correspondente
    //    Observação: o router também já faz isso, mas aqui garantimos quando a Home é reutilizada.
    const slug = pathname.startsWith("/") ? pathname.slice(1) : pathname;
    const known = new Set([
      "servicos",
      "setores",
      "diferenciais",
      "processo",
      "qualidade",
      "portfolio",
      "contato",
    ]);
    if (slug && known.has(slug)) {
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // mantém a UX com o hash visível (opcional)
        history.replaceState(null, "", `#${slug}`);
      }
    }
  }, [pathname, hash]);

  // ====== JSON-LD (Organization) ======
  const organizationLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bras-Mol Molas e Estampados LTDA",
    url: baseUrl + "/",
    logo: `${baseUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Itaquaquecetuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    telephone: "+55 11 4648-2611",
    email: "vendas@brasmol.com.br",
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Canonical e OG por rota */}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Organization JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(organizationLdJson)}
        </script>
      </Helmet>

      <Header />
      <Hero />
      <Services />
      <Sectors />
      <Differentials />
      <Process />
      <Quality />
      <Portfolio />

      {/* ====== Seção rica em texto para SEO ====== */}
      <RichTextSection id="sobre" aria-labelledby="sobre-title">
        <div className="container">
          <h2 id="sobre-title" className="h4 fw-bold mb-2">
            Terceirização de montagem: qualidade, custo e prazo
          </h2>
          <p className="mb-2">
            A <strong>Bras-Mol</strong> atua na{" "}
            <strong>montagem terceirizada de subconjuntos industriais</strong>,
            integrando peças <strong>metálicas</strong>,{" "}
            <strong>plásticas</strong> e <strong>kits mecânicos</strong> em um
            processo padronizado do início ao fim. Nosso objetivo é que o
            cliente receba o subconjunto pronto para a linha de produção, com{" "}
            <strong>rastreabilidade por lote</strong>,{" "}
            <strong>testes funcionais e dimensionais</strong> e{" "}
            <strong>documentação</strong> que comprova a conformidade do
            produto. Essa abordagem reduz gargalos internos, libera o time para
            o core business e melhora a previsibilidade de custo e prazo.
          </p>
          <p className="mb-2">
            Trabalhamos com <strong>poka-yoke</strong>, controle de{" "}
            <strong>torque/força</strong>, inspeções visuais e dimensionais,
            além de <strong>etiquetagem</strong> e{" "}
            <strong>embalagem final</strong> conforme o padrão do cliente.
            Nossos registros são auditáveis e seguem as melhores práticas de{" "}
            <strong>IATF 16949</strong> e diretrizes <strong>ISO 14001</strong>,
            com atenção à <strong>LGPD</strong> e à{" "}
            <strong>segurança da informação</strong>. A engenharia de processos
            apoia desde o <em>briefing</em> técnico até a validação de amostra
            padrão, garantindo repetibilidade, qualidade e estabilidade
            produtiva.
          </p>
          <p className="mb-0">
            Atendemos <strong>Automotivo/Aftermarket</strong>,{" "}
            <strong>Linha Branca</strong>, <strong>Linha Marron</strong>,{" "}
            <strong>Agrícola</strong> e <strong>Máquinas e Equipamentos</strong>
            . Se você busca padronização, flexibilidade para picos de demanda e{" "}
            <strong>cumprimento rigoroso de prazos</strong>, a Bras-Mol combina
            estrutura, método e indicadores para entregar{" "}
            <strong>custo competitivo</strong> e <strong>qualidade</strong> em
            escala. Fale com nosso time para avaliar a viabilidade do seu
            projeto e definir o <strong>roteiro de montagem</strong> ideal.
          </p>
        </div>
      </RichTextSection>

      <ContactCTA />
      <Footer />
    </>
  );
}

// ====== estilos locais ======
const RichTextSection = styled.section`
  background: #fff;
  border-top: 1px solid ${({ theme }) => (theme as any).colors.border};
  padding: 40px 0;
  scroll-margin-top: 80px;

  p {
    color: #4b5563;
  }

  @media (max-width: 768px) {
    display: none; /* esconde no mobile */
  }
`;

