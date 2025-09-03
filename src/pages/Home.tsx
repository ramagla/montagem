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
import Footer from "../components/Footer";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Home() {
  // ====== SEO base ======
  const baseUrl = "https://montagem.brasmol.com.br";
  const title =
    "Bras-Mol | Montagem de Subconjuntos Metálicos e Plásticos";
  const description =
    "Montagem terceirizada de subconjuntos metálicos e plásticos, molas e estampados, com controle de qualidade, rastreabilidade e processos padronizados.";
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
      <ContactCTA />
      <Footer />
    </>
  );
}
